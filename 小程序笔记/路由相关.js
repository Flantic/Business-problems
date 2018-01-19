//用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面。
getCurrentPages()
//组件可以指定跳转方式
//<navigator open-type="navigateTo"/>

//打开新页面
wx.navigateTo({
	url: '',
	success: function () { },
	fail: function () { },
	complete: function () { }
})
//页面重定向 配置同上
wx.redirectTo()
//先重置后跳转 配置同上 可跳转任意路径(可忽略Tab页跳转限制,但还是不能带参数)
wx.reLaunch()
//切换tab页 配置同上 tab页只允许此API跳转（需在 app.json 的 tabBar 字段定义的页面），且路径后不能带参数
wx.switchTab()
//页面返回
wx.navigateBack({
	//指定返回几层
	delta: 2
}) 
