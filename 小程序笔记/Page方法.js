//Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。
Page({
	//页面的初始数据
	data: {},
	//监听页面加载 一个页面只会调用一次 可以在 onLoad 中获取打开当前页面所调用的 query 参数。
	onLoad: function () { },
	//监听页面初次渲染完成 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。 ** wx.setNavigationBarTitle请在onReady之后设置
	onReady: function () { },
	//监听页面显示 每次打开页面都会调用一次
	onShow: function () { },
	//监听页面隐藏 当navigateTo或底部tab切换时调用
	onHide: function () { },
	//监听页面卸载 当redirectTo或navigateBack的时候调用
	onUnload: function () { },
	//监听用户下拉动作 需要在app.json的window选项中或页面配置中开启enablePullDownRefresh
	//当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新
	onPullDownRefresh: function () { },
	//页面上拉触底事件的处理函数
	//可以在app.json的window选项中或页面配置中设置触发距离onReachBottomDistance
	onReachBottom: function () { },
	//用户点击右上角转发(当此函数定义后出现)
	onShareAppMessage: function () {
		return {
			title: '自定义转发标题',
			path: '/page/user?id=123'
		}
	},
	//页面滚动触发事件的处理函数
	onPageScroll: function (scrollTop) {
		//页面在垂直方向已滚动的距离（单位px）scrollTop type == number
		console.log(scrollTop)
	},
	//当前是 tab 页时，点击 tab 时触发
	onTabItemTap: function () { },
	//开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问
	any: 'other Data'
})
//获取当前页面路由路径
Page.route
//定义在原型上的方法
Page.prototype = {
	setData,
	selectAllComponents,
	selectComponent,
	triggerEvent,
	replaceDataOnPath,
	mergeDataOnPath,
	hasBehavior,
	getRelationNodes,
	createSelectorQuery,
	applyDataUpdates,
}
