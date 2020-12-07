<template>
	<div class="global_header_top">
		<div class="header">
			<div class="main clearfix global_main">
				<ul class="left clearfix">
					<li class="router-link-active">{{ title }}</li>
					<span v-if="titlet" class="two"> <i>></i> {{titlet}}</span>
				</ul>
				<div class="right" v-if="rlink">
					<router-link tag="span" :to="rlink">{{ rtitle }}</router-link>
				</div>
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
				default:'标题'
			},
			titlet:{
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
				.two{
					color: #666666;
					display: inline-block;
					padding-top: 22px;
					i{
						margin-right: 10px;
					}
				}
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
