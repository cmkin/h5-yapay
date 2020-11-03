import Vue from 'vue'
import VueI18n from 'vue-i18n'


Vue.use(VueI18n) // 通过插件的形式挂载
const i18n = new VueI18n({
	locale: 'zh', // 自动判断语言标识
	// messages, // set locale messages
	messages: {
		'zh': require('./lang/zh'), // 中文语言包
		'en': require('./lang/en') // 英文语言包
	},
})


export default i18n
