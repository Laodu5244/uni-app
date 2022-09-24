<template>
	<view class="home">
		<!-- 轮播图 -->
		<homeSwiper></homeSwiper>
		
		<!-- 导航区 -->
		<view class="nav">
			<view 
			class="nav-item" 
			v-for="item in navs" 
			:key="item.id"
			@click="itemPath(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.name}}</text>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view class="goods">
			<view class="title">推荐商品</view>
		  <goods :hots="hots"></goods>	
		</view>
		
	</view>
</template>

<script>
import goods from '../../components/goods.vue'
import homeSwiper from '../../components/home_swiper.vue'
export default {
	components:{
		goods, homeSwiper
	},
	data() {
		return {
			swipers:[],
			hots:[],
			navs:[
				{
					id:0,
					name:'网上超市',
					icon:'iconfont icon-ziyuan',
					path:'/pages/hots/hots',
				},
				{
					id:1,
					name:'联系我们',
					icon:'iconfont icon-guanyuwomen',
					path:'/pages/contact/contact',
				},
				{
					id:2,
					name:'社区图片',
					icon:'iconfont icon-tupian',
					path:'/pages/pics/pics',
				},
				{
					id:3,
					name:'精品推荐',
					icon:'iconfont icon-shipin',
					path:'/pages/hots/hots',
				},
			],	
		}
	},
	// 异步的数据一般用onLoad来接收
	onLoad() {
		this.getHots()
	},
	methods:{
		// 点击导航
		itemPath(path){
			uni.navigateTo({
				url:path
			})
		},
		// 获取热门列表的数据
		async getHots(){
			const res = await this.$request({
				url:'/api/hots',
			})
			this.hots = res.data.hots
		},
	}
}
</script>

<style lang="scss">
.nav{
	display: flex;
	margin-bottom: 10px;
	.nav-item{
		width:25%;
		text-align: center;
		view{
			width: 120rpx;
			height: 120rpx;
			background-color: $shop;
			border-radius: 60rpx;
			margin: 10px auto;
			line-height: 120rpx;
			color: #fff;
			font-size: 46rpx;
		}
		.icon-tupian{
			font-size: 40rpx;
		}
		text{
			font-size: 30rpx;
		}
	}
}

.goods{
	background-color: #eee;
	overflow: hidden;
	.title{
		height:50px;
		line-height: 50px;
		color: $shop;
		text-align: center;
		letter-spacing: 16px;
		background-color: #fff;
		font-weight: bold;
		margin: 6px auto;
	}
}

</style>
