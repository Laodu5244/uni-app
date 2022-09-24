let _url = 'http://localhost:3000'

// 封装接口请求
export const request = (options)=>{
	return new Promise((resolve,reject)=>{
		// 封装接口请求
		uni.request({
			url: _url + options.url,
			method: options.method || 'GET',
			// data: 传的参数
			data: options.data || {},
			success: (res) => {
				// 失败
				if(res.statusCode !== 200){
					return uni.showToast({
						title:'数据获取失败'
					})
				}
				resolve(res)
			},
			// 错误的回调
			fail:(err)=> {
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}

