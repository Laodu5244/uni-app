<template>
	<view class="content">
		<view class="title">
			{{title}}
		</view>
		<view>{{'你好'+'世界'}}</view>
		<!-- v-on可以缩写成@ -->
		<button type="primary" v-on:click="handler">click</button>
		<button type="primary" v-on:click="handler2(20,$event)">click2</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'数据绑定的学习'
		}
	},
	methods:{
		handler(e){
			// 参数e是事件对象
			console.log('button1 id clicked',e)
		},
		handler2(num,e){
			// 如果传了参数,第二个参数可以用$event来获取事件对象
			console.log('参数num:',num,e)
		}
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

</style>
