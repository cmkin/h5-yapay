<template>
	<div class="view_personal_paymentMethod">
		<header-top :titlet="$t('personal.paymentMethod.titlet')" :title="$t('personal.title')"></header-top>

		<div class="global_main main">
			<div class="tip">
				<i class="iconfont icon-gantanhao"></i>
				<span style="padding-left: 40px;max-width: 80%;">{{ $t('personal.editIdentity.tip') }}</span>
				<i style="right: 10px;left: auto;" class="iconfont icon-close1" @click="remove"></i>
			</div>

			<ul class="lists" v-if="payList.length">
				<li>
					<span>{{ $t('personal.paymentMethod.sfk') }}</span>
					<div class="content">
						<div class="type"><myselect v-model="form.type" icon :lists="payList"></myselect></div>
					</div>
				</li>
				<li>
					<span>{{ $t('personal.paymentMethod.xm') }}</span>
					<div class="content"><input v-model="form.name" type="text" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.xm')" /></div>
				</li>
				<li v-if="form.type == 1">
					<span>{{ $t('personal.paymentMethod.zfb') }}</span>
					<div class="content"><input v-model="form.account" type="text" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.zfb')" /></div>
				</li>

				<li v-if="form.type == 2">
					<span>{{ $t('personal.paymentMethod.wx') }}</span>
					<div class="content"><input type="text" v-model="form.account" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.wx')" /></div>
				</li>

				<li v-if="form.type == 3">
					<span>{{ $t('personal.paymentMethod.yhkh') }}</span>
					<div class="content"><input type="text" v-model="form.account" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.yhkh')" /></div>
				</li>
				<li v-if="form.type == 3">
					<span>{{ $t('personal.paymentMethod.khh') }}</span>
					<div class="content"><input type="text" v-model="form.bankName" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.khh')" /></div>
				</li>
				<li v-if="form.type == 3">
					<span>{{ $t('personal.paymentMethod.khd') }}</span>
					<div class="content"><input type="text" v-model="form.bank" :placeholder="$t('personal.paymentMethod.eq')" /></div>
				</li>

				<li v-if="form.type == 4">
					<span>{{ $t('personal.paymentMethod.pay') }}</span>
					<div class="content"><input type="text" v-model="form.account" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.pay')" /></div>
				</li>

				<li v-if="form.type == 1 || form.type == 2">
					<span>{{ $t('personal.paymentMethod.skm') }}</span>
					<div class="content"><van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" /></div>
				</li>
				<li>
					<div class="content" v-if="!id">
						<van-button style="width: 100px;" @click="edit" type="info">{{ $t('personal.paymentMethod.add') }}</van-button>
					</div>
					<div v-else class="content">
						<van-button style="width: 100px;" @click="edit" type="info">{{ $t('personal.paymentMethod.edit') }}</van-button>
						<van-button style="width: 100px; margin-left: 20px;" @click="remove" type="danger">{{ $t('personal.paymentMethod.remove') }}</van-button>
					</div>
				</li>
			</ul>
			<ul v-else style="padding-top: 60px;">
				{{
					$t('global.base.allpay')
				}}
			</ul>
		</div>
	</div>
</template>

<script>
	import updateUser from '@/uitl/updateUser'
export default {
	data() {
		return {
			fileList:[],
			form:{
				type:null,
				name:'',
				account:'',
				qrCode:'',
				bankName:'',
				bank:"",
			},
			id:null
		};
	},
	mounted() {
		this.id = this.$route.query.id
		this.form.type = this.id ? this.id : this.payList[0].id
		if(this.$route.query.hasOwnProperty("type")){
			this.form.type = this.$route.query.type
		}
	},
	computed:{
		payList(){

			if(this.userInfos.payList && this.userInfos.payList.length){
				if(this.id){
					return [{
						...this.userInfos.payList.filter(item=>item.type==this.id)[0],
						...this.$t('global.payType').filter(item=>{
							return this.id == item.id
						})[0]
					}]
				}
				return this.$t('global.payType').filter(item=>{
				   return !this.userInfos.payList.some(tt=>tt.type==item.id)
				})
			}else{
				return this.$t('global.payType')
			}

		}
	},
	watch:{
		payList(){
			if(this.id){
				this.form = { ...this.payList[0] }
				this.fileList = [{url:this.form.qrCode}]
			}
		}
	},
	methods: {
		remove(e){
			document.querySelector(".view_personal_paymentMethod .tip").remove()
		},
		afterRead(file) {
			file.status = 'uploading';
			file.message = this.$t('personal.data.scz');
			
			let formData = new FormData();
			    formData.append("file",file.file);
				
				this.$http.uploadFile(formData).then(res=>{
					if(res.code==0){
						this.fileList = [{ url: res.data}]
						this.form.qrCode = res.data
					}else{
						file.status = 'failed';
						file.message =  this.$t('personal.data.scs');
					}
				})
			
		},
		edit(){
			let Toast = this.$toast.loading({
			  message: this.$t('global.base.loading'),
			  forbidClick: true,
			});
			this.$http.uploadPayInfo({
				...this.form,
				userid:this.$getToken(1)
			}).then(res=>{
				Toast.clear();
				if(res.code==0){
					this.$notify({
						type:'success',
						message:this.$t('global.base.xgcg')
					})
					updateUser.call(this)
					this.$router.go(-1)
				}
			})
		},
		remove(){
			this.$dialog.confirm({
			 cancelButtonText: this.$t('global.base.cancel'),
			 confirmButtonText: this.$t('global.base.ok'),
			 title: this.$t('global.base.wxts'),
			  message:this.$t('personal.paymentMethod.okdel'),
			  beforeClose:(action, done)=>{
			    if (action === 'confirm') {
						
						let Toast = this.$toast.loading({
						  message: this.$t('global.base.loading'),
						  forbidClick: true,
						});
						this.$http.deleteUserPayInfo({
							paymentType:this.id,
							userid:this.$getToken(1)
						}).then(res=>{
							Toast.clear();
							done()
							if(res.code==0){
								this.$notify({
									type:'success',
									message:this.$t('global.base.sccg')
								})
								updateUser.call(this)
								this.$router.go(-1)
							}
						})
				 
				 
			    } else {
			      done();
			    }
			  }
			})


			
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.view_personal_paymentMethod {
	.main {
		padding-top: 30px;
		.tip {
			.tips-org;
			max-width: 550px;
			padding: 10px;
			span {
				width: 100%;
			}
			i:last-child {
				font-size: 12px;
				cursor: pointer;
			}
		}
		.lists {
			padding-top: 30px;
			& > li {
				margin-bottom: 20px;
				& > span {
					display: block;
					margin-bottom: 5px;
					color: #666666;
				}
				.content {
					display: inline-block;
					max-width: 450px;
					width: 100%;
					.type {
						background: #ffffff;
						border: 1px solid #e3e3e3;
						opacity: 1;
						border-radius: 2px;
						background-color: #fff;
						width: 140px;
					}
				}
			}
		}
	}
}
</style>
<style lang="less">
.view_personal_paymentMethod {
	.main {
		.lists {
			li {
				.content {
					.type {
						.icon_s {
							padding: 5px;
							li {
								padding: 7px 15px;
							}
						}
					}
				}
			}
		}
	}
}
</style>
