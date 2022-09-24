<template>
	<swiper
	indicator-dots 
	indicator-color="#ddd" 
	indicator-active-color="#b50e03"
	circular
	autoplay
	interval="3000">
		<swiper-item v-for="item in swipers" :key="item.id">
			<image :src="item.img"></image>
		</swiper-item>
	</swiper>
</template>

<script>
export default {
	name:"home_swiper",
	data() {
		return {
			swipers:[],
		};
	},
	methods:{
		// 获取轮播图数据
		async getSwiper(){
			const res = await this.$request({url:'/api/slide'})
			this.swipers = res.data.swipers
		},
	},
	created(){
		this.getSwiper()
	}
}
</script>

<style lang='scss'>
swiper{
	width: 750rpx;
	height:380rpx;
	image{
		height:100%;
		width:100%;
	}
}
</style>
