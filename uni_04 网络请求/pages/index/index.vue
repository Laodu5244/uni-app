<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button size="mini" type="warn" @click="getData">
			getData
		</button>
		<button size="mini" type="warn" @click="setStorage">
			setStorage
		</button>
		<button size="mini" type="warn" @click="getStorage">
			getStorage
		</button>	
		<button size="mini" type="warn" @click="removeStorage">
			removeStorage
		</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			fruitList:[],
		}
	},
	methods: {
		getData(){
			// uni.request: 发送网络请求
			uni.request({
				url:'http://localhost:3000/fruitlist',
				// success相当于.then
				success(response) {
					console.log(response.data)
				}
			})
		},
		setStorage(){
			// uni.setStorage: 把数据存到本地
			uni.setStorage({
				key:'id',
				data:'hello uniapp',
				success() {
					console.log('存储成功')
				}
			})
			
			// 同步的方法
			// uni.setStorageSync('id',100)
		},
		getStorage(){
			// 获取本地数据
			uni.getStorage({
				key:'id',
				success(res) {
					console.log('获取成功',res)
				}
			})
		},
		removeStorage(){
			// uni.removeStorage: 删除本地数据
			uni.removeStorage({
				key:'id',
				success() {
					console.log('删除成功')
				}
			})
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

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
	
button{
	margin: 4px;
}
</style>
