<template>
	<div class="global_dialog" v-if="value">
		<van-dialog
		 :value="true" 
		 :show-confirm-button="false">
		 
		 <template v-slot:title>
			 <div class="gtitle clearfix">
				 <span>{{title}}</span>
				 <van-icon name="cross" @click="$emit('input',false)" />
			 </div>
		 	  
		 </template>
		 
		  <template v-slot:default>
			 <div class="default">
				 <div class="content">
					 <slot name="content"></slot>
				 </div>
				 
				 <div class="btns" v-if="fonter">
					 <slot name="bLeft"></slot>
					 <van-button type="default" size="small" @click="$emit('input',false)">{{ cancelText?cancelText:$t('global.base.cancel') }}</van-button>
					 <van-button :loading="loadingF" :disabled="disabled" :loading-text="$t('global.base.loading')"   type="info" size="small" @click="ok">{{okText?okText:$t('global.base.ok') }}</van-button>
				 </div>
			 </div>
		  </template>
		  
		</van-dialog>
		
	</div>
</template>

<script>
	export default {
		name:'dialogx',
		data(){
			return{
				key:Math.random(),
				loadingF:this.loading
			}
		},
		props:{
			value:{
				type:Boolean,
				default:false
			},
			cancelText:{
				type:String
			},
			okText:{
				type:String
			},
			title:{
				type:[String,Number],
			},
			loading:{
				type:Boolean,
				default:false
			},
			disabled:{
				type:Boolean,
				default:false
			},
			onOk:{
				type:Function,
				default:()=>{
					//console.log("ok")
				}
			},
			fonter:{
				type:Boolean,
				default:true
			}
		},
		watch:{
			loading(){
				this.loadingF = this.loading
			},
			value(){
				if(!this.value){
					this.loadingF = false
				}
			}
		},
		
		mounted() {
			
		},
		methods:{
			ok(){
				if(this.loadingF){
					return
				}
				this.loadingF = true
				this.onOk()
			
				
			}
		}
	}
</script>

<style lang="less">
	.global_dialog{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2001;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		            justify-content: center; /* 水平居中 */
		            align-items: center;     /* 垂直居中 */
		.van-overlay{
			z-index: 200 !important;
			display: none;
		}
		.van-dialog{
			width: 360px;
			border-radius: 5px;
			top: 40%;
			left: 50%;
			transform: none !important;
			position: static;
			.gtitle{
				padding: 10px 20px;
				border-bottom: 1px solid rgba(0,0,0,0.06);
				text-align: left;
				span{
					font-size: 16px;
				}
				i{
					float: right;
					margin-top: 5px;
					cursor: pointer;
				}
			}
			.default{
				.content{
					padding: 10px 20px;
					font-size: 14px;
					border-bottom: 1px solid rgba(0,0,0,0.06);
				}
				.btns{
					padding:  20px;
					text-align: right;
					position: relative;
					&>button{
						letter-spacing: 2px;
						font-size: 14px;
						padding: 0 16px;
						height: 32px;
						text-align: center;
					}
					&>.van-button--default{
						border:1px solid rgba(211,211,211,1);
						margin-right: 20px;
					}
				}
			}
		}
		.van-dialog__header{
			padding: 0;
		}
		
		
		@media (max-width: 321px){
			.van-dialog {
			    width: 90%;
			}
		}
	}
</style>
