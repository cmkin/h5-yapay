<template>
	<div class="view_quotation">
		
		
		<header-top :title="$t('index.hq')"></header-top>
		
		<div class="table global_main">
			<tablex :titles="$t('index.tableTitle')" :datas="datas">
				
				<!-- <template v-slot:zdf="row">
					<div class="zdf">
						<p>{{row.item.zdf.bfb}}</p>
						<p>{{row.item.zdf.num}}</p>
					</div>
				</template> -->
			</tablex>
		
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				datas:[
					
				]
				
			}
		},
		computed: {
			
		
		},
		mounted() {
			this.$http.getCoinPairMarketList().then(res=>{
				this.datas = res.data.map(item=>{
					item.totalQtyIn24 = this.totalQtyIn24(String(item.totalQtyIn24)) + ` <i style="color:#888;font-size:12px;">${item.coinPair}</i> ` 
					item.coinPair = `<div class="coinPair"> <span>${item.coinPair}</span>/USDT </div>`
					item.last = `<div class="last ${item.percent<0?'red':'green'}"> $ ${item.last} </div>`
					item.percent = `<div class="last ${item.percent<0?'red':'green'}"> ${item.percent}% </div>`
					return item
				})
			})
		},
		methods:{
			totalQtyIn24(value){
				
				if(value.length<=6){
					return  (Number(value)/1000).toFixed(2) + "K"
				}else if(value.length<=9){
					return  (Number(value)/1000000).toFixed(2) + "M"
				}else if(value.length<=12){
					return  (Number(value)/1000000000).toFixed(2) + "B"
				}else{
					return value
				}
				
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_quotation{
		
		.table{
			padding-top: 30px;
			padding-bottom: 30px;
			
		}
			
	}
	
	
	@media (max-width:768px) {
		.view_quotation{
			
			
		}
	}
	
	
	
	
</style>


<style lang="less">
	.view_quotation {
		.coinPair{
			color: #888;
			font-size: 12px;
			span{
				font-size: 14px;
				font-weight: bold;
				color: #333;
			}
		}
		.green{
			color: @green;
		}
		.red{
			color: @red;
		}
	}
	@media (max-width:768px) {
		.view_index{
			
		}
	}
</style>
