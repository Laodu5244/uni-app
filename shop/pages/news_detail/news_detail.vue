<template>
	<view class="detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发表时间: {{detail.add_time}}</text>
		</view>
		<div class="content">
			<rich-text :nodes="detail.detale + text">
			</rich-text>
		</div>
		
		<navigator
		open-type="switchTab" 
		url="/pages/news/news"
		>跳转资讯列表</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			id: null,
			detail:{},
			text:''
		}
	},
	methods: {
		async getDetail(){
			const res = await	this.$request({
				url: '/api/news'
			})
			this.detail = res.data.news[this.id]
			this.detail.add_time = res.data.news[this.id].add_time.slice(0,10)
			this.text = '，' + res.data.text
		}
	},
	onLoad(option){
		this.id = option.id
		this.getDetail()
	}
}
</script>

<style scoped lang="scss">
.detail{
	margin-top: 20rpx;
	font-size: 30rpx;
	.title{
		text-align: center;
		display:block;
		margin: 20rpx;
		font-size: 40rpx;
	}
	.info{
		margin: 20rpx 20rpx 10rpx;
		color: orangered;
		font-size: 32rpx;
	}
	.content{
		margin: 35rpx;
		text-indent: 2em;
	}
}

navigator{
		margin-top: 20px;
		text-align: center;
		background-color: green;
		color:#fff;
		height: 40px;
		width: 100%;
		line-height: 40px;
		letter-spacing: 2px;
	}
</style>
