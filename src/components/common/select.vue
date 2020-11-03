<template>
	<div class="g_select" @click.stop>
		<div class="icon_s" v-if="multiple">
			<div class="title" @click="flag = !flag">
				<span>{{ multipleTitle }}</span>
				<van-icon :class="{ down: flag }" name="arrow-down" size="14" />
			</div>
			<transition name="top" mode="out-in">
				
					<ul v-if="flag" :style="{height:height}">
						<vue-scroll :ops="ops"  ref="myscroll">
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
			<div class="title" @click="flag = !flag">
				<img :src="lists[sActive] ? lists[sActive].img : ''" alt="" />
				<span>{{ lists[sActive] ? lists[sActive][showKey] : '' }}</span>
				<van-icon :class="{ down: flag }" name="arrow-down" size="14" />
			</div>
			<transition name="top" mode="out-in">
				<ul v-if="flag" :style="{height:height}">
					<vue-scroll :ops="ops"  ref="myscroll">
						<li :class="{ active: sActive == item.id }" @click="change(item.id)" v-for="(item, index) in lists">
							<img :src="item.img" alt="" />
							<span>{{ item[showKey] }}</span>
						</li>
					</vue-scroll>
				</ul>
			</transition>
		</div>

		<div class="defalut_s" v-else>
			<div class="changed" :class="{ hover: hover }" @click="flag = !flag">
				<span>{{ lists[sActive] ? lists[sActive][showKey] : '' }}</span>
				<van-icon name="arrow-up" size="12" :class="{ c: flag }" />
			</div>
			<transition name="top" mode="out-in">
				<ul v-if="flag" :style="{height:height}">
					<vue-scroll :ops="ops"  ref="myscroll">
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
					wheelScrollDuration:500
				},
				scrollPanel: {
					
				},
				rail: {},
				bar: {
					background:"#e3e3e3"
				}
			}
		};
	},
	computed: {
		multipleTitle() {
			if (this.multiple && this.sActive) {
				let arr = this.lists
					.filter((item, index) => {
						return this.sActive.some((tt, ii) => tt == item.id);
					})
					.map(item => item[this.showKey]);

				return arr.length ? arr.join(',') : '';
			}
		}
	},
	model: {
		prop: 'active',
		event: 'change'
	},
	props: {
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
		height:{
			type:[String,Number],
			default:"auto"
		}
	},
	watch: {
		lists: {
			deep: true,
			handle: (news, olds) => {
				this.sActive = this.active;
			}
		},
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
	.max_height{
		
	}
}
</style>
