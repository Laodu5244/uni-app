<template>
	<view class="pics">
		<!-- 左侧导航 scroll-y: 纵向滚动 -->
		<scroll-view scroll-y class="left">
			<view 
			:class="active===index?'active':''" 
			v-for="(item,index) in pictures" 
			:key="item.id" 
			@click="chick(index)">
				{{item.title}}
			</view>
		</scroll-view>
		
		<!-- 右侧详情 -->
		<view class="right">
			<view class="item">
				<image :src="content.url" @click="read(content.id)"></image>
				<text>{{content.detale}}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pictures:[],
			active:0,
			content:{
				url:"https://img1.baidu.com/it/u=1764125183,1536301141&fm=253&fmt=auto&app=138&f=JPEG?w=754&h=500",
				detale:"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果",
			}
		}
	},
	onLoad() {
		this.getPictures()
	},
	methods: {
		// 获取图片数据
		async getPictures(){
			let res = await this.$request({
				url:'/api/pictures',
			})
			this.pictures = res.data.pictures
		},
		chick(index){
			this.active = index
			// 获取右侧数据
			this.content = this.pictures[index]
		},
		// 预览图片
		read(id){
			// 用map把图片地址过滤出来
			let urls = this.pictures.map(item =>{
				return item.url
			})
			uni.previewImage({
				urls:urls,
				current:id
			})
		}
	},
}
</script>

<style lang="scss">
page{
	height:100%;
}

.pics{
	height:100%;
	display:flex;
	.left{
		width: 200rpx;
		height: 100%;
		view{
			height:60px;
			line-height: 60px;
			color:#333;
			text-align: center;
			border: 1px solid #eee;
			font-size: 32rpx;
		}
		.active{
			background-color: $shop;
			color:#fff;
		}
	}
	.right{
		height:100%;
		width:550rpx;
		padding-right: 20px;
		.item{
			margin-top: 10px;
			image{
				width:100%;
				margin: 10px;
			}
			text{
				padding: 10px;
				color: #333;
				font-size: 28rpx;
				line-height: 60rpx;
				height: 300rpx;
			}
		}
	}
}
	
</style>
