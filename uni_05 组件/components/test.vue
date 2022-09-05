<template>
<view id="test">
	<view v-show="flag">测试组件</view>
	<button @click="flag = !flag">click</button>
</view>
</template>

<script>
export default{
	data(){
		return{
			num:10,
			flag:true
		}
	},
	beforeCreate(){
		console.log('beforeCreate')
		console.log('数据:',this.num)
	},
	// 数据已经能获取
	created(){
		console.log('created')
		console.log('数据:',this.num)
	},
	beforeMount() {
		console.log('beforeMount')
		console.log('DOM:',document.getElementById("test"))
	},
	mounted() {
		console.log('mounted')
		console.log('DOM:',document.getElementById("test"))
	},
	beforeUpdate() {
		console.log('beforeUpdate')
	},
	updated() {
		console.log('updated')
	},
	beforeDestroy() {
		console.log('beforeDestroy')
	},
	destroyed() {
	  console.log('destroyed')
	}
}
</script>
