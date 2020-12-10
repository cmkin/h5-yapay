<template>
	<div class="lists view_message_tips">
		<ul>
			<li v-for="item in 10">
				<span class="l org">
					<i class="iconfont icon-gantanhao1"></i>
				</span>
				<div class="r">
					<div class="t">
						<span>{{text}}</span>
						12/6  13:12
					</div>
					<div class="t3" :class="{red:item==2}">您有一笔待支付订单</div>
					
					<ul class="infos">
						<li>
							<span>{{ $t('global.base.ddh') }}:</span>
							<i>25648259156</i>
						</li>
						<li>
							<span>{{ $t('global.base.sl') }}:</span>
							<i>5.0000 USDT</i>
						</li>
						<li>
							<span>{{ $t('global.base.dj') }}:</span>
							<i>7.05 CNY/USDT</i>
						</li>
						<li>
							<span>{{ $t('global.base.zje') }}:</span>
							<i>35.1 CNY</i>
						</li>
					</ul>
					
					<div class="btn">
						<div v-if="item==3">
							<van-button type="info">{{ $t('message.ljqw') }}</van-button>
						</div>
						<div class="yqx" v-else-if="item==4">
							<span>{{ $t('message.yqx') }}</span>
							<i v-html="$options.filters.language($t('message.syqx'),2)"></i>
						</div>
						<div class="yqx" v-else-if="item == 5">
							<van-button type="info">{{ $t('message.ljqw') }}</van-button>
							<i v-html="$options.filters.language($t('message.ddsy'),'3′20″')"></i>
						</div>
						<div class="yqx" v-else-if="item == 6">
							<van-button type="info">{{ $t('message.ddxq') }}</van-button>
							<i class="red">异常原因：买家未收到币（或卖家未收到款）</i>
						</div>
						<div v-else>
							<van-button type="info">{{ $t('message.ljqw') }}</van-button>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		props:{
			text:{
				type:String,
				default:''
			}
		},
		computed:{
			
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	
</style>
