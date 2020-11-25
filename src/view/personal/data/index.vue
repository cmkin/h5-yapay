<template>
	<div class="view_personal_data">
		<div class="title">
			个人资料
			<span>点击编辑资料</span>
		</div>
		<ul>
			<li class="tx clearfix">
				<img src="" alt="">
				<div class="r">
					<span>用户头像</span>
					<p>我们完全支持您上传喜欢的图片作为个性头像</p>
				</div>
			</li>
			<li class="name">
				<div>
					<span>用户名</span>
					<p>我是用户名</p>
				</div>
				<div>
					<span>国家/地区</span>
					<p>中国大陆</p>
				</div>
			</li>
			<li class="lv">
				<span>认证等级：LV.1基础认证</span>
				<p> <span> 姓名 &nbsp;&nbsp;&nbsp;   我是名字 </span>  <span> 证件号  &nbsp;&nbsp;&nbsp;  50**************66 </span> </p>
				<div class="r">去提升认证等级</div>
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
		mounted() {
			
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.view_personal_data{
		border: 1px solid rgba(0, 0, 0, 0.050980392156862744);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
		opacity: 1;
		border-radius: 5px;
		.title{
			background-color: rgba(3, 83, 164, 0.06);;
			padding: 20px;
			font-size: 16px;
			span{
				float: right;
				color: @blue;
				.hover;
			}
		}
		ul{
			padding: 20px;
			li{
				border-bottom: 1px solid #E3E3E3;
				padding: 20px 0;
				span{
					color: #333333;
					display: block;
					font-size: 16px;
					margin-bottom: 10px;
				}
				p{
					color: #666666;
				}
			}
			li:last-child{
				border: none;
			}
			.tx{
				img{
					float: left;
					width: 56px;
					height: 56px;
					border-radius: 50%;
					background-color: #ccc;
					margin-right: 20px;
				}
			}
		}
		.name{
			display: flex;
			div{
				flex: 1;
				
			}
		}
		.lv{
			position: relative;
			p{
				span{
					display: inline-block;
					margin-right: 40px;
					font-size: 14px;
					color: #666666;
				}
			}
			.r{
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%);
				color: @blue;
				.hover;
				font-size: 16px;
			}
		}
	}
	
	@media (max-width: 1023px) {
		.view_personal_data{
			
		}
	}
</style>
