<template>
	<div class="lists view_message_tips">
		<ul>
			<li v-for="item in datas">
				<span class="l org">
					<i class="iconfont icon-gantanhao1"></i>
				</span>
				<div class="r">
					<div class="t">
						<span>{{text}}</span>
						{{item.holdTime | timeFormat}}
					</div>
					<div class="t3" :class="{red:item.protocol==4 && item.status ==3}">
						{{getObj(item).text}}
					</div>
					<ul class="infos" v-if="item.protocol==7">
						{{item.message}}
					</ul>
					<ul class="infos" v-if="item.protocol ==4">
						<li>
							<span>{{ $t('global.base.ddh') }}:</span>
							<i>{{item.orderid}}</i>
						</li>
						<li>
							<span>{{ $t('global.base.sl') }}:</span>
							<i>{{Number(item.coin).toFixed(4)}} USDT</i>
						</li>
						<li>
							<span>{{ $t('global.base.dj') }}:</span>
							<i>{{Number(item.price).toFixed(2)}} {{ sysInfos.hv.dw }}/USDT</i>
						</li>
						<li>
							<span>{{ $t('global.base.zje') }}:</span>
							<i>{{Number(item.value).toFixed(2)}} {{ sysInfos.hv.dw }}</i>
						</li>
					</ul>
					
					<div class="btn">
						
						<!-- <div class="yqx" v-if="item==4">
							<span>{{ $t('message.yqx') }}</span>
							<i v-html="$options.filters.language($t('message.syqx'),2)"></i>
						</div> -->
						<!-- <div class="yqx" v-else-if="item == 5">
							<van-button type="info">{{ $t('message.ljqw') }}</van-button>
							<i v-html="$options.filters.language($t('message.ddsy'),'3′20″')"></i>
						</div>
						<div class="yqx" v-else-if="item == 6">
							<van-button type="info">{{ $t('message.ddxq') }}</van-button>
							<i class="red">异常原因：买家未收到币（或卖家未收到款）</i>
						</div> -->
						<div v-if="item.protocol ==4">
							<van-button @click="goOrderDetails(item)" type="info">{{ (item.status==0|| item.status==1) ? $t('message.ljqw') : $t('message.ddxq') }}</van-button>
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
			},
			datas:{}
		},
		computed:{
			getObj(){
				return function(obj){
					let obj2 = {}
					if(obj.protocol ==4){
						obj2.text = this.$t('message.tips.protocol').filter(item=>item.id == obj.status)[0].text[obj.type]
						obj2.time = obj.createtime
					}else{
						obj2.text = this.$t('message.tips.type').filter(item=>item.id == obj.type)[0].text
						obj2.time = obj.createtime
					}
					return obj2
				}					
			}
		},
		mounted() {
			
		},
		methods:{
			goOrderDetails(item){
				this.$router.push({
					path:'/sale/payment',
					query:{
						id:item.id
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	
</style>
