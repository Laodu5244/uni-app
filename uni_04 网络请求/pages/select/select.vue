<template>
	<view>
		
		<!-- 这段代码只在html中执行(条件注释) -->
		<!-- #ifdef H5 -->
		<view>我希望只在H5中显示</view>
		<!-- #endif -->
		
		<!-- #ifdef MP-WEIXIN -->
		<view>我希望只在小程序中显示</view>
		<!-- #endif -->
		
		<hr>
		<h2>声明式导航</h2>
		<!-- open-type="switchTab":tabBar页面添加项 -->
		<navigator 
		open-type="switchTab" 
		url="/pages/index/index"
		>跳转首页</navigator>
		
		<navigator 
		open-type="switchTab" 
		url="/pages/image/image"
		>跳转图片页</navigator>
		
		<!-- open-type="redirect": 不能返回 -->
		<navigator 
		open-type="redirect"
		url="/pages/image/image"
		>跳转图片页</navigator>
		
		<hr>
		<h2>编程式导航</h2>
		<button @click="toContent">
			跳转详情页
	  </button>
		<button @click="toHome">
			跳转首页
		</button>
		<button @click="toCon">
			跳转详情页并关闭当前页面
		</button>
	</view>
</template>

<script>
	export default {
		onLoad() {
			// #ifdef H5
			console.log('我希望只在H5中显示')
			// #endif	
			
			// #ifdef MP-WEIXIN
			console.log('我希望只在小程序中显示')
			// #endif
		},
		onUnload() {
			console.log('导航页卸载了')
		},
		methods:{
			toContent(){
				// uni.navigateTo只能跳转非tabBar页面
				uni.navigateTo({
					url:"/pages/content/content?id=80&age=18"
				})
			},
			toHome(){
				// uni.switchTab 跳转到tabBar页面
				uni.switchTab({
					url:'/'
				})
			},
			toCon(){
				// 
				uni.redirectTo({
					url:"/pages/content/content"
				})
			}
		}
	}
</script>

<style>
/* 这段代码只在小程序中显示 */ 
/* #ifdef MP-WEIXIN */
view{
	color:hotpink;
}	
/* #endif */

/* 这段代码只在html5中显示 */
/* #ifdef H5 */
view{
	color:orange;
}	
/* #endif */
</style>
