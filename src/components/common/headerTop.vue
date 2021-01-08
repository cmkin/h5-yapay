<template>
	<div class="global_header_top">
		<div class="header">
			<div class="main clearfix global_main" v-if="!title2">
				<ul class="left clearfix" v-if="title">
					<li class="router-link-active">{{ title }}</li>
				</ul>
				<div class="right" v-if="rlink">
					<router-link tag="span" :to="rlink">{{ rtitle }}</router-link>
				</div>
			</div>
			<div v-else class="main clearfix global_main">
				<ul class="left clearfix">
					<router-link tag="li" :to="rlink">{{ rtitle }}</router-link>
					<li class="router-link-active" :to="rlink">{{ title2 }}</li>
				</ul>
			</div>
		</div>
		<div style="height: 64px;"></div>
	</div>
</template>

<script>
	export default {
		name:'header-top',
		data(){
			return{
				
			}
		},
		props:{
			title:{
				type:String,
				default:''
			},
			title2:{
				type:String,
				default:''
			},
			rtitle:{
				type:String,
				default:'标题'
			},
			rlink:{
				type:String,
				default:''
			}
		},
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.global_header_top{
		.global_header_top();
		.header{
			.main{
				
			}
		}
	}
	
	@media (max-width: 1023px) {
		.global_header_top{
			&>.header{
				top: 61px;
			}
		}
	}
	
</style>
