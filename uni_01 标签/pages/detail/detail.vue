<template>
	<view>
		<!-- text组件 -->
		<text>看书,弹琴,打代码</text>
		<view>
			<!-- selectable: 长按选中 -->
			<text selectable>看书,弹琴,打代码</text>
		</view>
		<view>
			<!-- space="ensp":半个中文字符 -->
			<text space="ensp">看书 弹琴 打代码</text>
		</view>
		<view>
			<!-- space="ensp":一个中文字符 -->
			<text space="emsp">看书 弹琴 打代码</text>
		</view>
		<view>
			<!-- space="ensp":依据字体大小 -->
			<text space="nbsp" style="font-size: 20px;">看书 弹琴 打代码</text>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>