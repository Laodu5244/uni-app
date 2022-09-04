<template>
	<view>
		<view>样式的学习</view>
		<view class="box1">750rpx</view>
		<view class="box2">375rpx</view>
	</view>
</template>

<style>
/* 通配符选择器*不能在uniapp中使用 */
/* *{ color: aqua; } */

/* @import导入外部样式 */
@import url("./main.css");

/* page相当于body */
page{
	background-color: #ccc;
}

.box1{
	/* 750rpx是以750px为基准,随屏幕宽度变化 */
	width: 750rpx;
	height: 750rpx;
	background:pink;
	font-size: 100rpx;
}
.box2{
	width: 375rpx;
	height: 375rpx;
	background:greenyellow;
}

</style>
