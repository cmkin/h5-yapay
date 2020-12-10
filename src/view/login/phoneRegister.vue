<template>
	<div class="main sj" >
		<div class="t">{{ $t('login.sht') }}</div>
		<div class="ot" @click="$parent.pageChange(3)"> <i class="iconfont icon-arrowRight"></i> {{ $t('login.yxt') }}</div>
		<ul class="from">
			<li class="select">
				<myselect  v-model="language.active"  :lists="$t('global.header.language')"></myselect>
			</li>
			<li class="select">
				<myselect  v-model="hbType.active" showKey="text"  :lists="$t('global.hbType')"></myselect>
			</li>
			
			<li>
				<span class="phone" @click="$parent.phoneDlg.show = true">+86 <i class="iconfont icon-jiantou"></i> </span>
				<input type="number" :placeholder="$t('global.qsr') + $t('login.sjhm')" />
			</li>
			
			<li>
				<span>{{ $t('login.mm') }}</span>
				<input :type="isshowPwd?'text':'password'" :placeholder="$t('login.mts')" />
				<i @click="isshowPwd = !isshowPwd" class="iconfont" :class="isshowPwd?'icon-Eyesopen':'icon-biyan'"></i>
			</li>
			
			
			<li>
				<span style="letter-spacing: 0;padding-right: 5px;">{{ $t('global.base.yzm') }}</span>
				<input type="number" :placeholder="$t('global.qsr') + $t('global.base.yzm')" />
				<i style="color: #0466C8;">{{ $t('global.base.sendCode') }}</i>
			</li>
			
		</ul>
		
		<div class="btns">
			<van-button type="info">{{ $t('login.lj') }}</van-button>
		</div>
		<div class="other">
			{{ $t('login.yzh') }}? <span @click="$parent.pageChange(0)">{{ $t('login.ljd') }} <i class="iconfont icon-arrowRight"></i></span>
		</div>
		
		<div class="zcty other">
			{{ $t('login.zcjty') }} <span> {{ $t('login.shxy') }} </span>
		</div>
		
	</div>
</template>

<script>
	
	export default {
		data(){
			return{
				isshowPwd:false,
				language:{
					active:null
				},
				hbType:{
					active:null
				}
			}
		},
		
		mounted() {
			this.language.active = this.$t('global.header.language')[0].id;
			this.hbType.active = this.$t('global.hbType')[0].id;
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped="scoped">
	.sj{
		.phone{
			cursor: pointer;
			letter-spacing: 0 !important;
			padding-right: 5px;
			i{
				display: inline-block;
				font-size: 12px;
				transform: rotate(-90deg);
			}
		}
		.from{
			.select{
				padding: 8px 0;
				background-color: #fff;
				border: 1px solid #E3E3E3;
				.g_select{
					width: 100%;
				}
			}
		}
		.zcty{
			padding-top: 30px;
			text-align: center !important;
		}
	}
</style>
<style lang="less">
	.sj{
		.from{
			.g_select{
				.changed {
					padding: 0 10px;
				}
			}
		}
	}
</style>
