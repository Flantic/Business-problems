
var AppConfig = {
	//指定所有页面地址
	"pages": [
		"pages/index/index",
		"pages/logs/index"
	],
	//顶级配置对象
	"window": {
		//导航栏背景颜色
		"navigationBarBackgroundColor": "#000000",
		//导航栏标题文字内容
		"navigationBarTitleText": "Demo",
		//导航栏标题颜色，仅支持 black/white
		"navigationBarTextStyle": "white",
		//窗口的背景色
		"backgroundColor": "#ffffff",
		//下拉背景字体、loading 图的样式，仅支持 dark/light
		"backgroundTextStyle": "dark",
		//是否开启下拉刷新
		"enablePullDownRefresh": true,
		//页面上拉触底事件触发时距页面底部距离 单位为px
		"onReachBottomDistance": 50
	},
	//多tab应用底部导航栏
	"tabBar": {
		//tab 的列表 最少2个、最多5个 tab
		"list": [{
			//跳转页码路径
			"pagePath": "pages/index/index",
			//底部导航上的文字
			"text": "首页",
			//icon路径，大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效，不支持网络图片
			"iconPath": '',
			//选中时的icon路径
			"selectedIconPath": ''
		}, {
			"pagePath": "pages/logs/logs",
			"text": "日志"
		}]
	},
	//可以设置各种网络请求的超时时间。
	"networkTimeout": {
		//wx.request的超时时间，单位毫秒，默认为：60000
		"request": 10000,
		//wx.downloadFile的超时时间，单位毫秒，默认为：60000
		"downloadFile": 10000,
		//wx.connectSocket的超时时间，单位毫秒，默认为：60000
		"connectSocket": 10000,
		//wx.uploadFile的超时时间，单位毫秒，默认为：60000
		"uploadFile": 10000
	},
	//在开发者工具的控制台面板，调试信息以 info 的形式给出，其信息有Page的注册，页面路由，数据更新，事件触发
	"debug": true
}

//page的配置同app配置中的window,但是多了一项属性
var PageConfig = {
	//设置为 true 则页面整体不能上下滚动；只在 page.json 中有效，无法在 app.json 中设置该项
	disableScroll: false
}