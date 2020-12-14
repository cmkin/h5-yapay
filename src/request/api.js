import {post,get} from './request'



export default {
	login:function(data){
		return get("/login",{
			data:data,
			token:false
		})
	}
}
