//全局
import Vue from 'vue'

Vue.mixin({
  created: function () {
   
  },
  data(){
	  return{
		 
	  }
  },
  mounted() {
  	
	
  },
  computed:{
	isPhone(){
		return this.$store.state.screeW <=1024
	}  
  },
})

