<template>
	<!-- view组件相当于div -->
	<view>
		<!-- hover-class:点下时的状态 -->
		<view class="box" hover-class="active">
			<view>hello uniapp</view>
			<!-- hover-stop-propagation:阻止事件冒泡 -->
			<view 
			class="box2" 
			hover-class="active2" 
			hover-stop-propagation
			>hello uniapp</view>
		</view>
		<!-- hover-start-time:延时两秒触发 -->
		<view 
		class="box3" 
		hover-class="active3" 
		:hover-start-time="2000"
		>hello uniapp</view>
		
		<!-- hover-stay-time:触发效果延时两秒 -->
		<view 
		class="box3" 
		hover-class="active3" 
		:hover-stay-time="2000"
		>hello uniapp</view>
		
	</view>
</template>

<script>
</script>

<style>
view{
	margin: 5px;
}
.box{
	width:150px;
	height:100px;
	background: green;
}
.active{
	background:red;
}
.box2{
	width:150px;
	height:50px;
	background:blue ;
}
.active2{
	background:pink;
}
.box3{
	width:150px;
	height:100px;
	background:#ccc;
}
.active3{
	background:yellow;
}
</style>