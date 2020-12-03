<template>
	<div class="g_select" @click.stop>
		<div class="icon_s" v-if="multiple">
			<div class="title" :class="{'disable':disable}" @click="open">
				<span>{{ multipleTitle }}</span>
				<van-icon :class="{ down: flag }" name="arrow-down" size="14" />
			</div>
			<transition name="top" mode="out-in">
				<ul v-if="flag" :style="{ height: height }">
					<vue-scroll :ops="ops" ref="myscroll">
						<li :class="sellPayClass(item.id)" @click="change(item.id)" v-for="(item, index) in lists">
							<img :src="item.img" alt="" />
							<span>{{ item[showKey] }}</span>
							<van-icon name="success" />
						</li>
					</vue-scroll>
				</ul>
			</transition>
		</div>

		<div class="icon_s" v-else-if="icon">
			<div class="title" :class="{'disable':disable}"  @click="open">
				<img :src="dTitle ? dTitle.img : ''" alt="" />
				<span>{{ dTitle ? dTitle.title : '' }}</span>
				<van-icon :class="{ down: flag }" name="arrow-down" size="14" />
			</div>
			<transition name="top" mode="out-in">
				<ul v-if="flag" :style="{ height: height }">
					<vue-scroll :ops="ops" ref="myscroll">
						<li :class="{ active: sActive == item.id }" @click="change(item.id)" v-for="(item, index) in lists">
							<img :src="item.img" alt="" />
							<span>{{ item[showKey] }}</span>
						</li>
					</vue-scroll>
				</ul>
			</transition>
		</div>

		<div class="defalut_s" v-else>
			<div class="changed" :class="{ hover: hover , 'disable':disable }" @click="open">
				<span>{{ dTitle ? dTitle.title : '' }}</span>
				<van-icon name="arrow-up" size="12" :class="{ c: flag }" />
			</div>
			<transition name="top" mode="out-in">
				<ul v-if="flag" :style="{ height: height }">
					<vue-scroll :ops="ops" ref="myscroll">
						<li :class="{ active: item.id == sActive }" @click="change(item.id)" v-for="(item, index) in lists">{{ item[showKey] }}</li>
					</vue-scroll>
				</ul>
			</transition>
		</div>
	</div>
</template>
<!-- $t('global.header.language') -->
<script>
export default {
	name: 'myselect',
	data() {
		return {
			flag: false,
			sActive: null,
			ops: {
				vuescroll: {
					wheelScrollDuration: 500
				},
				scrollPanel: {},
				rail: {},
				bar: {
					background: '#e3e3e3'
				}
			}
		};
	},
	computed: {
		listsData(){
			return this.lists
		},
		multipleTitle() {
			if (this.multiple && this.sActive != null) {
				let arr = this.lists
					.filter((item, index) => {
						return this.sActive.some((tt, ii) => tt == item.id);
					})
					.map(item => item[this.showKey]);

				return arr.length ? arr.join(',') : '';
			}
		},
		dTitle() {
			if (this.sActive == null) {
				return;
			}
			let item = this.lists.filter(item => item.id == this.sActive);

			if (!item.length) {
				return {
					title: '',
					img: ''
				};
			} else {
				return {
					title: item[0][this.showKey],
					img: item[0].hasOwnProperty('img') ? item[0].img : ''
				};
			}
		}
	},
	model: {
		prop: 'active',
		event: 'change'
	},
	props: {
		disable:{
			type:Boolean,
			default:false
		},
		active: {
			type: [String, Number, Array]
		},
		showKey: {
			type: String,
			default: 'title'
		},
		lists: {
			type: Array,
			default: () => {
				return [];
			}
		},
		icon: {
			type: Boolean,
			default: false
		},
		hover: {
			type: Boolean,
			default: false
		},
		multiple: {
			type: Boolean,
			default: false
		},
		height: {
			type: [String, Number],
			default: 'auto'
		}
	},
	watch: {
		/* listsData: {
			deep: true,
			handle: (news, olds) => {
				this.sActive = this.active;
			}
		}, */
		active(n) {
			this.sActive = this.active;
		},
		flag(news) {}
	},
	mounted() {
		this.sActive = this.active;
		document.addEventListener('click', () => {
			this.flag = false;
		});
	},
	methods: {
		open(flag,send=true){
			if(this.disable){
				return
			}
			
			this.flag = flag.clientX  ? !this.flag  : flag;
			
			if(send){
				this.$emit('flag',this.flag)
			}
		},
		sellPayClass(id) {
			return this.sActive.includes(id) ? 'sell_active' : '';
		},
		change(id) {
			if (this.multiple) {
				if (this.sActive.length <= 1 && this.sActive.includes(id)) {
					this.$notify(this.$t('global.base.bl'));
					return;
				}

				this.sActive.includes(id) ? this.sActive.splice(this.sActive.indexOf(id), 1) : this.sActive.push(id);
			} else {
				this.sActive = id;
			}
			this.flag = false;

			this.$emit('change', this.sActive);
		}
	}
};
</script>

<style lang="less" scoped="scoped">
.g_select {
	.defalut_s {
		.select_down_noicon;
	}

	.icon_s {
		.select_down_icon;
	}
	.max_height {
	}
	.disable{
		background-color: #E3E3E3 !important;
		cursor: not-allowed !important;
	}
}
</style>
