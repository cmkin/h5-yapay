<template>
	<div class="view_personal_data">
		<div class="title">
			{{ $t('personal.data.title') }}
			<span v-if="edit.show" @click="edit.show = false">{{ $t('personal.data.bj') }}</span>
		</div>

		<ul class="base" v-if="edit.show">
			<li class="tx clearfix">
				<img src="" alt="" />
				<div class="r">
					<span>{{ $t('personal.data.yh') }}</span>
					<p>{{ $t('personal.data.wmz') }}</p>
				</div>
			</li>
			<li class="name">
				<div>
					<span>{{ $t('personal.yhm') }}</span>
					<p>我是用户名</p>
				</div>
				<div>
					<span>{{ $t('personal.data.gj') }}</span>
					<p>中国大陆</p>
				</div>
			</li>
			<li class="lv">
				<span>{{ $t('personal.data.rzdj') }} LV.1基础认证</span>
				<p>
					<span>{{ $t('personal.data.xm') }} &nbsp;&nbsp;&nbsp; 我是名字</span>
					<span>{{ $t('personal.data.zjh') }} &nbsp;&nbsp;&nbsp; 50**************66</span>
				</p>
				<div class="r" @click="goRz()">{{ $t('personal.data.qts') }}</div>
			</li>
		</ul>
		<ul class="edit" v-else>
			<li>
				<span>{{ $t('personal.data.yh') }}</span>
				<div><van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" /></div>
			</li>
			<li>
				<span>{{ $t('personal.yhm') }}</span>
				<div style="margin-bottom: 20px;">
					<input disabled="disabled" placeholder="yonghu" type="text" />
				</div>
				
				<van-button @click="edit.show = true" type="info">{{ $t('personal.data.save') }}</van-button>
			</li>

			
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			edit: {
				show: true
			},
			fileList: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }]
		};
	},
	mounted() {},
	methods: {
		afterRead(file) {
			file.status = 'uploading';
			file.message = this.$t('personal.data.scz');

			setTimeout(() => {
				file.status = 'failed';
				file.message =  this.$t('personal.data.scs');
			}, 1000);
		},
		goRz(){
			this.$router.push('/personal/account/identity')
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.view_personal_data {
	border: 1px solid rgba(0, 0, 0, 0.050980392156862744);
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
	opacity: 1;
	border-radius: 5px;
	.title {
		background-color: rgba(3, 83, 164, 0.06);
		padding: 20px;
		font-size: 16px;
		span {
			float: right;
			color: @blue;
			.hover;
		}
	}
	.base {
		padding: 20px;
		li {
			border-bottom: 1px solid #e3e3e3;
			padding: 20px 0;
			span {
				color: #333333;
				display: block;
				font-size: 16px;
				margin-bottom: 10px;
			}
			p {
				color: #666666;
			}
		}
		li:last-child {
			border: none;
		}
		.tx {
			img {
				float: left;
				width: 56px;
				height: 56px;
				border-radius: 50%;
				background-color: #ccc;
				margin-right: 20px;
			}
		}

		.name {
			display: flex;
			div {
				flex: 1;
			}
		}
		.lv {
			position: relative;
			p {
				span {
					display: inline-block;
					margin-right: 40px;
					font-size: 14px;
					color: #666666;
				}
			}
			.r {
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

	.edit {
		padding: 20px;
		li{
			padding-bottom: 5px;
			border-bottom: 1px solid #E3E3E3;
			margin-bottom: 15px;
			&>span{
				display: block;
				margin-bottom: 20px;
				font-size: 16px;
			}
		}
		li:last-child{
			border: none;
		}
	}
}

@media (max-width: 1023px) {
	.view_personal_data {
	}
}
</style>
