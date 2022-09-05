<template>
	<view>
		about
	</view>
</template>

<script>
	export default {
		data(){
			return{
				time:null
			}
		},
		created(){
			this.time = setInterval(()=>{
				console.log('hello uniapp')
			},2000)
		},
		beforeDestroy() {
			clearInterval(this.time)
			console.log('组件即将销毁,定时器已经关闭')
		},
	}
</script>
