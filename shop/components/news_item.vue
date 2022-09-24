<template>
	<view>
		<view class="news_item" v-for="item in news" :key="item.id">
			<image :src="item.url"></image>
			<view class='right'>
				<view class="tit" @click="goTo(item.id)">{{item.detale}}</view>
				<div class="info">
					<text>发表时间: {{item.add_time | date}}</text>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		news:Array
	},
	filters:{
		date(e){
			return e.slice(0, 10) 
		}
	},
	methods:{
		goTo(id){
			this.$emit('item_click',id)
		}
	}
}
</script>

<style scoped lang='scss'>
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
</style>
