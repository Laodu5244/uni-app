<template>
	<view class="life">
		<view>{{ title }}</view>
		<view v-for="item in list" :key="item">
			{{item}}
		</view>
		<button @click="pull">下拉刷新</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title:'下拉刷新',
			list:['苹果','香蕉','鸭梨']
		}
	},
	onLoad(options) {
		console.log('页面加载了',options)
	},
	onShow() {
		console.log('页面显示了')
	},
	onReady() {
		console.log('页面初次渲染完成了')
	},
	onHide() {
		console.log('页面隐藏了')
	},
	onUnload() {
		console.log('页面卸载了')
	},
	// 下拉生命周期
	onPullDownRefresh(){
		console.log('触发了下拉生命周期')

		setTimeout(()=>{
			this.list=['看书','弹琴','打代码']
		  // 取消刷新图标
			uni.stopPullDownRefresh()
		},1000)
	},
	methods:{
		pull(){
			// 点击触发下拉刷新的方法
			uni.startPullDownRefresh()
		}
	}
}
</script>

<style>
.life{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
