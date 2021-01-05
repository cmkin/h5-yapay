import Vue from 'vue'



//vant
import Vant from 'vant';
// 引入全部样式
import 'vant/lib/index.less';
Vue.use(Vant);
import '@vant/touch-emulator';

import '_a/css/reset.css'
import '_a/less/class.less'



//插件引入
import vuescroll from 'vuescroll';
// 你可以在这里设置全局配置
Vue.use(vuescroll, {
	ops: {}, // 在这里设置全局默认配置
	//name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
});


//过滤器
import * as filters from '../filters/index'
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

//全局混入
import '../mixin/index'

//axios

import '../request/index'

//vuex
import store from '../store/index'

//i18n,router
import i18n from '../local/index'
import router from '../router/index'


///////////////////自定义组件////////////////

import tablex from '_c/common/table'
import dialog from '_c/common/dialog'
import copy from '_c/common/copy'
import chat from '_c/common/chat'
import select from '_c/common/select'
import headerTop from '_c/common/headerTop'
import sendCode from '_c/common/sendCode'
import nodata from '_c/common/noData'
import loading from '_c/common/loading'
import upload from '_c/common/upload'

const components = [tablex, dialog, copy, chat, select,headerTop,sendCode,nodata,loading,upload]
components.forEach(item => {
	Vue.component(item.name, item)
})


/////////////////////////自定义方法//////////

//深拷贝

Vue.prototype.$copy = function (obj){
	 let newobj = obj.constructor === Array ? [] : {};
	  //constructor 属性返回对创建此对象的数组函数的引用。创建相同类型的空数据
	  if (typeof obj !== 'object') {
	    return;
	  } else {
	    for (var i in obj) {
	      if (typeof obj[i] === 'object'){//判断对象的这条属性是否为对象
	        newobj[i] = this.$copy(obj[i]);//若是对象进行嵌套调用
	      }else{
	        newobj[i] = obj[i];
	      }
	    }
	  }
	  return newobj;//返回深度克隆后的对象
}

//获取dom
Vue.prototype.$dom = {
	getwh: function(ele, type = "h") {
		if(!document.querySelector(ele)){
			return 0
		}
		return type == 'h' ? document.querySelector(ele).offsetHeight : document.querySelector(ele).offsetWidth
	},
	setwh: function(ele, num, type = "h") {
		if(!document.querySelector(ele)){
			return 0
		}
		type == 'h' ? document.querySelector(ele).style.height = num + 'px' : document.querySelector(ele).style.width = num +
			'px'
	}
}
//输入框为空检查
Vue.prototype.$inputCheak = function(doms, error) {
	let root = doms;
	let flag = true
	let _this = this
	let errorTitle=''
	function forDOM(root) {
		if ([...root.attributes].map(item => item.nodeName).some(item => item == 'error') && root.tagName.toLocaleLowerCase() ==
			'input' && root.value == '') {
				errorTitle = ` ${errorTitle} [${root.attributes.error.value}]  ` 
			//表示未输入，添加错误class 返回错误，并提示
			if (root.className.indexOf("input_error_placeholder") == -1) {
				root.className = root.className + ' input_error_placeholder'
			}
			
			_this.$notify( _this.$options.filters.language(_this.$t('global.base.wz'),errorTitle,false) )
			flag = false
		}
		var children = root.children;
		forChild(children);
	}

	function forChild(node) {
		for (var i = 0; i < node.length; i++) {
			node[i].children && forDOM(node[i])
		}
	}
	forDOM(root);

	return flag
}

//检查错误

Vue.prototype.$cheakError = function(code,isall){
	this.$notify( this.$t( isall ? code : 'error.ERROR_'+code  ) )
}

//检查登录

Vue.prototype.$isLogin=function(){
	let token = localStorage.getItem('token')
		if(!token){
			this.$dialog.confirm({
				cancelButtonText: this.$t('global.base.cancel'),
				confirmButtonText: this.$t('global.base.ok'),
				title:this.$t('global.base.qxdl'),
				message:this.$t('global.base.qxdlmsg')
			}).then(()=>{
				this.$router.push("/login-register?type=0")
			}).catch(()=>{})
			
			return true //未登录
		}
		
		return false
}


//获取token
Vue.prototype.$getToken=function(type=0){
	return localStorage.getItem(type==0?'token':'userid')
}
//保存token
Vue.prototype.$saveToken=function(data,type=0){
	localStorage.setItem(type==0?'token':'userid',data)
}

//table隐藏检查

let maxWidth = 1024
Vue.prototype.$tableCheakHide = function(titles) {
	let arr = []
	let sw = document.documentElement.clientWidth
	if (sw <= maxWidth) {
		arr = titles.map(item => {
			if (item.hasOwnProperty("hide")) {
				item.isShow = false
			}
			return item
		})
	} else {
		arr = titles.map(item => {
			item.isShow = true
			return item
		})
	}
	return arr;
}



//日期格式化

Vue.prototype.$dateFormat= function (fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}



export default {
	store,i18n,router
}