<template>
	<view>
		<button
		type="warn" 
		size="mini" 
		@click="choose">上传图片</button>
		<image 
		v-for="item in list" 
		:key="item" 
		:src="item"
		@click="prev"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {
			choose() {
				// 上传图片
				uni.chooseImage({
					count: 4,
					// 改成箭头函数来兼容小程序
					success:(res)=> {
						console.log('上传成功', res)
						this.list = res.tempFilePaths
					}
				})
			},
			prev(current){
				// 在小程序中可以预览图片
				uni.previewImage({
					current,
					urls:this.list,
					loop:true,
					indicator:"default"
				})
			}
		}
	}
</script>
