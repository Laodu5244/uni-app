<template>
	<view>
		<uni-card title="基础卡片" extra="额外信息">
			<text>这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。</text>
		</uni-card>
		
		<uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
			<text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
		</uni-card>
		
		<uni-card title="基础卡片" :isFull="true" sub-title="副标题" extra="额外信息">
			<text>这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。</text>
		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>
