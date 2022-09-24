<template>
	<view class="hots">
		<view 
		class="goods" 
		v-for="item in list" 
		:key="item.id">
			<view class="title">{{item.title}}</view>
			<goods :hots="hots"></goods>	
		</view>
		<view 
		class="footer" 
		v-if="flag" 
		@click="toHome"
		>----- 跳转首页 -----</view>
	</view>
</template>

<script>
import goods from '../../components/goods.vue'
export default {
	components:{
		goods
	},
	data() {
		return {
			hots:[],
			list:[
				{id:1,title:'精选商品'},
				{id:2,title:'爆款推荐'},
				{id:3,title:'限时优惠'},
			],
			flag:false,
		}
	},
	onLoad() {
		this.getHots()
	},
	onReachBottom() {
		this.flag = true
	},
	onPullDownRefresh() {
		console.log('下拉刷新')
		setTimeout(()=>{
		 if(this.list[0].id !== 4){
			 this.list.unshift({id:4,title:'火爆新款'})
		 }
		},800)
		uni.stopPullDownRefresh()
	},
	methods: {
		// 获取热门列表的数据
		async getHots(){
			const res = await this.$request({
				url:'/api/hots',
			})
			this.hots= res.data.hots
		},
		toHome(){
			// uni.switchTab 跳转到tabBar页面
			uni.switchTab({
				url:'/'
			})
		},
	}
}
</script>

<style lang="scss">
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
		margin: 0 auto 8px;
	}
}

.footer{
	height: 40px;
	line-height: 40px;
	text-align: center;
	background-color: orange;
	color:#fff;
	letter-spacing: 2px;
	font-size: 21px;
	font-style: italic;
}
</style>
