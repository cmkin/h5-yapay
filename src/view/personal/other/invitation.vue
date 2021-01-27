<template>
	<div class="view_invitation global_main">
		<div class="top">
			<h1>{{$t('personal.invitation.title')}}</h1>
			<p>{{$t('personal.invitation.t2')}}</p>
			<ul>
				<li>
					<p>{{$t('personal.invitation.lj')}}</p>
					<p>
						<span>{{infos.totalProfit |tofour}}</span>USDT
					</p>
				</li>
				<li>
					<div>
						<p>{{$t('personal.invitation.zf')}}</p>
						<p>
							<span>{{infos.payProfit |tofour}}</span>USDT
						</p>
					</div>
					<div>
						<p>{{$t('personal.invitation.jy')}}</p>
						<p>
							<span>{{infos.transactionProfit |tofour}}</span>USDT
						</p>
					</div>
				</li>
				<li v-html="$options.filters.language($t('personal.invitation.yyq'),0)"></li>
			</ul>
			<img src="../../../assets/img/inv.png" alt="">
		</div>
		
		<div class="link clearfix">
			<span class="input">
				<van-loading color="#1989fa" size="21" v-if="!userInfos.hasOwnProperty('referralcode')" />
				<i v-else>{{origin+"/#/login-register?type=2&referralcode="+userInfos.referralcode}}</i>
			</span>
			<van-button @click="copyLink" type="info">{{$t('personal.invitation.fz')}}</van-button>
			<i>{{$t('personal.invitation.lj')}}</i>
		</div>
		
		<div class="rules">
			<p class="tt">{{$t('personal.invitation.hd')}}</p>
			<ul class="ls">
				<li>
					<p class="t">1.{{$t('personal.invitation.qy1')}}:</p>
					<div>
						<p>{{$t('personal.invitation.yqrf')}}</p>
						<p class="i">
							<span>{{$t('personal.invitation.yqrs')}}</span>
							<span>{{$t('personal.invitation.yj')}}</span>
							<span>{{$t('personal.invitation.ej')}}</span>
						</p>
						<p class="i">
							<span v-html="$options.filters.language($t('personal.invitation.jrys'),1)"></span>
							<span>0.07%</span>
							<span>0.03%</span>
						</p>
					</div>
				</li>
				<li>
					<p class="t">2.{{$t('personal.invitation.qy2')}}:</p>
					<div>
						<p>{{$t('personal.invitation.yqfz')}}</p>
						<p class="i">
							<span>{{$t('personal.invitation.yqrs')}}</span>
							<span>{{$t('personal.invitation.yj')}}</span>
							<span>{{$t('personal.invitation.ej')}}</span>
						</p>
						<p class="i">
							<span v-html="$options.filters.language($t('personal.invitation.jrys'),1)"></span>
							<span>0.07%</span>
							<span>0.03%</span>
						</p>
					</div>
				</li>
				<li v-for="item,index in $t('personal.invitation.il')">{{index+3}}.{{item}}</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	import Clipboard from 'clipboard'
	export default {
		data(){
			return{
				origin:location.origin,
				infos:false
			}
		},
		filters:{
			tofour(value){
				return Number(value).toFixed(4)
			}
		},
		mounted() {
			
			 this.$http.getUserProfit({
				 userid:this.$getToken(1)
			 }).then(res=>{
				this.infos = res.data
			})
		},
		methods:{
			copyLink() {
				let clipboard = new Clipboard('.view_invitation .link', {
					text: () =>{
						return location.origin+"/#/login-register?type=2&referralcode="+this.userInfos.referralcode
					}
				})
				clipboard.on('success', e => {
					this.$notify({
						type:'success',
						message:this.$t('global.base.copyOk')
					});
					
					clipboard.destroy()
				})
				clipboard.on('error', e => {
					this.$notify(this.$t('global.base.copyFail'));
					clipboard.destroy()
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_invitation{
		.top{
			padding-top: 40px;
			position: relative;
			padding-right: 45%;
			box-sizing: border-box;
			img{
				position: absolute;
				right: 0;
				bottom: -20px;
				max-width: 350px;
			}
			&>p{
				color: rgba(51, 51, 51, 0.8);
				max-width: 340px;
			}
			ul{
				border: 1px solid #D3D3D3;
				margin-top: 30px;
				max-width: 340px;
				li{
					padding: 5px 0;
					p{
						text-align: center;
					}
					p:first-child{
						color: #666666;
					}
					p:last-child{
						padding-top: 5px;
						font-size: 13px;
						span{
							font-size: 18px;
							font-weight: bold;
							margin-right: 5px;
						}
					}
				}
				li:first-child{
					border-bottom: 1px solid #D3D3D3;
				}
				li:nth-child(2){
					padding: 0;
					border-bottom: 1px solid #D3D3D3;
					display: flex;
					div{
						flex: 1;
						padding: 8px 0;
					}
					div:first-child{
						border-right: 1px solid #D3D3D3;
					}
				}
				li:last-child{
					color: #666666;
					padding-left: 8px;
				}
			}
		}
		
		.link{
			padding: 30px 0;
			.input{
				border: 1px solid rgba(112, 112, 112, 0.6);
				padding:8px 13px;
				float: left;
				min-width: 310px;
				text-align: center;
			}
			button{
				float: left;
				margin:0 30px;
			}
			&>i{
				float: left;
				color: @blue;
				padding-top: 8px;
			}
		}
		
		.rules{
			padding-bottom: 40px;
			&>.tt{
				color: #333333;
				font-size: 22px;
			}
			.ls{
				&>li:nth-child(1),&>li:nth-child(2){
					color: #333;
					margin-top: 20px;
					.t{
						color: #666666;
						padding-bottom: 5px;
					}
					div{
						text-align: center;
						border: 1px solid #D3D3D3;
						border-bottom: none;
						p:first-child{
							font-size: 18px;
							padding: 8px 0;
							border-bottom: 1px solid #D3D3D3;
						}
						p.i{
							display: flex;
							border-bottom: 1px solid #D3D3D3;
							span{
								flex: 1;
								padding: 8px 0;
								border-right: 1px solid #D3D3D3;
							}
							span:last-child{
								border-right: none;
							}
						}
					}
				}
				&>li:nth-child(2){
					margin-bottom: 20px;
				}
				li{
					color: #666666;
					padding: 2px 0;
				}
			}
		}
	}
	
	@media (max-width: 1023px) {
		.view_invitation{
			.top{
				padding-right: 0;
				&>img{
					display: none;
				}
				&>p{
					max-width: 100%;
				}
				ul{
					max-width: 100%;
				}
			}
			.link{
				.input{
					width: 100%;
					box-sizing: border-box;
					margin-bottom: 10px;
				}
				button{
					margin: 0;
					margin-right: 20px;
				}
			}
		}
	}
</style>
