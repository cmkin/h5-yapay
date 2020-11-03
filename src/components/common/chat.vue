<template>
	<div class="global_chat">
		<div class="title clearfix">
			<img :src="$t('global.usdt')" alt="">
			<span>我是昵称</span>
		</div>
		<div class="main">
			<vue-scroll :ops="ops" ref="myscroll">
				<ul class="his_list">
					<li class="time">
						{{ new Date() | timeFormat }}
					</li>
					<li class="ts">
						您有一笔待支付订单，请及时支付
					</li>
					<li class="to">
						<img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4112709337,2145947221&fm=58" alt="">
						<span>在的，请直接付款就好</span>
					</li>
					<li class="me" v-for="item in 10">
						<img src="https://dss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4112709337,2145947221&fm=58" alt="">
						<span>好的</span>
					</li>
				</ul>
			</vue-scroll>
		</div>
		
		<div class="input_buttom clearfix">
			
			<textarea class="input" v-model="input" name="" id="" cols="30" rows="10" :placeholder="$t('global.base.qsrnr')"></textarea>
			<div class="btns">
				<van-button :type="input?'info':'default'">{{ $t('global.base.send') }}</van-button>
				<div>
					<input type="file">
					<svg t="1600762734579" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4645" width="48" height="48"><path d="M432.888596 655.403778 359.342127 553.64633C349.598306 540.164971 333.800712 540.16511 324.05699 553.64633L188.471613 741.23959C178.727792 754.72095 184.541661 765.649501 201.457031 765.649501L447.704979 765.649501 822.658642 765.649501C839.583509 765.649501 845.267916 754.74485 835.42945 741.293282L620.563382 447.519305C610.659782 433.978682 594.773609 434.067737 584.935143 447.519305L432.888596 655.403778 432.888596 655.403778Z" p-id="4646"></path><path d="M273.271058 347.873852a58.4 58.4 0 1 0 119.364471 0 58.4 58.4 0 1 0-119.364471 0Z" p-id="4647"></path><path d="M109.081528 198.668263 914.918473 198.668263C906.5326 198.668263 899.934531 191.991158 899.934531 183.80075L899.934531 840.19925C899.934531 831.991651 906.565377 825.331737 914.918473 825.331737L109.081528 825.331737C117.4674 825.331737 124.065469 832.008842 124.065469 840.19925L124.065469 183.80075C124.065469 192.008349 117.434624 198.668263 109.081528 198.668263ZM64.383234 840.19925C64.383234 864.812398 84.345684 885.013972 109.081528 885.013972L914.918473 885.013972C939.585548 885.013972 959.616766 864.894939 959.616766 840.19925L959.616766 183.80075C959.616766 159.187602 939.654316 138.986028 914.918473 138.986028L109.081528 138.986028C84.414452 138.986028 64.383234 159.105061 64.383234 183.80075L64.383234 840.19925Z" p-id="4648"></path></svg>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'chat',
		data() {
			return {
				input:'',
				ops: {
					vuescroll: {
						wheelScrollDuration:500
					},
					scrollPanel: {
						
					},
					rail: {},
					bar: {
						background:"#e3e3e3"
					}
				}
			}
		},
		mounted() {
			//到底部
			/* this.$refs["myscroll"].scrollTo(
			  {
			    y: 200000
			  },
			  0,
			  "easeInQuad"
			); */
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped="scoped">
	.global_chat {
		.title {
			.box_title;

			&>img {
				width: 32px;
				height: 32px;
				border-radius: 50%;
			}

			&>span {
				padding-top: 5px;
				font-size: 14px;
			}
		}
		.his_list{
			text-align: center;
			padding: 20px;
			box-sizing: border-box;
			height: 430px;
			box-sizing: border-box;
			li{
				margin-bottom: 10px;
			}
			.time{
				font-size: 12px;
			}
			.ts{
				color: #B3B3B3;
				font-size: 12px;
			}
			.to{
				min-height: 40px;
				position: relative;
				padding-left: 50px;
				padding-top: 20px;
				box-sizing: border-box;
				text-align: left;
				img{
					position: absolute;
					left: 0;
					top: 0;
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
				span{
					display: inline-block;
					background: #F3F3F3;
					opacity: 1;
					border-radius: 0px 15px 15px 15px;
					text-align: left;
					padding: 5px 10px;
					max-width: 180px;
					word-wrap: break-word;
					word-break: normal;
				}
			}
			.me{
				.to;
				padding-left: 0;
				padding-right: 50px;
				text-align: right;
				img{
					left: auto;
					right: 0;
				}
				span{
					border-radius: 15px 0px 15px 15px;
					background: @blue;
					color: #fff;
				}
			}
		}
		.input_buttom{
			padding: 15px;
			border-top: 1px solid #E3E3E3;
			.input{
				float: left;
				height: 30px;
				width: 55%;
				border: none;
				position: relative;
				top: 3px;
				resize:none
			}
			.btns{
				float: right;
				&>div{
					margin-left: 20px;
					cursor: pointer;
					position: relative;
					top: 6px;
					display: inline-block;
					input{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						cursor: pointer;
						opacity: 0;
						z-index: 1;
						width: 26px;
						height: 26px;
					}
					svg{
						width: 26px;
						height: 26px;
						cursor: pointer;
					}
				}
			}
		}
	}

</style>
<style lang="less">
	.global_chat{
		.van-button--default{
			background: #F3F3F3;
			font-size: 12px;
			padding: 0;
			height: auto;
			line-height: 100%;
			padding: 8px 12px;
		}
		.van-button--info{
			font-size: 12px;
			padding: 0;
			height: auto;
			line-height: 100%;
			padding: 8px 12px;
		}
	}
</style>
