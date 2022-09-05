<template>
	<view class="son">
		son module
		<view class="">
			{{title}}
		</view>
		<button size="mini" @click="toFather">to father</button>
		<view>
			{{txt}}
		</view>
	</view>
</template>

<script>
export default {
	props:{
		title:String
	},
	data(){
		return{
			msg:'son to father',
			txt:''
		}
	},
	methods:{
		toFather(){
			this.$emit('send',this.msg)
		}
	},
	created(){
		// 接收兄弟组件的传值
		uni.$on('bro',(res)=>{
			this.txt = res
		})
	}
}
</script>

<style>
.son{
	width: 100%;
	background-color: greenyellow;
	text-align: center;
}
</style>
