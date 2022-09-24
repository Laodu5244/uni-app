<template>
	<view class="contact">
		<image class='img' :src="imgUrl"></image>
		<view class="info">
			<view @click="phone">
				联系电话：
				<span>400-618-9090</span>  
				（点击拨打）
			</view>
			<view>
				地址:浙江杭州下沙区4号大街187号盛泰时代
			</view>
			
			<!-- 地图组件 -->
			<map 
			:longitude="longitude" 
			:latitude="latitude"
			:markers="marker"
			:scale="scale"></map>
		</view>
		
		<navigator
		open-type="switchTab" 
		url="/pages/index/index"
		>跳转首页</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imgUrl:'http://www.itcast.cn/2018czydz/images/gywmban.jpg',
			// 经纬度
			longitude:120.363172,
			latitude:30.312212,
			scale:14,
			marker:[
				{
					longitude:120.363172,
					latitude:30.312212,
					iconPath:'../../static/images/hmlogo.png',
					// 改变图标宽高
					// width:40,
					// height:40,
				}
			]
		}
	},
	methods:{
		phone(){
			uni.makePhoneCall({
				phoneNumber: '400-618-9090'
			})
		}
	}
}
</script>

<style lang="scss">
.contact{
	.img{
		width:750rpx;
		height:320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 35rpx;
		line-height:80rpx;
		border-bottom: 1px solid #eee;
		span{
			color: #007aff;
		}
	}
	map{
		width: 750rpx;
		height:650rpx;
	}
	navigator{
		margin-top: 20px;
		text-align: center;
		background-color: green;
		color:#fff;
		height: 40px;
		line-height: 40px;
		letter-spacing: 2px;
	}
}
</style>
