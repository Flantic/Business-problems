//App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。
//App() 必须在 app.js 中注册，且不能注册多个
App({
	//监听小程序初始化完成时(全局只触发一次)
	onLaunch: function (options) {
		// Do something initial when launch.
	},
	//监听小程序显示 当小程序启动，或从后台进入前台显示(手机切换后台应用)
	onShow: function (options) {
		// Do something when show.
	},
	//监听小程序隐藏 当小程序从前台进入后台
	onHide: function () {
		// Do something when hide.
	},
	//错误监听函数 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
	onError: function (msg) {
		console.log(msg)
	},
	//【可以添加任意的函数或数据到 Object 参数中，用 this 可以访问】------------全局数据
	globalData: 'I am global data'
})

//onLaunch, onShow 参数
var options = {
	//打开小程序的路径
	path: 'pages/index/index',
	//打开小程序的query
	query: '',
	//打开小程序的场景值
	scene: 0,
	//转发
	shareTicket: '',
	//当场景为由从另一个小程序或公众号或App打开时，返回此字段
	referrerInfo: {
		//来源小程序或公众号或App的 appId
		//以下场景支持返回 
		//1020[公众号 profile 页相关小程序列表]
		//1035[公众号自定义菜单]
		//1036[App 分享消息卡片]
		//1037[小程序打开小程序]
		//1038[从另一个小程序返回]
		//1043[公众号模板消息]
		appId: '',
		//来源小程序传过来的数据 1037[小程序打开小程序] 1038[从另一个小程序返回] 时 支持
		extraData: ''
	}
}

// 注意：

// App() 必须在 app.js 中注册，且不能注册多个。
// 不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。
// 不要在 onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
// 通过 getApp() 获取实例之后，不要私自调用生命周期函数。