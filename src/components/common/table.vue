<template>
	<div class="global_table" :ref="refDom">
		<ul class="title" >
			<li v-for="item in nowTitles" v-if="item.isShow"  :style="{flex:item.flex}" v-html="item.title"></li>
		</ul>
		<ul class="item" v-for="item in datas">
			<li v-for="child in nowTitles" v-if="child.isShow"  :style="{flex:child.flex}">
				<div v-if="child.slot">
					<slot :name="child.slot" :item="item"></slot>
				</div>
				<div v-else v-html="item[child.id]"></div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"tablex",
		data(){
			return{
				refDom:'table'+Math.ceil(Math.random()*1000),
				nowTitles:[]
			}
		},
		props:{
			titles:{
				type:Array,
				default:()=> []
			},
			datas:{
				type:Array,
				default:()=> []
			},
		},
		mounted() {
			this.nowTitles =this.$tableCheakHide( this.titles.map(item=>{
				item.isShow = true
				return item
			}) )
		},
		watch:{
			'isPhone'(){
				this.nowTitles = this.$tableCheakHide(this.nowTitles)
			}
		},
		
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.global_table{
		.global_table_pc;
	}
	@media (max-width:768px) {
		.global_table{
			&>ul{
				.hide{
					display: none;
				}
			}
		}
	}
</style>
