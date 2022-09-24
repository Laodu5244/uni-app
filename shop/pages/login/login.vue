<template>
	<view class="login">
		<!-- 首页轮播图 -->
		<homeSwiper></homeSwiper>
		
		<view class="form">
			<view>请输入用户名:
			  <input type="text" v-model="username">
			</view>
			<view>请输入密码:
				<input type="password" v-model="password">
			</view>
		</view>
		
		<div class="box">
			<button 
			size="mini" 
			type="warn"
			@click="clear">重置</button>
			<button  
			size="mini" 
			type="primary"
			@click="toHome">登录</button>
		</div>
	</view>	
</template>

<script>
import homeSwiper from '../../components/home_swiper.vue'
export default {
	components:{ homeSwiper },
	data() {
		return {
			username:'',
			password:'',
		}
	},
	methods: {
		clear(){
			this.username = '',
			this.password = '',
			uni.showToast({
				title:'用户名和密码已重置',
				icon:'none',
				duration:2000
			})
		},
		toHome(){
			if(this.username.trim() == '' || this.password.trim() == ''){
				uni.showModal({
					title:'提示',
					content:'输入不能为空!'
				})
			} else if (this.username.length<6 || this.username.length>=18 ||
			this.password.length<6 || this.password.length>=18){
				uni.showModal({
					title:'提示',
					content:'请输入有效的用户名和密码'
				})
			}else{
				uni.switchTab({
					url:'/?user=123'
				})
			}
		}
	}
}
</script>

<style lang="scss">
.login{
	uni-swiper{
		margin-top: 0;
		height:380rpx;
	}
	.form{
		padding:50rpx;
		view{
			color:orange;
			input{
				margin:10px;
				padding:6px 15px;
				color: #666;
				border-radius:8px;
				border:1px solid #ccc;
			}
		}
	}
	.box{
		display: flex;
		justify-content: space-between;
		button {
			font-size: 18px;
			font-weight: bold;
		}
	}
}

swiper{
	margin-top: 50rpx;
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
</style>
