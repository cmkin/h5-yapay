import axios from 'axios';
import logout from '@/uitl/logout'

const instance = axios.create({
  baseURL: '',
  timeout: 20000
});





export function post (url,ops){
	let options = {
		token:true,
		data:{},
		error:false,  // true 不需要弹窗处理 error
		...ops
	}
	
	return new Promise(function(resolve,reject){
		
		instance.post(url,options.data).then((res)=>{
			resolve(res.data)
			if(res.data.code!=0 && !options.error){
				vm.$cheakError(res.data.code)
			}
			
		},(error)=>{
			reject(error)
			
			if(!options.error){
				vm.$cheakError('global.base.networkError',true)
			}
		}).catch((error)=>{
			//程序错误
			console.log(error)
		})
		
	});	
}

export function get (url,ops){
	let options = {
		token:true,
		data:{},
		turl:false, //自定义url
		error:false,  // true 需要单独处理 error
		...ops
	}
	
	if(Object.keys(options.data).length>0){
		url += "?"
		let urldatas = [] 
		for(let i in options.data){
			urldatas.push(i+'='+options.data[i])
		}
		url += urldatas.join("&")
	}
	if(options.turl){
		url = options.turl
	}
	
	
	return new Promise(function(resolve,reject){
		
		instance.get(url).then((res)=>{
			resolve(res.data)
			if(res.data.code!=0 && !options.error){
				vm.$cheakError(res.data.code)
			}
		},(error)=>{
			reject(error)
			if(!options.error){
				vm.$cheakError('global.base.networkError',true)
			}
		}).catch((error)=>{
			//程序错误
			console.log(error)
		})
		
	});
	
	
}


// 添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
	//console.log(config)
　　//这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中
	if(localStorage.getItem("token")){
		　config.headers['token'] = localStorage.getItem("token");
	}
　　config.headers['pc'] = true;
	
	return config;
　　
 }, function (error) {
  // Do something with request error
  return Promise.reject(error);
 });
 

// 添加一个响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data
		 if(response.data.code == 500208){
			vm.$dialog.alert({
			  cancelButtonText: vm.$t('global.base.cancel'),
			  confirmButtonText: vm.$t('global.base.ok'),
			  title: vm.$t('global.base.wxts'),
			  message: vm.$t('logout.dlsx'),
			}).then(() => {
			  // on close
			  logout.call(vm)
			});
			response.data.code = 0
		} 
  return response;
 }, function (error) {
  // Do something with response error
  return Promise.reject(error);
 });




