<template>
	<div class="view_help">
		<div class="header">
			<div class="global_main">
				<div class="muen" @click="show = true">
					<van-icon name="wap-nav" size="30px" />
				</div>
				<div class="logo" @click="$router.push('/index')">
					<img :src="$t('global.logo')" alt="" />
					<span>{{ $t('global.header.name') }}</span>
				</div>
				<div class="language">
					<myselect @flag="languageFlag" ref="headerselect" v-model="language.active" @change="changeLanguage" hover :lists="$t('global.header.language')"></myselect>
				</div>
			</div>
		</div>
		<div class="left">
			<ul class="lists">
				<li v-for="item in $t('help.meun')">
					<span class="tt">{{item.title}}</span>
					<ul class="child">
						<li @click="changeItem(item,child)" :class="child.id==two.id?'active':''" v-for="child in item.list">
							{{child.title}}
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="right">
			<ul class="tips clearfix">
				<li>
					<a href="javascript:;">{{$t('help.tt')}}</a>
					<i>></i>
				</li>
				<li>
					<a href="javascript:;">{{one.title}}</a>
					<i>></i>
				</li>
				<li>
					<a href="javascript:;">{{two.title}}</a>
				</li>
			</ul>
			<div class="content">
				<div class="tt">
					{{two.title}}
				</div>
				<div class="help_problem">
					<ul>
						<li v-for="item in ans">
							<div v-if="item.title==2" v-html="item.font"></div>
							<div v-else-if="item.title==1">
								<img :src="item.img" alt="" title="gif">
							</div>
							<div v-else>
								<h4>{{item.title}}</h4>
								<p v-html="item.font"></p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		
		<van-popup v-model="show" position="left" :style="{ width: '60%',height:'100%' }"> 
			<div class="left p_left">
				<ul class="lists">
					<li v-for="item in $t('help.meun')">
						<span class="tt">{{item.title}}</span>
						<ul class="child">
							<li @click="changeItem(item,child)" :class="child.id==two.id?'active':''" v-for="child in item.list">
								{{child.title}}
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</van-popup>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			show:false,
			language: {
				active: 0
			},
			one:{
				id:'',
				title:''
			},
			two:{
				id:'',
				title:''
			},
			ans:[]
		};
	},
	mounted() {
		this.language.active = this.$t('global.header.language')[0].id;
		this.filterItem()
	},
	watch:{
		$route(){
			this.filterItem()
		}
	},
	methods: {
		languageFlag() {},
		changeLanguage() {},
		changeItem(item,child){
			this.$router.replace({
				path:"/help",
				query:{
					id:item.id,
					childId:child.id
				}
			})
		},
		filterItem(){
			let query = this.$route.query
				query.hasOwnProperty("id") ? '' : query.id = 0
				query.hasOwnProperty("childId") ? '' : query.childId = 0
				
			let one = this.$t('help.meun').filter(item=>item.id == query.id)[0]
			let two = one.list.filter(item=>item.id==query.childId)[0]
			let ans = this.$t('help.ansList').filter(item=>item.id == query.childId)[0].list
			this.one = one
			this.two = two
			this.ans = ans
			this.show = false
		}
	}
};
</script>

<style lang="less">
.view_help {
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		z-index: 100;
		padding: 10px 0;
		background: #fff;
		border-bottom: 1px solid #ccc;
		.muen{
			display: none;
		}
		.logo {
			cursor: pointer;
			display: inline-block;
			.clearfix;
			position: relative;
			top: 5px;
			img {
				margin-right: 10px;
				width: 40px;
				float: left;
			}
			span {
				font-size: 18px;
				font-weight: 700;
				float: left;
				padding-top: 5px;
			}
		}
		.language {
			position: absolute;
			right: 20px;
			top: 12px;
			padding-top: 12px;
		}
	}
	.left{
		box-sizing: border-box;
		    padding: 15px;
		    width: 260px;
		    height: 92vh;
		    overflow-y: auto;
		    position: fixed;
		    top: 66px;
		    background: #fff;
		    left: 0;
		    transition: all .5s;
		    z-index: 1200;
			.tt{
				font-size: 18px;
				font-family: 'sy-r';
				padding: 8px 0;
				display: block;
			}
			.lists{
				&>li{
					
				}
				.child{
					li{
						padding:8px 10px;
						.hover;
					}
					.active{
						background-color: @blue;
						color: #fff !important;
						border-radius: 3px;
					}
				}
			}
	}
	.p_left{
		
	}
	.right{
		padding-top: 86px;
		padding-left: 280px;
		padding-right: 20px;
		width: 100%;
		box-sizing: border-box;
		.tips{
			li{
				float: left;
				a{
					color: #666;
				}
				i{
					display: inline-block;
					margin: 0 5px;
				}
			}
			li:first-child{
				a{
					color: @blue;
				}
			}
		}
		.content{
			.tt{
				font-size: 20px;
				padding: 20px 0;
				font-weight: bold;
			}
			.help_problem{
				li{
					margin-bottom: 20px;
					p{
						color: #666;
					}
				}
			}
		}
	}
}

@media (max-width:1023px) {
	.view_help{
		.header{
			text-align: center;
			.muen{
				display: block;
				position: absolute;
				left: 20px;
				top: 20px;
				cursor: pointer;
			}
		}
		.left{
			display: none;
		}
		.p_left{
			display: block;
			height: 100vh;
			box-sizing: border-box;
			padding-top: 10px;
			position: static;
			width: 100%;
		}
		.right{
			padding-left: 20px;
		}
	}
}

</style>
