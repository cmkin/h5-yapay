<template>
	<div class="view_personal_elpwd">
		<header-top :titlet=" $t('personal.editJPwd.title') " :title="$t('personal.title')"></header-top>
		
		<div class="global_main">
			<div class="main">
				<div class="tips">
					<i class="iconfont icon-gantanhao"></i>
					<span> {{ $t('personal.editJPwd.tip') }} </span>
					<i class="iconfont icon-close1" @click="remove"></i>
				</div>
				<ul>
					<li v-if="rmm.sflag">
						<span>{{ $t('personal.editJPwd.ymm') }} <i class="rmm" @click="rmm.show = true"> {{$t('global.base.wjmm')}}? </i> </span>
						<input type="password" :placeholder="$t('global.qsr') + $t('personal.editJPwd.ymm')" />
					</li>
					<li v-else>
						<span> {{ $t('global.base.yzm') }} </span>
						<div class="scode">
							<div class="l">
								<input type="number"  :placeholder=" $t('global.qsr') + $t('global.base.yzm')" />
							</div>
							<div class="r">
								<i>187*****08</i>
								<span>{{ $t('global.base.sendCode') }}</span>
							</div>
						</div>
					</li>
					<li>
						<span>{{ $t('personal.editJPwd.xmm') }} <i class="jys"> {{$t('personal.editJPwd.jys')}}? </i> </span>
						<input type="password" :placeholder="$t('global.qsr') + $t('personal.editJPwd.xmm')" />
					</li>
					<li>
						<span>{{ $t('personal.editJPwd.rmm') }}</span>
						<input type="password" :placeholder=" $t('personal.editJPwd.rmm')" />
					</li>
				</ul>
				<div class="btn">
					<van-button type="info"> {{ $t('global.base.reset') }} </van-button>
				</div>
			</div>
		</div>
		
		
		<dialogx v-model="rmm.show" :onOk="rmmOk" :title="$t('global.base.wxts')" >
			<template v-slot:content>
				<div class="rmts" v-html="$options.filters.language( $t('personal.editJPwd.rts') , '135****1254' ) "></div>
			</template>
		</dialogx>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				rmm:{
					show:false,
					sflag:true
				}
			}
		},
		mounted() {
			
		},
		methods:{
			remove(e){
				document.querySelector(".view_personal_elpwd .tips").remove()
			},
			rmmOk(){
				this.rmm.show = false
				this.rmm.sflag = false
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal_elpwd{
		.main{
			padding: 30px 0;
			max-width: 460px;
			.tips{
				.tips-org;
				padding: 10px;
				span{
					width: 100%;
				}
				i:last-child{
					font-size: 12px;
					cursor: pointer;
				}
			}
			ul{
				li{
					margin-top: 20px;
					&>span{
						display: block;
						margin-bottom: 5px;
						color: #666666;
						.rmm{
							float: right;
							color: @blue;
							cursor: pointer;
						}
						.jys{
							color: #B3B3B3;
							font-size: 12px;
							margin-left: 5px;
						}
					}
				}
				.scode{
					.clearfix;
					.l{
						float: left;
						width: 38%;
					}
					.r{
						color: #666;
						float: right;
						width: 170px;
						text-align: right;
						span{
							margin-left: 20px;
							color: @blue;
							cursor: pointer;
						}
					}
				}
			}
			.btn{
				margin-top: 40px;
			}
		}
		.rmts{
			color: rgba(0, 0, 0, 0.65);
		}
	}
</style>
