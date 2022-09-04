<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">uniapp</text>
		</view>
		<image src="../../static/1.webp" mode="aspectFit"></image>
		<image src="../../static/2.webp"  mode="aspectFit"></image>
		<image src="../../static/3.png"  mode="aspectFit"></image>
	</view>
</template>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
}
.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	// 使用uni.scss中的颜色变量
	color:$global-color;
}
</style>
