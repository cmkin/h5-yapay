<template>
	<div class="g_setPayPassword">
		<dialogx v-model="flag" ref="gp" :disabled="pwd.length!=6" :okText="setp==0?$t('global.base.next'):$t('global.base.ok')" :onOk="next" :title="$t('global.base.szzf')">
			<template v-slot:content>
				<div class="main">
					<!-- 密码输入框 -->
					<van-password-input
					  :value="pwd"
					  :length="6"
					  :info="setp==0? $t('global.base.srzf') : $t('global.base.srzfr')"
					  :focused="showKeyboard"
					  @focus="showKeyboard = true"
					/>
					
					<!-- 数字键盘 -->
					<van-number-keyboard
					  v-model="pwd"
					  :show="showKeyboard"
					  @blur="showKeyboard = false"
					/>
				</div>
			</template>
		</dialogx>
		
		
	</div>
</template>

<script>
	export default {
		name:'setPayPassword',
		data(){
			return{
				form:{
					pwd:'',
				},
				setp:0,
				flag:false,
				pwd:'',
				showKeyboard: true,
			}
		},
		props:{
			value: {
				type: Boolean,
				default: false
			},
		},
		mounted() {
			this.flag=this.value
		},
		beforeDestroy() {
			
		},
		methods:{
			next(){
				if(this.setp==0){
					this.setp++
					this.form.pwd = this.pwd
					this.pwd=''
					this.showKeyboard = true
					this.$refs.gp.loadingF = false
					return
				}
				
				if(this.pwd != this.form.pwd){
					this.$notify(this.$t('global.base.lcbyz'))
					this.$refs.gp.loadingF = false
					return
				}
				this.$http.updatePayPassword({
					payPassword:this.pwd
				}).then(res=>{
					this.$refs.gp.loadingF = false
					if(res.code==0){
						this.$notify({
							type:"success",
							message:this.$t('global.base.szcc')
						})
						this.$store.commit('updateUserInfo',{
							add:true,
							obj:{
								payPassword:true
							}
						})
						this.$emit('input', false)
					}
				})
				
				
			}
		},
		watch:{
			pwd(value){
				if(value.length>6){
					this.pwd = value.slice(0,6)
				}
			},
			flag(value){
				this.$emit('input',value)
			},
			value(){
				this.flag=this.value
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.g_setPayPassword{
		.main{
			padding: 30px 0;
		}
	}
</style>
<style lang="less">
	@media (max-width:1023px) {
		.g_setPayPassword{
			.van-dialog{
				margin-top: -40%;
			}
		}
	}
	
</style>
