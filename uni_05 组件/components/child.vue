<template>
	<view class="child">
		<h2>child</h2>
		<button size="mini" @click="toBrother">to brother</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:'hello brother'
			};
		},
		methods:{
			toBrother(){
				// 触发全局事件,,可以兄弟传值
				uni.$emit('bro',this.text)
			}
		}
	}
</script>

<style>
.child{
	width: 90%;
	background-color:chocolate;
	text-align: center;
}
</style>
