<template>
	<div class="global_chat">
		<div class="title clearfix">
			<img :src="$t('global.usdt')" alt="">
			<span>{{to.nickname}}</span>
		</div>
		<div class="main">
			<vue-scroll :ops="ops" ref="myscroll">
				<ul class="his_list">
					
					<li  v-for="item in lists">
						
						<div :class="item.msgType==0?'me':'to'"  v-if="item.type==0">
							<img :src="item.msgType==0? userInfos.headurl : to.headurl " alt="">
							<span>{{item.message}}</span>
						</div>
						<div v-if="item.type==2" :class="item.msgType==0?'me':'to'" class="">
							<img :src="item.msgType==0? userInfos.headurl : to.headurl " alt="">
							<span>
								<img  class="img" @click="showImg(getUrl(item.message).url)" :src="getUrl(item.message).url" :style="{width:getUrl(item.message).width+'px',height:getUrl(item.message).height+'px'}" alt="">
							</span>
						</div>
						<div v-if="item.type==3" class="time">
							{{ getTime(item.message)}}
						</div>
						<div v-if="item.type==1" class="ts">
							 {{ getMessage(item.message).text  }}
						</div>
					</li>
				</ul>
			</vue-scroll>
		</div>
		
		<div class="input_buttom clearfix">
			
			<input class="input" @keyup.enter="send" v-model="input" name="" id="" cols="30" rows="10" :placeholder="$t('global.base.qsrnr')" />
			<div class="btns">
				<van-button @click="send" :disabled="!input" type="info">{{ $t('global.base.send') }}</van-button>
				<div>
					<input accept="image/*" type="file" ref="chatFile" @change="imgUpload">
					<svg t="1600762734579" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4645" width="48" height="48"><path d="M432.888596 655.403778 359.342127 553.64633C349.598306 540.164971 333.800712 540.16511 324.05699 553.64633L188.471613 741.23959C178.727792 754.72095 184.541661 765.649501 201.457031 765.649501L447.704979 765.649501 822.658642 765.649501C839.583509 765.649501 845.267916 754.74485 835.42945 741.293282L620.563382 447.519305C610.659782 433.978682 594.773609 434.067737 584.935143 447.519305L432.888596 655.403778 432.888596 655.403778Z" p-id="4646"></path><path d="M273.271058 347.873852a58.4 58.4 0 1 0 119.364471 0 58.4 58.4 0 1 0-119.364471 0Z" p-id="4647"></path><path d="M109.081528 198.668263 914.918473 198.668263C906.5326 198.668263 899.934531 191.991158 899.934531 183.80075L899.934531 840.19925C899.934531 831.991651 906.565377 825.331737 914.918473 825.331737L109.081528 825.331737C117.4674 825.331737 124.065469 832.008842 124.065469 840.19925L124.065469 183.80075C124.065469 192.008349 117.434624 198.668263 109.081528 198.668263ZM64.383234 840.19925C64.383234 864.812398 84.345684 885.013972 109.081528 885.013972L914.918473 885.013972C939.585548 885.013972 959.616766 864.894939 959.616766 840.19925L959.616766 183.80075C959.616766 159.187602 939.654316 138.986028 914.918473 138.986028L109.081528 138.986028C84.414452 138.986028 64.383234 159.105061 64.383234 183.80075L64.383234 840.19925Z" p-id="4648"></path></svg>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import socket from '@/uitl/socket.js';
	import { ImagePreview } from 'vant';
	
	export default {
		name: 'chat',
		data() {
			return {
				input:'',
				ops: {
					vuescroll: {
						wheelScrollDuration:500
					},
					scrollPanel: {
						
					},
					rail: {},
					bar: {
						background:"#e3e3e3"
					}
				}
			}
		},
		props:{
			to:{
				type:Object,
				default:()=>{
					return {
						nickname:'',
						friendid:'',
						headurl:''
					}
				}
			}
		},
		mounted() {
			//到底部
			this.friendid = this.to.friendid
			this.$store.commit('updateChatHis',{
				isInfo:true,
				...this.to
			})
			
				this.$refs["myscroll"].scrollTo(
				  {
				    y: 200000
				  },
				  0,
				  "easeInQuad"
				);
			
			 
			
		},
		computed:{
			lists(){
				
				let alllist = this.$store.state.chat.lists[this.to.friendid]
				
					return alllist && alllist.lists  ? alllist.lists : []
			},
			getTime(){
				//timeFormat
				return function(data){
					let time = (new Date().getTime() - data) / 1000
						
						if( new Date().getDate() == new Date(data).getDate() && new Date().getFullYear() == new Date(data).getFullYear() && new Date().getMonth() == new Date(data).getMonth() ){
							
							return this.$options.filters.timeFormat(data,'hh:mm')
							
						}else{
							return this.$options.filters.timeFormat(data)
						}
						
				}
			},
			getMessage(){
				return function(data){
					
					let type = 1
					
					//return data
					
					
					let obj = {
						tips: typeof data =='string' ? JSON.parse(data) : data,
					}
					
					let obj2 = {
						text: this.$t('global.base.zusj'),
						time:null,
						isNew:this.$store.state.message.isNew
					}
					console.log(obj)
					 switch(type){
						 
						 case 1:
							if(obj.tips){
								if(obj.tips.protocol ==4){
									obj2.text = this.$t('message.tips.protocol').filter(item=>item.id == obj.tips.status)[0].text[obj.tips.type]
									obj2.time = obj.tips.createtime
								}else{
									obj2.text = this.$t('message.tips.type').filter(item=>item.id == obj.tips.type)[0].text
									obj2.time = obj.tips.createtime
								}	
							}
						 break;
						
					 }
					 return obj2
				}
			},
			
			getUrl(){
				return function(value){
					let data = JSON.parse(value)
					let bl = data.width/data.height
					 if(data.width>180){
						data.width = 180
						data.height = data.width/bl
					 }
					return data
				}
			}
		},
		watch:{
			'lists.length':{
				handler(val){
					setTimeout(()=>{
						
						this.$refs["myscroll"].scrollTo(
						  {
						    y: 200000
						  },
						  0,
						  "easeInQuad"
						);
					},100)
					
					
				}
			}
		},
		methods: {
			send(){
				if(this.input==''){
					return
				}
				let obj = {
					"friendid": this.to.friendid,
					"message": this.input,
					"time":new Date().getTime(),
					"type": 0  // 0文字消息 ， 1 订单  2图片消息  3 时间
				}
				socket.sendMessage(obj)
				
				this.$store.commit('updateChatHis',{
					...obj,
					msgType:0, //0是发送 -自己 1 是接受 别人 
				})

				this.input = ''
				
				this.toBottom()
					
			},
			showImg(img){
				ImagePreview({
					 images: [
					    img
					 ],
					 closeable: true
				})
			},
			imgUpload(e){
				let files = this.$refs.chatFile.files[0]
					if(!files){
						return
					}
					let formData = new FormData();
					    formData.append("file",files);
						
					
					const toast  = this.$toast.loading({
					  message: this.$t('global.base.loading'),
					  forbidClick: true,
					});	
					this.$http.uploadFile(formData).then(res=>{
						//上传成功
						if(res.code==0){
							let img = new Image()
								img.src=res.data
								img.onload=(e)=>{
									let obj = {
										"friendid": this.to.friendid,
										"message":JSON.stringify({url:res.data,width:img.width,height:img.height}),
										"time":new Date().getTime(),
										"type": 2  // 0文字消息 ， 1 订单  2图片消息  3 时间
									}
										
									this.$store.commit('updateChatHis',{
										...obj,
										msgType:0, //0是发送 -自己 1 是接受 别人 
									})
									
									socket.sendMessage(obj)
									this.$refs.chatFile.value = ''
									this.toBottom()
									toast.clear();
								}
						}
						
						
						
					})	
			},
			toBottom(){
				setTimeout(()=>{
					
					this.$refs["myscroll"].scrollTo(
					  {
					    y: 200000
					  },
					  0,
					  "easeInQuad"
					);
				},100)
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.global_chat {
		.title {
			.box_title;

			&>img {
				width: 32px;
				height: 32px;
				border-radius: 50%;
			}

			&>span {
				padding-top: 5px;
				font-size: 14px;
			}
		}
		.his_list{
			text-align: center;
			padding: 20px;
			box-sizing: border-box;
			height: 430px;
			box-sizing: border-box;
			li{
				margin-bottom: 10px;
			}
			li:last-child{
				margin-bottom: 30px;
			}
			.time{
				font-size: 13px;
				padding: 8px 0;
			}
			.ts{
				color: #B3B3B3;
				font-size: 12px;
			}
			.to{
				min-height: 40px;
				position: relative;
				padding-left: 50px;
				padding-top: 20px;
				box-sizing: border-box;
				text-align: left;
				&>img{
					position: absolute;
					left: 0;
					top: 0;
					width: 40px;
					height: 40px;
					border-radius: 50%;
					background-color: #ccc;
				}
				span{
					display: inline-block;
					background: #F3F3F3;
					opacity: 1;
					border-radius: 0px 15px 15px 15px;
					text-align: left;
					padding: 5px 10px;
					max-width: 180px;
					word-wrap: break-word;
					word-break: normal;
				}
			}
			.me{
				.to;
				padding-left: 0;
				padding-right: 50px;
				text-align: right;
				&>img{
					left: auto;
					right: 0;
				}
				span{
					border-radius: 15px 0px 15px 15px;
					background: @blue;
					color: #fff;
				}
			}
			.img{
				display:block;
				width: 100%;
			}
		}
		.input_buttom{
			width: 100%;
			padding: 15px;
			box-sizing: border-box;
			border-top: 1px solid #E3E3E3;
			position: relative;
			padding-right: 110px;
			.input{
				width: 100%;
				border: none;
				position: relative;
				top: 0px;
				resize:none;
				padding:0;
				padding-right: 10px;
			}
			.btns{
				width: 110px;
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			
				&>div{
					width: 30px;
					height: 30px;
					//margin-left: 15px;
					cursor: pointer;
					float: right;
					margin-right: 10px;
					display: inline-block;
					overflow: hidden;
					position: relative;
					input{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						cursor: pointer;
						opacity: 0;
						z-index: 1;
					}
					svg{
						width: 30px;
						height: 30px;
						cursor: pointer;
					}
				}
			}
		}
	}

</style>
<style lang="less">
	.global_chat{
		.van-button--default{
			background: #F3F3F3;
			font-size: 12px;
			padding: 0;
			height: auto;
			
			padding: 8px 12px;
			
		}
		.van-button--info{
			font-size: 12px;
			padding: 0;
			height: auto;
			padding: 8px 12px;
			
		}
	}
</style>
