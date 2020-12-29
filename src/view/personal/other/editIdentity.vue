<template>
	<div class="view_assets_identity">
		
		<header-top :titlet=" $t('personal.editIdentity.title') " :title="$t('personal.title')"></header-top> 
		
		<div class="global_main main">
			<div class="title">
				{{ type==1? $t('personal.editIdentity.lv1') : $t('personal.editIdentity.lv2') }}
			</div>
			<div class="tip">
				<i class="iconfont icon-gantanhao"></i>
				<span style="padding-left: 35px;max-width: 80%;display: inline-block;">{{ $t('personal.editIdentity.tip') }}</span>
				<i class="iconfont icon-close1" style="left: auto;right: 20px;" @click="remove"></i>
			</div>
			<ul class="lists"  v-if="type==1">
				<li>
					<span class="l">
						{{ $t('personal.editIdentity.zjlx') }}
					</span>
					<div class="r">
						<van-radio-group v-model="form.cardType" direction="horizontal">
						  <van-radio  :name="item.id" v-for="item in $t('personal.editIdentity.idType')">{{item.text}}</van-radio>
						</van-radio-group>
					</div>
				</li>
				<li>
					<span class="l">
						<i>*</i>
						{{ $t('personal.editIdentity.gj') }}
					</span>
					<div class="r">
						<span @click="gjDlg.show = true" class="gj" :style="{color:form.country ? '#333' : '#D3D3D3'}"> {{ form.country ? form.country : $t('personal.editIdentity.gjt') }}  <i class="iconfont icon-jiantou"></i> </span>
					</div>
				</li>
				<li class="two">
					<span class="l">
						<i>*</i>
						{{ $t('personal.editIdentity.m') }}
					</span>
					<div class="r">
						<input v-model="form.name" type="text" :placeholder="$t('personal.editIdentity.mt')">
					</div>
				</li>
				<li class="two">
					<span class="l">
						<i>*</i>
						{{ $t('personal.editIdentity.x') }}
					</span>
					<div class="r">
						<input v-model="form.surname" type="text" :placeholder="$t('personal.editIdentity.xt')">
					</div>
				</li>
				<li>
					<span class="l">
						<i>*</i>
						{{ $t('personal.editIdentity.zjh') }}
					</span>
					<div class="r">
						<input type="text" v-model="form.cardNumber" :placeholder="$t('personal.editIdentity.zjht')">
					</div>
				</li>
				<li v-if="form.cardType==1">
					<span class="l">
						<i>*</i>
						{{ $t('personal.editIdentity.hzxx') }}
					</span>
					<div class="r upload">
						<van-uploader class="hz"  :after-read="afterRead" v-model="fileList" :max-count="1"></van-uploader>
						<span class="ts" v-html="$t('personal.editIdentity.hzts')"></span>
					</div>
				</li>
				<li v-else>
					<span class="l">
						<i>*</i>
						{{ $t('personal.editIdentity.sfxx') }}
					</span>
					<div class="r upload idcard">
						<van-uploader class="z"  :after-read="afterRead" v-model="fileList" :max-count="1"></van-uploader>
						<van-uploader class="f"  :after-read="afterReadf" v-model="fileList2" :max-count="1"></van-uploader>
						<span class="ts" v-html="$t('personal.editIdentity.sfts')"></span>
					</div>
				</li>
				<li>
					<span class="l" style="opacity: 0;"> ''</span>
					<div class="r">
						<van-button @click="baseSubmit" type="info">{{ $t('personal.editIdentity.tjrz') }}</van-button>
					</div>
				</li>
			</ul>
			<ul class="lists" v-else>
				<li>
					<span class="l">
						<i>*</i>
						{{ $t('personal.editIdentity.scrz') }}:
					</span>
					<div class="r upload idcard vodio">
						<van-uploader v-if="!form.cardFront" class="" accept=".mp4,.AVI,.mov,.rmvb,.rm,.FLV,.3GP" :after-read="afterRead" v-model="fileList" :max-count="1">
							
						</van-uploader>
						<div v-else class="pre">
							<i class="iconfont icon-close" @click="clearVodio"></i>
							<video controls="controls" :src="form.cardFront"></video >
						</div>
						<div class="v_nums">
							<p>{{ $t('personal.editIdentity.qzlz') }}</p>
							<div>
								<span v-for="item in arr">{{item}}</span>
							</div>
						</div>
					</div>
				</li>
				<!-- <li>
					<span class="l" style="opacity: 0;"> ''</span>
					<div class="r">
						<van-button type="info">{{ $t('personal.editIdentity.tjrz') }}</van-button>
					</div>
				</li> -->
			</ul>
			<div>
				
			</div>
		</div>
		
		
		
		<!-- 国籍 -->
		<van-popup v-model="gjDlg.show" :position="isPhone ? 'bottom' : 'center'">
			 <van-picker
			  title=""
			  show-toolbar
			  :columns="citys"
			  @confirm="gjOk"
			  @cancel="gjOk"
			/> 
		</van-popup>
		
	</div>
</template>

<script>
	import citys from '@/uitl/citys'
	import updateUser from '@/uitl/updateUser'
	export default {
		data(){
			return{
				arr:[],
				fileList: [],
				fileList2:[],
				form:{
					cardType:0,
					country:'',
					name:'',
					surname:'',
					cardNumber:'',
					cardFront:'',//s-正
					cardBack:'',//s-反
				},
				gjDlg:{
					show:false
				}
			}
		},
		props:{
			type:{
				type:[String,Number],
				default:1
			}
		},
		computed:{
			citys(){
				let citysD = []
				citys.Citylist.map(item=>{
					item.data.map(tt=>{
						this.$i18n.locale == 'zh' ? citysD.push(`${tt.cityName}`) : citysD.push(`${tt.en}`)
						
					})
				})
				return citysD
			}
			
		},
		mounted() {
			let arr = []
				for(let i in [0,0,0,0]){
					arr.push(Math.floor(Math.random()*10))
				}
			this.arr = arr
		},
		methods:{
			remove(e){
				document.querySelector(".view_assets_identity .tip").remove()
			},
			gjOk(e){
				this.form.country = e
				this.gjDlg.show = false
				console.log(e)
			},
			afterRead(file) {
				
				file.status = 'uploading';
				file.message = this.$t('personal.data.scz');
				
				let formData = new FormData();
				    formData.append("file",file.file);
					
					let post = this.type ==1 ? this.$http.uploadFile : this.$http.videoAuthentication 
					
					post(formData).then(res=>{
						if(res.code==0){
							if(this.type ==1){
								this.fileList = [{ url: res.data}]
								this.form.cardFront = res.data
							}else{
								this.$notify({
									type:'success',
									message:this.$t('global.base.tjcg')
								})
								updateUser.call(this)
								this.$router.go(-1)
							}
							
						}else{
							file.status = 'failed';
							file.message =  this.$t('personal.data.scs');
						}
					})
					
			},
			afterReadf(file){
				file.status = 'uploading';
				file.message = this.$t('personal.data.scz');
				
				let formData = new FormData();
				    formData.append("file",file.file);
					
					this.$http.uploadFile(formData).then(res=>{
						if(res.code==0){
							this.fileList2 = [{ url: res.data}]
							this.form.cardBack = res.data
						}else{
							file.status = 'failed';
							file.message =  this.$t('personal.data.scs');
						}
					})
			},
			baseSubmit(){
				let Toast = this.$toast.loading({
				  message: this.$t('global.base.loading'),
				  forbidClick: true,
				});
				this.$http.basicAuthentication({
					...this.form
				}).then(res=>{
					Toast.clear();
					if(res.code==0){
						this.$notify({
							type:'success',
							message:this.$t('global.base.tjcg')
						})
						updateUser.call(this)
						this.$router.go(-1)
					}
				})
			},
			clearVodio(){
				this.form.cardFront = ''
				this.fileList = []
			}
			
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_assets_identity{
		.main{
			.title{
				padding: 30px 0;
				font-size: 24px;
			}
			.tip{
				.tips-org;
				padding: 10px;
				max-width: 550px;
				span{
					width: 100%;
				}
				i:last-child{
					font-size: 12px;
					cursor: pointer;
				}
			}
			
			.lists{
				padding: 30px 0;
				.clearfix;
				li{
					float: left;
					width: 100%;
					margin-bottom: 30px;
					.clearfix;
					.l{
						width: 130px;
						margin-right: 20px;
						box-sizing: border-box;
						text-align: right;
						float: left;
						color: #666;
						&>i{
							color: @red;
							font-weight: bold;
							margin-right: 3px;
							position: relative;
							top: 2px;
						}
					}
					.r{
						float: left;
						width: calc(100% - 150px);
						
						.gj{
							cursor: pointer;
							display: inline-block;
							background-color: #fff;
							border: 1px solid #E3E3E3;
							opacity: 1;
							border-radius: 4px;
							padding: 7px 10px;
							color: #D3D3D3;
							i{
								display: inline-block;
								font-size: 14px;
								transform: rotate(-90deg);
								margin-left: 10px;
							}
						}
						
					}
					.upload{
						
						&>span{
							display: inline-block;
							color: #666666;
							margin-left: 20px;
							position: relative;
							top: -100px;
							line-height: 40px;
						}
					}
					.idcard{
						
						&>span{
							line-height: 30px;
							top: -15px;
							max-width: 50%;
						}
					}
					.v_nums{
						position: relative;
						top: -35px;
						padding-left: 50px;
						display: inline-block;
						p{
							color: #666666;
							padding-bottom: 30px;
						}
						div{
							display: flex;
							span{
								flex: 1;
								text-align: center;
								color: #FF8308;
								padding-bottom: 5px;
								font-size: 22px;
								margin-left: 20px;
								display: inline-block;
								border-bottom: 2px solid #D7D7D7;
							}
							span:first-child{
								margin: 0;
							}
						}
					}
				}
				.two{
					width: 50%;
					
				}
				
				
				
			}
			
		}
	}
	@media (max-width:1023px) {
		.view_assets_identity{
			.main{
				.lists{
					li{
						.l{
							display: block;
							text-align: left;
							float: none;
							margin-bottom: 5px;
						}
						.r{
							float: none;
							width: 100%;
						}
						.upload{
							&>span{
								top: 0;
								margin: 0;
								display: block;
								line-height: 20px;
								width: 100%;
								max-width: 100%;
							}
						}
						.v_nums{
							top: 0;
							display: block;
							padding: 0;
							width: 100%;
						}
					}
					.two{
						width: 100%;
					}
				}
			}
		}
	}
</style>

<style lang="less">
	
	.view_assets_identity{
		.main{
			.lists{
				li{
					.upload{
						.clearfix;
						.pre{
							width: 230px;
							height: 130px;
							margin-right: 20px;
							overflow: hidden;
							display: inline-block;
							border-radius: 5px;
							border: 1px solid #489EEC;
							position: relative;
							video{
								display: block;
								width: 100%;
								height: 100%;
							}
							.icon-close{
								position: absolute;
								right: 5px;
								top: 5px;
								cursor: pointer;
								z-index: 10000;
							}
						}
						.van-uploader{
							display: inline-block;
							background-color: #fff;
							border: 1px solid #489EEC;
							opacity: 1;
							overflow: hidden;
							width: 196px;
							height: 250px;
							border-radius: 5px;
							.van-uploader__wrapper{
								width: 100%;
								height: 100%;
							}
							.van-uploader__upload{
								background-color: transparent;
								width: 100%;
								height: 100%;
								margin: 0;
							}
							.van-uploader__upload-icon{
								width: 100%;
								height: 100%;
								background-size: 80% 80%;
								background-repeat: no-repeat;
								position: relative;
								background-position: 20px 25px;
								&::before{
									color: @blue;
									opacity: 0.6;
									position: absolute;
									right: 35%;
									top: 45%;
									transform: translate(-50%,-50%);
								}
							}
							
							.van-uploader__preview{
								margin: 0;
								width: 100%;
							}
							.van-uploader__preview-image{
								width: 100%;
								height: 100%;
							}
						}
						.hz{
							.van-uploader__upload-icon{
								background-image: url(../../../assets/img/hz.png);
							}
						}
					}
					
					.idcard{
						.van-uploader{
							width: 160px;
							height: 100px;
							margin-right: 20px;
						}
						.z{
							.van-uploader__upload-icon{
								background-image: url(../../../assets/img/idcardz.png);
								background-position: 0 0;
								background-size: 100% 100%;
							}
						}
						.f{
							.van-uploader__upload-icon{
								background-image: url(../../../assets/img/idcardf.png);
								background-position: 0 0;
								background-size: 100% 100%;
							}
						}
					}
					.vodio{
						.van-uploader{
							width: 230px;
							height: 130px;
						}
						.van-uploader__upload-icon{
							background-image: none;
							&::before{
								left: 50%;
							}
						}
						.van-uploader__preview{
							height: 100%;
						}
					}
				}
			}	
		}
	}
	
</style>
