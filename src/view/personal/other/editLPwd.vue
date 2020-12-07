<template>
	<div class="view_personal_elpwd">
		<header-top :titlet=" $t('personal.editLPwd.title') " :title="$t('personal.title')"></header-top>
		
		<div class="global_main">
			<div class="main">
				<div class="tips">
					<i class="iconfont icon-gantanhao"></i>
					<span> {{ $t('personal.editLPwd.tip') }} </span>
					<i class="iconfont icon-close1" @click="remove"></i>
				</div>
				<ul>
					<li>
						<span>{{ $t('personal.editLPwd.ymm') }}</span>
						<input type="password" :placeholder="$t('global.qsr') + $t('personal.editLPwd.ymm')" />
					</li>
					<li>
						<span>{{ $t('personal.editLPwd.xmm') }}</span>
						<input type="password" :placeholder="$t('global.qsr') + $t('personal.editLPwd.xmm')" />
					</li>
					<li>
						<span>{{ $t('personal.editLPwd.rmm') }}</span>
						<input type="password" :placeholder=" $t('personal.editLPwd.rmm')" />
					</li>
				</ul>
				<div class="btn">
					<van-button type="info"> {{ $t('global.base.tj') }} </van-button>
				</div>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		mounted() {
			
		},
		methods:{
			remove(e){
				document.querySelector(".view_personal_elpwd .tips").remove()
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
					}
				}
			}
			.btn{
				margin-top: 40px;
			}
		}
	}
</style>
