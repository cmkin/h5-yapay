import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 10000,
  headers: {'token': 'foobar'}
});


function post (){
 	instance.post()
}

function get (){
	instance.get()
}



export default{
	post:post,
	get:get
}

