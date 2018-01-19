
/**
 * @method RandomNumber 获取范围内随机整数[默认:0 - 100]
 * @param minNum 起始值
 * @param maxNum 结束值
 * @return {number} 整数
 */
const RandomNumber = (minNum = 0, maxNum = 100) => {
    return parseInt((Math.random() * (maxNum - minNum + 1) + minNum).toString(), 10)
}

/**
 * @method Cutstr 字符串截取
 * @param str 被操作字符串
 * @param len 被截取的长度
 * @param flag 是否返回拼接后的长度
 * @return {string} 返回截取拼接后的字符串
 */
const Cutstr = (str, len = 0, flag = false) => {
    return flag ? str.substr(0, (len - '...'.length)) + '...' : str.substr(0, len) + '...'
}

//重写trim 清除空格
const ResetTrim = () => {
    String.prototype.trim = function () {
        var reExtraSpace = /^\s*(.*?)\s+$/;
        return this.replace(reExtraSpace, "$1")
    }
}

//HTML标签转义
const HtmlEncode = (text) => {
    return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>')
}

//判断String是否为网址
const IsURL = (strUrl) => {
    let regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
    return regular.test(strUrl)
}

/**
 * @method FormatCss 格式化css样式
 * @param str 被操作字符串
 * @return {string} 返回格式化后的字符串
 */
const FormatCss = (str) => {
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1")
    s = s.replace(/;\s*;/g, ";")
    s = s.replace(/\,[\s\.\#\d]*{/g, "{")
    s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2")
    s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2")
    s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2")
    return s;
}

/*
1、< 60s, 显示为“刚刚”
2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
*/
const TimeFormat = (time) => {
    var date = new Date(time),
        curDate = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 10,
        day = date.getDate(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        curYear = curDate.getFullYear(),
        curHour = curDate.getHours(),
        timeStr;

    if (year < curYear) {
        timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;
    } else {
        var pastTime = curDate - date,
            pastH = pastTime / 3600000;

        if (pastH > curHour) {
            timeStr = month + '月' + day + '日 ' + hour + ':' + minute;
        } else if (pastH >= 1) {
            timeStr = '今天 ' + hour + ':' + minute + '分';
        } else {
            var pastM = curDate.getMinutes() - minute;
            if (pastM > 1) {
                timeStr = pastM + '分钟前';
            } else {
                timeStr = '刚刚';
            }
        }
    }
    return timeStr;
}

//获取页面中所有网址
const links = document.documentElement.outerHTML.match(/(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/ig).join("\r\n").replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/igm, "");

//常用正则
URL = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/
Emeal = /\w+[@]{1}\w+[.]\w+/
IP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

//微信清除缓存
//退出登录 关闭应用程序 ok

// IOS 默认播放暂停按钮隐藏
'css'
    `video::-webkit-media-controls-start-playback-button {
    display: none;
}`

    // IOS 微信禁止自动全屏播放
    `video 添加属性
webkit-playsinline="true"
playsinline="true" 
x5-video-player-type="h5"`

/**
 * @method getQueryString   获取url参数
 * @param {string}  url
 * @param {string}  key
 */
const getUrlQueryString = (url, key) => {
    let qulist = url.match(new RegExp("[^\?&]*" + key + "=+[^&]*"))
    return qulist ? qulist[0].split('=')[1] : null
}

//判断横屏竖屏
const checkOrientationChange = (func) => {
    const event = "onorientationchangee" in window ? 'orientationchangee' : 'resize'
    window.addEventListener(event, () => {
        if (event == 'orientationchangee') {
            if (window.orientation == 180 || window.orientation == 0) func('cross')
            else if (window.orientation == 90 || window.orientation == -90) func('vertical')
        } else {
            const width = document.documentElement.clientWidth
            const height = document.documentElement.clientHeight
            width < height ? func('cross') : func('vertical')
        }
    }, false)
}
//--------------------------------------------------------------------------------------
//js编码解码
//适用于url
encodeURI()
decodeURI()
//适用于url中的组件组件参数之类
encodeURIComponent()
decodeURIComponent()
//适用于字符串
escape()
unescape()

//解码base64
window.atob(encodedData)
//加密base64 将ascii字符串或二进制数据转换成一个base64,不能直接作用于Unicode (相当于中文吧)
window.btoa(stringToEncode)
//解决以上问题的方法
decodeURIComponent(escape(window.atob(str)));
window.btoa(unescape(encodeURIComponent(str)));
//译者注:在js引擎内部,encodeURIComponent(str)相当于escape(unicodeToUTF8(str))
//所以可以推导出unicodeToUTF8(str)等同于unescape(encodeURIComponent(str))
//--------------------------------------------------------------------------------------
//跨域的时候获取不到服务器返回response自定义头 需开启withCredentials为true
//此时服务器Access-Control-Allow-Origin 不能为* 需为指定域名
//此时服务器Access-Control-Allow-Credentials 需为true
//--------------------------------------------------------------------------------------

//FileReader 前端浏览器读取文件
//var instance = new FileReader()
//instance.abort() 中断读取
// 参数:none
//instance.readAsBinaryString() 读取文件为二进制
// 参数:file
//instance.readAsDataURL() 读取文件为DataURL
// 参数:file
//instance.readAsText() 读取文件为文本
// 参数:file 编码方式   默认为utf8

//无论读取成功或失败,结果存储在 result属性

//事件列表
// onabort 中断时触发
// onerror	出错时触发
// onload	文件读取成功完成时触发
// onloadend	读取完成触发，无论成功或失败
// onloadstart	读取开始时触发
// onprogress	读取中

//对二进制流的处理
const URL = window.URL || window.webkitURL
imgs = URL.createObjectURL(steam) //转换为浏览器可识别
//同样的FileReader实例的readAsDataURL也可做到

//绘制canvas图形 截图
canvas.getContext('2d').drawImage(video, 0, 0, 400, 300);
//把canvas图像转为img图片
img.src = canvas.toDataURL("image/png");

//创建二进制对象
//旧方法
var builder = new BolbBuilder();
builder.append("Hello World!");
var blob = builder.getBlob("text/plain");
//新方法
var blob = new Blob(["Hello World!"], { type: "text/plain" });

//项目
//纯K 客服系统
//好唱app 内嵌商城
//好唱party Pc端
//好唱app内嵌投票系统
//好唱party视频宣传页面

//关于父元素定位 top:50%失效的问题 老版本浏览器父元素使用top,left,right,bottom 设置为0后还需要设置height为100%

//图片预加载
//img = new Image()
//img.src = url
// if (img.complete) {

// } else { 
//     img.onload = function () { 
//         img.onload = null
//     }
// }