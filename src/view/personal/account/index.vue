<template>
	<div class="view_personal_account clearfix">
		<div class="left">
			<div class="title">
				<i class="iconfont icon-shezhi"></i>
				{{ $t('personal.account.title') }}
			</div>
			<ul>
				<router-link tag="li" :to="item.to" v-for="item in $t('personal.account.llists')">{{ item.text }}</router-link>
			</ul>
		</div>

		<div class="left_phone_icon" :style="{ top: 527 + 'px' }" @click="leftPhone = !leftPhone"><i class="iconfont icon-shezhi"></i></div>
		<transition name="top" mode="out-in">
			<div class="left_phone" :style="{ top: tops + 50 + 'px' }" v-if="leftPhone">
				<ul @click="leftPhone = false">
					<router-link tag="li" :to="item.to" v-for="item in $t('personal.account.llists')">{{ item.text }}</router-link>
				</ul>
			</div>
		</transition>

		<div class="right">
			<transition name="left" mode="out-in"><router-view></router-view></transition>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			leftPhone: false
			
		};
	},
	mounted() {
		
	},
	methods: {}
};
</script>

<style lang="less" scoped="scoped">
.view_personal_account {
	display: flex;
	& > div.left {
		border: 1px solid #e3e3e3;
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
		opacity: 1;
		border-radius: 2px;
	}
	& > .left {
		border-radius: 2px;
		width: 260px;
		height: 143px;
		.title {
			padding: 5px 20px;
			font-size: 16px;
			color: #333;
			border-bottom: 1px solid #e3e3e3;
			i {
				font-size: 18px;
			}
		}
		ul {
		
			li {
				padding: 6px 0;
				font-size: 16px;
				border-right: 2px solid transparent;
				padding-left: 40px;
				.hover;
			}
			.router-link-active {
				background-color: #f1f9ff;
				color: @blue;
				border-color: @blue;
			}
		}
	}
	& > .right {
		width: 100%;
		margin-left: 20px;
		overflow: hidden;
		& > div {
			border: 1px solid #e3e3e3;
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
			opacity: 1;
			border-radius: 2px;
		}
	}
	& > .left_phone {
		display: none;
		position: absolute;
		right: 20px;
		z-index: 10;
		top: 78%;
		ul {
			box-shadow: 0 0 1px 2px #eee;
			background-color: #fff;
			padding: 0;
			li {
				padding: 5px 20px;
				font-size: 16px;
				border-right: 2px solid transparent;
				text-align: center;
				.hover;
			}
			.router-link-active {
				background-color: #f1f9ff;
				color: @blue;
				border-color: @blue;
			}
		}
	}
	& > .left_phone_icon {
		position: absolute;
		right: 30px;
		top: 71%;
		z-index: 10;
		display: none;
		border: none;
		box-shadow: none;
		i {
			font-size: 30px;
		}
	}
}

@media (max-width: 1023px) {
	.view_personal_account {
		display: block;
		& > .left {
			display: none;
		}
		& > .right {
			margin: 0;
		}
		& > .left_phone_icon {
			display: block;
		}
		& > .left_phone {
			display: block;
		}
	}
}
</style>
