<template>
	<div class="g_upload">
		<div class="up">
			<div class="img" v-if="value && value.length">
				<img :src="value[0].url" alt="">
			</div>
			<i v-else class="iconfont icon-shangchuan"></i>
			<input ref="upload" @change="inputChange" type="file" :accept="accept">
			<div class="ts" v-if="datas.status == 'uploading' || datas.status == 'failed'">
				<van-loading color="#fff" v-if="datas.status == 'uploading'" />
				<van-icon name="close" color="#fff" v-if="datas.status == 'failed'" />
				<p>{{datas.message}}</p>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:"upload",
		data(){
			return{
				datas:{
					file:'',
					status:'',
					message:''
				}
			}
		},
		model:{
			prop: 'value',
			event: 'input'
		},
		watch:{
			value(){
				this.datas={
					file:'',
					status:'',
					message:''
				}
			}
		},
		props:{
			accept:{
				default:"image/*",
				type:String
			},
			value:{},
			afterRead:{
				type:Function,
				default:()=>{
					return function(){}
				}
			},
		},
		mounted() {
			
		},
		methods:{
			inputChange(e){
				this.datas.file = e.target.files[0]
				if(this.datas.file){
					this.afterRead(this.datas)
				}
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.g_upload{
		display: inline-block;
		width: 90px;
		height: 90px;
		border-radius: 2px;
		cursor: pointer;
		border: 1px solid @blue;
		.up{
			width: 100%;
			height: 100%;
			position: relative;
			.img{
				height: 100%;
				img{
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.ts{
				padding-top: 15px;
				box-sizing: border-box;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 10;
				background-color: rgba(0,0,0,0.5);
				text-align: center;
				p{
					color: #fff;
				}
			}
			i{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				font-size: 35px;
				text-align: center;
				color: @blue;
				z-index: 1;
			}
			input{
				position: absolute;
				top: 0;
				left: 0;
				z-index: 5;
				display: block;
				width: 100%;
				height: 100%;
				opacity: 0;
				cursor: pointer;
			}
		}
		
	}
</style>
