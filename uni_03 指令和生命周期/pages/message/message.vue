<template>
	<view class="box">
		<view>
			{{msg}}
		</view>
		<!-- v-bind可以缩写成 : -->
		<image v-bind:src="url"></image>
		
		<!-- v-for -->
		<view v-for="item in arr" :key="item.id">
			序号: {{item.id}}
			姓名: {{item.name}}
			年龄: {{item.age}}
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			msg:'hello uni-app',
			url:"../../static/logo.png",
			arr:[
				{
					id:1,
					name:'宋小宝',
					age:18
				},
				{
					id:2,
					name:'刘能',
					age:34
				},
				{
					id:3,
					name:'赵四',
					age:45
				},
				{
					id:4,
					name:'小沈阳',
					age:43
				}
			],
		}
	}
}
</script>

<style>
.box{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>