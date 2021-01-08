<template>
	<div class="global_table" :ref="refDom">
		<ul class="title" >
			<li v-for="item in nowTitles" v-if="item.isShow"  :style="{flex:item.flex}" v-html="item.title"></li>
		</ul>
		
		<ul class="item" v-for="item in datas" v-if="datas.length">
			<li v-for="child in nowTitles" v-if="child.isShow" @click="$emit('itemClick',child)" :style="{flex:child.flex}">
				<div v-if="child.slot">
					<slot :name="child.slot" :item="item"></slot>
				</div>
				<div v-else v-html="item[child.id]"></div>
			</li>
		</ul>
		<div class="nodata" v-if="!datas.length"> <nodata v-model="active"></nodata> </div>
	</div>
</template>

<script>
	export default {
		name:"tablex",
		data(){
			return{
				refDom:'table'+Math.ceil(Math.random()*1000),
				active:true
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
		computed:{
			nowTitles(){
				let nowTitles = this.$tableCheakHide( this.titles.map(item=>{
					item.isShow = true
					return item
				}) )
				if(this.isPhone || !this.isPhone){
					nowTitles = this.$tableCheakHide(nowTitles)
				}
				return nowTitles
			}
		},
		mounted() {
			
		},
		watch:{
			
		},
		
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.global_table{
		.global_table_pc;
		.nodata{
			text-align: center;
			padding: 15px 0;
			border-bottom: 1px solid #f3f3f3;
		}
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
