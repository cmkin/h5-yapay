<template>
	<div class="view_personal_data">
		<div class="title">
			{{ $t('personal.data.title') }}
			<span v-if="edit.show" @click="edit.show = false">{{ $t('personal.data.bj') }}</span>
		</div>

		<ul class="base" v-if="edit.show">
			<li class="tx clearfix">
				<img :src="userInfos.headurl" alt="" />
				<div class="r">
					<span class="b">{{ $t('personal.data.yh') }}</span>
					<p>{{ $t('personal.data.wmz') }}</p>
				</div>
			</li>
			<li class="name">
				<div>
					<span class="b">{{ $t('personal.yhm') }}</span>
					<p>{{userInfos.nickname}}</p>
				</div>
				<div>
					<span class="b">{{ $t('personal.data.gj') }}</span>
					<p>{{ getCurrency }}</p>
				</div>
			</li>
			<li class="lv">
				<span class="b">{{ $t('personal.data.rzdj') }} {{ $t('personal.data.rzLists')[userInfos.verifyLevel] }}</span>
				<p v-if="userInfos.verifyLevel>0">
					<span>{{ $t('personal.data.xm') }} &nbsp;&nbsp;&nbsp; {{userInfos.name}}</span>
					<span>{{ $t('personal.data.zjh') }} &nbsp;&nbsp;&nbsp; {{userInfos.cardNumber}}</span>
				</p>
				<div class="r" @click="goRz()">{{ $t('personal.data.qts') }}</div>
			</li>
			<li class="serve">
				<span class="b">
					{{ $t('personal.data.serve') }}
				</span>
				<p>
					{{ $t('personal.data.sqtj') }}
				</p>
				<div style="padding-left: 10px;padding-bottom: 10px;" v-if="sysInfos.config" v-html="$options.filters.language($t('personal.data.tjtip'), sysInfos.config.cointhreshold )"></div>			
				<p>
					{{ $t('personal.data.zswd') }}
				</p>
				<ul>
					<li v-for="item in $t('personal.data.tqlist')"> {{item}} </li>
				</ul>
				<div class="btn">
					<span style="color: #0466C8;" v-if="userInfos.type==2">{{ $t('personal.data.nysw') }}</span>
					<van-button v-else :loading="sqLoading" @click="sqServe" type="info">{{ $t('personal.data.sqwf') }}</van-button>
				</div>
			</li>
		</ul>
		<ul class="edit" v-else>
			<li>
				<span>{{ $t('personal.data.yh') }}</span>
				<div>
					<upload :after-read="afterRead" v-model="fileList" :max-count="1" /> 
				</div>
			</li>
			<li>
				<span>{{ $t('personal.yhm') }}</span>
				<div style="margin-bottom: 20px;">
					<input maxlength="8" v-model="nickname"  placeholder="nickname" type="text" />
				</div>
				<van-button :disabled=" Boolean(nickname=='' || fileList.length==0) " :loading="edit.loading" @click="save" type="info">{{ $t('personal.data.save') }}</van-button>
			</li>

			
		</ul>
	</div>
</template>

<script>
 import updateUser from '@/uitl/updateUser' 
export default {
	data() {
		return {
			edit: {
				show: true,
				loading:false
			},
			fileList: [],
			nickname:'',
			sqLoading:false
		};
	},
	mounted() {
		this.fileList = [{ url: this.userInfos.headurl}]
		this.nickname = this.userInfos.nickname
	},
	computed:{
		getCurrency(){
			return  this.$t('global.hbType').filter(item=>item.id == this.userInfos.currency)[0].currency
		},
		headurl(){
			return  this.userInfos.headurl
		}
	},
	watch:{
		'headurl'(n){
			if(n){
				this.fileList = [{ url: n}]
				this.nickname = this.userInfos.nickname
			}
		}
	},
	filters:{
		hidenum(value){
			if(!value){
				return ''
			}
			return value.slice(0,3)+'********'+value.slice(11,value.length)
		}
	},
	methods: {
		afterRead(file) {
			file.status = 'uploading';
			file.message = this.$t('personal.data.scz');
			
			let formData = new FormData();
			    formData.append("file",file.file);
			    formData.append("userid",this.$getToken(1));
				
				this.$http.uploadFile(formData).then(res=>{
					if(res.code==0){
						this.fileList = [{ url: res.data}]
					}else{
						file.status = 'failed';
						file.message =  this.$t('personal.data.scs');
					}
				})
			
		},
		goRz(){
			this.$router.push('/personal/account/identity')
		},
		sqServe(){
			this.sqLoading = true
			this.$http.userToMerchantApply().then(res=>{
				this.sqLoading = false
				if(res.code==0){
					this.$notify({
						type:"success",
						message:this.$t('global.base.tjcg')
					})
				}
			})
		},
		save(){
			this.edit.loading = true
			this.$http.updateUserInfo({
				nickname:this.nickname,
				headurl:this.fileList[0].url
			}).then(res=>{
				if(res.code==0){
					this.$notify({
						type:"success",
						message:this.$t('global.base.xgcg')
					})
					this.edit.show = true
					this.edit.loading = false
					updateUser.call(this)
				}
			})
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
		&>li {
			border-bottom: 1px solid #e3e3e3;
			padding: 20px 0;
			span.b {
				color: #333333;
				display: block;
				font-size: 16px;
				margin-bottom: 10px;
			}
			p {
				color: #666666;
			}
		}
		&>li:last-child {
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
		.serve{
			position: relative;
			&>p{
				color: #333;
				font-size: 15px;
				padding-bottom: 5px;
			}
			li{
				margin-left: 30px;
				list-style: disc;
				color: #666;
				font-size: 13px;
			}
			.btn{
				position: absolute;
				right: 0;
				top: 20px;
				//transform: translateY(-50%);
				button{
					color: #fff;
				}
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
		.base{
			.lv{
				.r{
					top: 85%;
				}
			}
		}
	}
}
</style>
