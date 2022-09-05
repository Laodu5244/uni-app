<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		
		<!--  引入日期插件 -->
		<view>
			<uni-calendar 
			:insert="true"
			:lunar="true" 
			ref="calendar"
			@change="change"/>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
		}
	},
	methods: {
		open(){
			this.$refs.calendar.open();
		},
		confirm(e) {
			console.log(e);
		},
		change(e){
			console.log('change')
		},
	}
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

</style>
