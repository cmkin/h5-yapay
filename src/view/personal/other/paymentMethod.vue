<template>
	<div class="view_personal_paymentMethod">
		<header-top :titlet="$t('personal.paymentMethod.titlet')" :title="$t('personal.title')"></header-top>

		<div class="global_main main">
			<div class="tip">
				<i class="iconfont icon-gantanhao"></i>
				<span>{{ $t('personal.editIdentity.tip') }}</span>
				<i class="iconfont icon-close1" @click="remove"></i>
			</div>
			<ul class="lists">
				<li>
					<span>{{ $t('personal.paymentMethod.sfk') }}</span>
					<div class="content">
						<div class="type">
							<myselect v-model="form.type" icon  :lists="$t('global.payType')"></myselect>
						</div>
					</div>
				</li>
				<li>
					<span>{{ $t('personal.paymentMethod.xm') }}</span>
					<div class="content">
						<input type="text" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.xm')" />
					</div>
				</li>
				<li v-if="form.type==0">
					<span>{{ $t('personal.paymentMethod.zfb') }}</span>
					<div class="content">
						<input type="text" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.zfb')" />
					</div>
				</li>
				
				<li v-if="form.type==1">
					<span>{{ $t('personal.paymentMethod.wx') }}</span>
					<div class="content">
						<input type="text" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.wx')" />
					</div>
				</li>
				
				<li v-if="form.type==2">
					<span>{{ $t('personal.paymentMethod.yhkh') }}</span>
					<div class="content">
						<input type="text" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.yhkh')" />
					</div>
				</li>
				<li v-if="form.type==2">
					<span>{{ $t('personal.paymentMethod.khh') }}</span>
					<div class="content">
						<input type="text" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.khh')" />
					</div>
				</li>
				<li v-if="form.type==2">
					<span>{{ $t('personal.paymentMethod.khd') }}</span>
					<div class="content">
						<input type="text" :placeholder="$t('personal.paymentMethod.eq')" />
					</div>
				</li>
				
				
				<li v-if="form.type==3">
					<span>{{ $t('personal.paymentMethod.pay') }}</span>
					<div class="content">
						<input type="text" :placeholder="$t('global.qsr') + $t('personal.paymentMethod.pay')" />
					</div>
				</li>
				
				
				<li v-if="form.type==0 || form.type==1">
					<span>{{ $t('personal.paymentMethod.skm') }}</span>
					<div class="content">
						<van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" />
					</div>
				</li>
				<li>
					<div class="content">
						<van-button type="info">{{ $t('personal.paymentMethod.add') }}</van-button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			fileList:[{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
			form:{
				type:null
			}
		};
	},
	mounted() {
		this.form.type = this.$t('global.payType')[0].id
	},
	methods: {
		remove(e){
			document.querySelector(".view_assets_identity .tip").remove()
		},
		afterRead(file) {
			file.status = 'uploading';
			file.message = this.$t('personal.data.scz');
		
			setTimeout(() => {
				file.status = 'failed';
				file.message =  this.$t('personal.data.scs');
			}, 1000);
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
			span {
				width: 100%;
			}
			i:last-child {
				font-size: 12px;
				cursor: pointer;
			}
		}
		.lists{
			padding-top: 30px;
			&>li{
				margin-bottom: 20px;
				&>span{
					display: block;
					margin-bottom: 5px;
					color: #666666;
				}
				.content{
					display: inline-block;
					max-width: 450px;
					width: 100%;
					.type{
						background: #FFFFFF;
						border: 1px solid #E3E3E3;
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
	.view_personal_paymentMethod{
		.main{
			.lists{
				li{
					.content{
						.type{
							.icon_s{
								padding: 5px;
								li{
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
