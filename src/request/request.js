import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 10000
});



function successf(res,resolve){
	
	if(res.data.code==0){
		//code == 0 成功处理
		resolve(res.data);
	}else{
		//其他状态为错误，统一处理错误
	}
}

function errorf(error,reject){
	
	//reject(error)
}


export function post (url,ops){
	let options = {
		token:true,
		data:{},
		success:false, // true 需要单独处理 res
		error:false,  // true 需要单独处理 error
		...ops
	}
	
	return new Promise(function(resolve,reject){
		
		instance.post(url,options.data).then((res)=>{
			if(options.success){
				resolve(res)
			}else{
				successf(res,resolve)
			}
		},(error)=>{
			
			if(options.error){
				reject(error)
			}else{
				errorf(error,reject)
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
		success:false, // true 需要单独处理 res
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
	
	
	return new Promise(function(resolve,reject){
		
		instance.get(url).then((res)=>{
			if(options.success){
				resolve(res)
			}else{
				successf(res,resolve)
			}
		},(error)=>{
			if(options.error){
				reject(error)
			}else{
				errorf(error,reject)
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
	console.log(config)
　　//这里经常搭配token使用，将token值配置到tokenkey中，将tokenkey放在请求头中
　　config.headers['token'] = 123;
	
	return config;
　　
 }, function (error) {
  // Do something with request error
  return Promise.reject(error);
 });
 
// 添加一个响应拦截器
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
 }, function (error) {
  // Do something with response error
  return Promise.reject(error);
 });




