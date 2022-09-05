<template>
	<view>
		content
		<image src="../../static/1.png" mode="aspectFit"></image>
		<button @click="toHome">
			跳转首页
		</button>
	</view>
</template>

<script>
export default {
	onUnload() {
		console.log('详情页卸载了')
	},
	// options是上一个页面传递的参数
	onLoad(options){
		console.log('传递的参数',options)
	},
	methods:{
		toHome(){
			// uni.switchTab 跳转到tabBar页面
			uni.switchTab({
				url:'/'
			})
		},
	}
}
</script>

