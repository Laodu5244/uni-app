<template>
	<view>
		<h3>my module</h3>	
		<!-- type="primary": 不同的颜色 -->
		<button type="primary">按钮</button>
		<!-- size="mini": 缩小按钮 -->
		<button type="warn" size="mini">按钮</button>
		<!-- plain:镂空的按钮 -->
		<button size="mini" type="warn" plain>按钮</button>
		<!-- disabled: 禁用的 -->
		<button size="mini" type="warn" disabled>按钮</button>
		<!-- loading: 加载中 -->
		<button size="mini" type="warn" loading>按钮</button>
		
		<!-- mode="aspectFit": 保持纵横比 -->
		<image src="../../static/weixin.png" mode="aspectFit"></image>
		<!-- mode="aspectFill": 只保证短边完全显示 -->
		<image src="../../static/weixin.png" mode="aspectFill"></image>
	</view>
	
</template>

<script>
</script>

<style>
button{
	margin: 5px;
}
</style>