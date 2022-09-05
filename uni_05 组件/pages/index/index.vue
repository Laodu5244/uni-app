<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view v-if="msg">
			{{msg}}
		</view>
		<!-- test组件 -->
		<test></test>
		<navigator url="/pages/about/about">
			跳转关于页
		</navigator>
		<!-- son组件 -->
		<son :title="title" @send="getdata"></son>
		<child></child>
	</view>
</template>

<script>
import test from '@/components/test.vue'
import son from '@/components/son.vue'
import child from '@/components/child.vue'
export default {
	components:{
		test,
		son,
		child
	},
	data(){
		return{
			title:'father to son',
			msg:''
		}
	},
	methods:{
		getdata(data){
			this.msg = data
		}
	}
}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.logo {
	height: 200rpx;
	width: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}
view{
	margin: 20px;
}
</style>
