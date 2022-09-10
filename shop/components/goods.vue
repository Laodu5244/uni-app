<template>
	<view class="good_list" >
		<view 
		class="good_item"
		v-for="item in hots" 
		:key="item.id">
			<image :src="item.img_url" @click="toDetail(item.id)"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<div class="name" @click="toDetail(item.id)">{{item.title}}</div>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		hots: Array
	},
	methods:{
		// 跳转商品详情
		toDetail(id){
			uni.navigateTo({
				url:'/pages/good_detail/good_detail?id='+id
			})
		}
	}
}
</script>

<style lang="scss">
.good_list{
	padding: 0 5px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.good_item{
		background-color: #fff;
		width:345rpx;
		margin-bottom: 10px;
		padding: 15rpx;
		box-sizing: border-box;
		image{
			width:75%;
			height:150px;
			margin: 5px auto;
			display: block;
		}
		.price{
			color: $shop;
			font-size: 36rpx;
			text:nth-child(2){
				color:#aaa;
				font-size: 28rpx;
				margin-left: 12rpx;
				text-decoration: line-through;
			}
		}
		.name{
			font-size: 28rpx;
			line-height: 50rpx;
			padding: 0 10rpx;
		}
	}
}
</style>
