<template>
	<view class="news">
		<newsItem @item_click="goDetail" :news="news"></newsItem>
	</view>
</template>

<script>
import newsItem from '../../components/news_item.vue'
export default {
	components:{
		newsItem
	},
	data() {
		return {
			news:[]
		}
	},
	methods: {
		async get_news(){
			const res = await this.$request({ url: '/api/news' })
			this.news = res.data.news
		},
		goDetail(id){
			uni.navigateTo({
				url:"/pages/news_detail/news_detail?id="+id
			})
		}
	},
	onLoad() {
		this.get_news()
	}
}
</script>

<style scoped lang='scss'>
.news{
	.news_item{
		display:flex;
		padding: 20rpx;
		border-bottom: 1px solid $shop;
		image{
			min-width:240rpx;
			max-width:240rpx;
			height:180rpx;
			margin-right: 15rpx;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.tit{
				font-size:36rpx;
			}
			.info{
				font-size: 24rpx;
				color:#333;
			}
		}
	}
}

</style>
