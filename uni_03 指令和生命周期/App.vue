<script>
	export default {
		// onLaunch相当于created
		onLaunch: function() {
			console.log('App Launch')
		},
		// onShow相当于mounted(每次加载都触发)
		onShow: function() {
			console.log('App Show')
		},
		// onHide在隐藏时触发
		onHide: function() {
			console.log('App Hide')
		},
		// onError报错时触发
		onError: function(err) {
			console.log('出错了',err)
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
