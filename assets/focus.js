// 参考链接: http://www.ituring.com.cn/article/498162
const compatMobileKeyboard = (action) => {
	const u = navigator.userAgent
	const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
	const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
	const isiOS9 = isiOS && u.indexOf('OS 9_') > -1
	const isVivo = u.indexOf('VivoBrowser') > -1
	const isUC = u.indexOf('UCBrowser') > -1

	const windowInnerHeight = window.innerHeight

	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resoleve(window.innerHeight)
		}, 300)
	})

	promise.then((newWindowInnerHeight) => {
		// 在移动端会弹出键盘
		// focus/blur 时如果 window.innerHeight (视窗高度)
		// 有明显的变化 (大于 200 暂定阀值 200 因为 iOS 页面有最大化功能)
		// 说明视窗高度正常
		// 否则会存在键盘遮挡内容的问题

		// 视窗高度正常
		if (Math.abs(newWindowInnerHeight - windowInnerHeight) > 200) {

			//手动滚动到底部
			if (isVivo) {
				window.scrollTo(0, document.body.clientHeight)
			}
		} else {  // 视窗高度错误

			// 需要增加内容高度防止被遮挡
			if (isAndroid) {
				const contentHeight = document.body.clientHeight
				let tmpHeight
				if (action == 'focus') {
					tmpHeight = contentHeight + 250
				} else {
					tmpHeight = contentHeight - 250
				}

				document.body.style.height = `${tmpHeight}px`
				window.scrollTo(0, document.body.clientHeight)
			}

			// iOS9 只需手动滚动到底部
			if (isiOS9) {
				window.scrollTo(0, document.body.clientHeight)
			}
		}

	})
}
export default compatMobileKeyboard