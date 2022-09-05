<template>
	<view class="bottom">
		<view class="box">1</view>
		<view class="box">2</view>
		<view class="box">3</view>
		<view class="box">4</view>
		<view class="box">5</view>
		<view class="text" v-if="show">
			已经触底了
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			}
		},
		// 触底生命周期
		onReachBottom(){
			console.log('页面触底了');
			this.show = true
		}
	}
</script>

<style>
.bottom{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.box{
	height:200px;
	width: 200px;
	margin: 30px;
	background-color: #342;
}
.text{
	height:100px;
	width: 200px;
	margin: 30px;
	background-color: #de4;
}
</style>
