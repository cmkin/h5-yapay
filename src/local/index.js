import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zh from './lang/zh'
import en from './lang/en'

Vue.use(VueI18n) // 通过插件的形式挂载
const i18n = new VueI18n({
	locale: 'zh', // 自动判断语言标识
	// messages, // set locale messages
	messages: {
		'zh': zh, // 中文语言包
		'en': en // 英文语言包
	},
})


export default i18n
