<template>
	<view class="good">
		<!-- 轮播图 -->
		<swiper indicator-dots circular>
			<swiper-item 
			v-for="item in swipers" 
			:key="item.id"
			>
				<image :src="item.img_url"></image>
			</swiper-item>
		</swiper>
		
		<!-- 内容 -->
		<view class="box1">
			<div class="price">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}}</text>
			</div>
			<div class="name">{{info.title}}</div>
		</view>
		
		<view class="box2">
			<view >货号: {{info.market_price * 20}}</view>
			<view >库存: {{Math.floor(info.market_price / 20)}}</view>
		</view>
		
		<div class="box3">
			<view class="title">详情介绍</view>
			<view class="content">{{content}}</view>
		</div>
		
		<!-- 引入购物车组件 -->
		<uni-goods-nav 
		:fill="true"  
		:options="options" 
		:buttonGroup="buttonGroup" 
		@click="onClick" 
		@buttonClick="buttonClick" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			id:0,
			swipers:[],
			info:{},
			options: [
				{
					icon: 'headphones',
					text: '客服'
				},
				{
					icon: 'cart',
					text: '购物车',
					info: 1
				},
			],
			buttonGroup:[
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			],
			content:'该机型分为两款型号，分别为PE-TL10和PE-UL00的新机型，并且根据工信部设备认证中心公布的信息显示，移动版本PE-TL20和PE-TL00M也已经拿到了入网许可证，拥有7.5mm的纤薄机身，支持TDD-LTE/TD-SCDMA/GSM网络。双800万后置摄像头+800万前置摄像头。采用5.5英寸1080p分辨率显示屏，搭载1.8GHz麒麟925八核处理器，内置3GB RAM+32GB ROM存储组合，支持存储卡扩展。',
		}
	},		
	methods: {
		async getSwiper(){
		const res = await this.$request({url:'/api/hots'})
		// 获取轮播图数据
		this.swipers = res.data.hots.slice(1,5)
		// 获取详情数据
		this.info = res.data.hots[1]
		},
		onClick (e) {
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			})
		},
		buttonClick (e) {
			this.options[1].info++
		}
	},
	onLoad() {
		this.getSwiper()
	}
}
</script>

<style lang="scss" scoped>
.good{
	swiper{
		width:100%;
		height:500rpx;
		swiper-item {
			display: flex;
			justify-content: center;
			align-items: center;
			image:{
				width:100%;
				height:100%;
			}
		}
	}
}

.box1{
	padding: 10px;
	border-bottom: 2px solid #666;
	.price{
		font-size:38rpx;
		color:$shop;
		line-height: 60rpx;
		text:nth-child(2){
			color:#ccc;
			font-size: 32rpx;
			margin-left: 20rpx;
			text-decoration: line-through;
		}
	}
	.name{
		font-size: 32rpx;
		line-height: 60rpx;
	}
}

.box2{
	padding: 0 10px;
	border-bottom: 2px solid #666;
	line-height: 72rpx;
}

.box3{
	.title{
		font-size: 38rpx;
		padding: 10px;
	}
	.content{
		padding:0 10px 30px;
		font-size:32rpx;
		color:#444;
		text-indent: 2em;
		line-height: 50rpx;
		letter-spacing: 4rpx;
	}
}
</style>
