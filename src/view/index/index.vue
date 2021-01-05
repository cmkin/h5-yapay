<template>
	<div class="view_index">
		<div class="banner">
			<div class="main global_main">
				<div class="bg"><img :src="$t('index.bg')" alt="" /></div>
				<h1>{{ $t('index.kj') }}</h1>
				<p v-html="$t('index.aq')"></p>
				<div class="buy clearfix">
					<div class="left">
						<div class="input">
							<input type="number" v-model="num" :placeholder="buyPlaceholder" />
							<span>{{ buyType == 0 ? 'USDT' : sysInfos.hv.dw }}</span>
						</div>
						<div class="btn" @click="buyFlag = !buyFlag">
							<van-button type="info">
								{{ $t('index.a') }}{{ buyType == 0 ? $t('index.sl') : $t('index.je') }}
								<van-icon name="arrow-down" size="12" />
							</van-button>
						</div>
						<ul class="buy_type" v-if="buyFlag">
							<li :class="{ active: buyType == 0 }" @click="changeType(0)">
								{{ $t('index.a') }}{{ $t('index.sl') }}
								<van-icon name="success" size="16" />
							</li>
							<li :class="{ active: buyType == 1 }" @click="changeType(1)">
								{{ $t('index.a') }}{{ $t('index.je') }}
								<van-icon name="success" size="16" />
							</li>
						</ul>
					</div>
					<div class="right">
						<van-button @click="goQuickSale" type="info">{{ $t('index.lj') }}</van-button>
					</div>
				</div>
			</div>
			<div class="bar" v-if="isPhone && userInfos.islogin">
				<van-notice-bar @replay="replay" @click="messagem" left-icon="volume-o" :scrollable="true" :speed="40" :delay="2" :text="getMessage.text" />
			</div>
		</div>

		<div class="tabs global_main">
			<ul class="clearfix">
				<li @click="golink(item, index)" tag="li" :to="item.to" v-for="(item, index) in $t('index.tabs')">
					<img :src="item.img" alt="" />
					<span>{{ item.text }}</span>
				</li>
			</ul>
		</div>

		<div class="lpk global_main clearfix">
			<div class="left">
				<div class="title">{{ $t('index.lpk') }}</div>
				<div class="t2">{{ $t('index.kzhy') }}</div>
				<p class="nj">{{ $t('index.nkyj') }}</p>
				<a href="javascript:;" @click="golp">
					<span class="lj">{{ $t('index.ljty') }}</span>
				</a>
			</div>
			<div class="right"><img src="../../assets/img/index5.png" alt="" /></div>
		</div>

		<div class="lc_wrap">
			<div class="lc global_main">
				<div class="t" v-html="$t('index.lc')"></div>
				<div class="t2" v-html="$t('index.zg')"></div>
				<ul>
					<li v-for="item in $t('index.lcTabs')">
						<img :src="item.img" alt="" />
						<span v-html="item.text"></span>
						<img src="../../assets/img/indexj.png" alt="" />
					</li>
				</ul>
			</div>
		</div>

		<div class="lpk dgl global_main clearfix">
			<div class="right"><img src="../../assets/img/index1.png" alt="" /></div>
			<div class="left">
				<div class="title">{{ $t('index.dgl') }}</div>
				<div class="t2">{{ $t('index.szzf') }}</div>
				<p class="nj">{{ $t('index.yhk') }}</p>
				<a href="http://yaotc.com/download.html" target="_blank">
					<span class="lj">{{ $t('index.ljty') }}</span>
				</a>
			</div>
		</div>

		<div  class="download_phone">
			<img  src="../../assets/img/logo.png" alt="" />
			<div  class="font">
				<p>YaPay</p>
				<p>{{ $t('index.ydjy') }}</p>
			</div>
			<div  class="btns">
				<span>
					<a href="http://yaotc.com/download.html" target="_blank">{{ $t('index.xz') }}</a>
				</span>
				<i @click="closePhone($event)">x</i>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			//titles:this.$t("index.tableTitle"),

			buyType: 0,
			buyFlag: false,
			num: '',
			playType: 0
		};
	},

	computed: {
		buyPlaceholder() {
			return this.$t('global.qsr') + this.$t('index.gm') + (this.buyType == 0 ? this.$t('index.sl') : this.$t('index.je'));
		},
		tabActiveItem() {
			return this.$t('index.hb')[this.hq.tabActive];
		},
		getMessage() {
			let type = this.playType;
			let obj = {
				announcement: this.$store.state.message.announcement,
				tips: this.$store.state.message.tips,
				notice: this.$store.state.message.notice
			};

			let obj2 = {
				text: '', //this.$t('global.base.zusj'),
				time: null,
				isNew: this.$store.state.message.isNew
			};

			switch (type) {
				case 0:
					if (obj.announcement) {
						obj2.text = obj.announcement.noticeContent;
						obj2.time = obj.announcement.createTime;
					}

					break;
				case 1:
					if (obj.tips) {
						if (obj.tips.protocol == 4) {
							obj2.text = this.$t('message.tips.protocol').filter(item => item.id == obj.tips.status)[0].text[obj.tips.type];
							obj2.time = obj.tips.createtime;
						} else {
							obj2.text = this.$t('message.tips.type').filter(item => item.id == obj.tips.type)[0].text;
							obj2.time = obj.tips.createtime;
						}
					}
					break;
				case 2:
					if (obj.notice) {
						obj2.text = this.$t('message.notice').filter(item => item.id == obj.notice.type)[0].text;
						obj2.time = obj.notice.createtime;
					}

					break;
			}
			return {
				...obj2,
				text: '[' + this.$t('message.tabs').filter(item => item.id == type)[0].text + '] ' + obj2.text
			};
		}
	},
	mounted() {},
	methods: {
		golp(){
			if(this.$isLogin()){
				return
			}
			this.$router.push('/assets/gift')
		},
		replay() {
			this.playType++;
			if (this.playType > 2) {
				this.playType = 0;
			}
		},
		messagem() {
			this.$router.push({
				path: '/message',
				query: {
					type: this.playType
				}
			});
		},
		changeType(type) {
			this.buyType = type;
			this.buyFlag = false;
		},
		goQuickSale() {
			this.$router.push({
				path: '/sale/quickBuySell',
				query: {
					type: this.buyType,
					num: this.num
				}
			});
		},
		golink(item, index) {
			if (index < 2 && this.$isLogin()) {
				return;
			}
			this.$router.push(item.to);
		},
		closePhone(e){
			document.querySelector(".view_index .download_phone").remove()
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.view_index {
	.banner {
		padding: 120px 0;
		background: @blue-0;
		position: relative;
		.main {
			position: relative;

			margin: auto;
			box-sizing: border-box;

			.bg {
				position: absolute;
				right: 0px;
				top: 0px;

				img {
					width: 400px;
					height: 400px;
					transform: translate(-6%, -20%);
				}
			}

			& > h1 {
				color: #fff;
				margin-bottom: 38px;
				font-size: 32px;
			}

			& > p {
				color: #fff;
				font-size: 16px;
				margin-bottom: 66px;
			}

			.buy {
				position: relative;
				z-index: 10;
				margin-bottom: 70px;
				.left {
					max-width: 384px;
					position: relative;
					margin-bottom: 30px;
					display: flex;
					.input {
						position: relative;
						display: inline-block;
						width: 77%;
						input {
							border: none;
							transition: all 0.3s;
							padding: 9px 20px;
							padding-right: 60px;
							border: 1px solid rgba(227, 227, 227, 1);
							border-right: 0;
							display: inline-block;
							width: 100%;
							&:focus {
								border-color: @blue;
							}

							&::placeholder {
								color: rgba(4, 102, 200, 0.3);
							}
						}

						& > span {
							position: absolute;
							right: 10px;
							top: 50%;
							transform: translateY(-50%);
							font-weight: bold;
							font-size: 16px;
						}
					}

					.btn {
						display: inline-block;
						width: auto;
						span {
							font-size: 12px;
						}
						button {
							border-radius: 0 2px 2px 0;
							height: 41px;
						}
						.van-icon {
							margin-left: 3px;
						}
					}

					.buy_type {
						position: absolute;
						top: 120%;
						left: 0;
						width: 100%;
						background: white;
						box-shadow: 0px 2px 4px rgba(4, 102, 200, 0.2);
						z-index: 100;
						li {
							padding: 10px;
							color: #666666;

							i {
								float: right;
								display: none;
							}

							.hover;
						}

						.active {
							background: #f1f9ff;
							color: @blue;

							i {
								display: block;
							}
						}
					}
				}

				.right {
					button {
						font-size: 12px;
						padding: 0 30px;
					}
				}
			}
		}

		.bar {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
		}
	}

	.tabs {
		transform: translateY(-50%);
		ul {
			display: flex;
			box-shadow: -2px 8px 5px rgba(189, 199, 209, 0.5);
			li {
				cursor: pointer;
				padding: 15px 0;
				background-color: #fff;
				flex: 1;
				img {
					width: 80px;
					height: 80px;
					display: block;
					margin: auto;
				}
				span {
					display: block;
					text-align: center;
					font-size: 16px;
				}
			}
			li:nth-child(2) {
				color: #fff;
				background: linear-gradient(270deg, #bdc7d1 0%, #718aa2 100%);
			}
			li:nth-child(3) {
				color: #fff;
				background: linear-gradient(269deg, #4769a8 0%, #183b7a 100%);
			}
		}
	}

	.lpk {
		.left {
			float: left;
			padding-top: 8%;
			padding-right: 10%;
			box-sizing: border-box;
			width: 60%;
			.title {
				padding: 15px 0;
				font-size: 24px;
				color: #333;
				font-weight: bold;
				border-bottom: 2px solid #e3e3e3;
				margin-bottom: 20px;
			}
			.t2 {
				font-size: 16px;
				color: #333;
				font-weight: bold;
				margin-bottom: 10px;
			}
			.nj {
				color: #666666;
				margin-bottom: 20px;
			}
			.lj {
				background-color: @blue;
				color: #fff;
				padding: 5px 10px;
				display: inline-block;
				border-radius: 2px;
				cursor: pointer;
			}
		}
		.right {
			width: 40%;
			float: left;
			img {
				display: block;
				width: 100%;
			}
		}
	}

	.lc_wrap {
		margin-top: 50px;
		background-color: @blue;
		color: #fff;
		padding: 50px 0;
		.t {
			text-align: center;
			font-size: 22px;
			font-weight: bold;
		}
		.t2 {
			text-align: center;
			font-size: 16px;
			padding-top: 20px;
		}
		ul {
			padding-top: 50px;
			display: flex;
			li {
				text-align: left;
				flex: 1;
				position: relative;
				img:first-child {
					display: block;
					width: 120px;
					height: 120px;
					margin: auto;
				}
				span {
					display: block;
					text-align: center;
					padding-top: 20px;
					color: rgba(255, 255, 255, 0.8);
				}
				img:last-child {
					position: absolute;
					right: 0;
					top: 30%;
					transform: translateY(-50%);
					width: 40px;
				}
			}
			li:last-child {
				img:last-child {
					display: none;
				}
			}
		}
	}
	.dgl {
		padding: 100px 20px;
		.left {
			padding: 0;
			padding-left: 5%;
		}
	}
	
	
	 .download_phone{
		position: fixed;
		bottom: 20px;
		left:0;
		background: #0466c8;
		width: 90%;
		left: 5%;
		display: flex;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 5px;
		z-index: 1000;
		color: #fff;
		display: none;
	}
	
	 .download_phone img{
		background: #fff;
		width: 50px;
		height: 50px;
		border-radius: 10px;
		margin-right: 10px;
	}
	 .download_phone  .font{
		flex: 1;
	}
	 .download_phone  .font p:first-child{
		font-size: 16px;
		margin-bottom: 10px;
	}
	 .download_phone .btns{
		padding-top: 18px;
		position: relative;
		padding-right: 10px;
	}
	
	.download_phone .btns span{
		background: #fff;
		color: #0466c8;
		font-size: 16px;
		padding: 5px 20px;
		border-radius: 3px;
	}
	.download_phone .btns i{
		position: absolute;
		top: -10px;
		right: 0px;
		font-style: normal;
	}
	.download_phone .btns a{
		color: @blue;
	}
	
}
@media (max-width: 1023px) {
	.view_index {
		.banner {
			.main {
				.bg {
					display: none;
				}
			}
		}
		.tabs {
			ul {
				li {
					img {
						width: 60px;
						height: 60px;
					}
				}
			}
		}
		.lpk {
			.left {
				width: 100%;
				padding: 0;
			}
			.right {
				display: none;
			}
		}
		.lc_wrap {
			ul {
				display: block;
				li {
					margin-bottom: 20px;
					img:last-child {
						display: none;
					}
					span {
						padding-top: 10px;
					}
				}
			}
		}
		.dgl {
			margin: 30px 0;
			padding: 0 20px;
		}
		.download_phone{
			display: flex;
		}
	}
}
@media (max-width: 768px) {
	.view_index {
		.banner {
			padding: 20px 0;
			.main {
				padding: 20px;
				margin: 0 20px;
				& > p {
					margin-bottom: 46px;
				}
				& > h1 {
					margin-top: 20px;
					margin-bottom: 20px;
				}
				.bg {
					img {
						width: 50%;
						height: auto;
						transform: translate(120%, -20%);
					}
				}
				.buy {
					.left {
						float: none;
						width: 100%;
						margin-bottom: 20px;
						display: flex;
						.input {
							width: calc(100% - 85.7px);
							input {
								border-radius: 2px 0 0 2px;
								border-right-color: transparent;
							}
						}
						button {
							border-radius: 0;
							height: 41px;
						}
					}
					.right {
						float: none;
						button {
							width: 100%;
						}
					}
				}
			}
		}
	}
}
@media (max-width: 320px) {
	.view_index {
		.banner {
			.main {
				& > p {
					display: none;
				}
			}
		}
	}
}
</style>
