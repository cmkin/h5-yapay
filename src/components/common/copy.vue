<template>
	<div class="global_copy" @click="copyLink()">
		<slot></slot>
		<svg t="1600742189589"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3830" width="64" height="64"><path d="M682.666667 42.666667H85.333333v682.666666h85.333334V128h512V42.666667zM256 213.333333l4.522667 768H896V213.333333H256z m554.666667 682.666667H341.333333V298.666667h469.333334v597.333333z" p-id="3831"></path></svg>
	</div>
</template>

<script>
	import Clipboard from 'clipboard'
	export default {
		name:'copy',
		data() {
			return {

			}
		},
		props: {
			content: {
				default: "no content"
			}
		},
		mounted() {

		},
		methods: {
			copyLink() {
				let clipboard = new Clipboard('.global_copy', {
					text: () =>{
						return this.content
					}
				})
				clipboard.on('success', e => {
					this.$notify({
						type:'success',
						message:this.$t('global.base.copyOk')
					});
					// 释放内存
					clipboard.destroy()
				})
				clipboard.on('error', e => {
					this.$notify(this.$t('global.base.copyFail'));
					clipboard.destroy()
				})
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.global_copy{
		display: inline-block;
		cursor: pointer;
		svg{
			width: 15px;
			height: 15px;
			fill: @blue;
			.hover(@blue,true)
		}
	}
</style>
