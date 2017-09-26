
/**
 * @method RandomNumber 获取范围内随机整数[默认:0 - 100]
 * @param minNum 起始值
 * @param maxNum 结束值
 * @return {number} 整数
 */
const RandomNumber = (minNum = 0,maxNum = 100) => {
	return parseInt( (Math.random()*(maxNum-minNum+1)+minNum).toString(), 10)
}

/**
 * @method Cutstr 字符串截取
 * @param str 被操作字符串
 * @param len 被截取的长度
 * @param flag 是否返回拼接后的长度
 * @return {number} 返回截取拼接后的字符串
 */
const Cutstr = (str, len = 0,flag = false) => {
    return flag?  str.substr(0,(len-'...'.length)) + '...' : str.substr(0,len) +　'...'
}

//重写trim 清除空格
const ResetTrim = () => {
	String.prototype.trim = function() {
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
 
    if(year < curYear){
        timeStr = year +'年'+ month +'月'+ day +'日 '+ hour +':'+ minute;
    }else{
        var pastTime = curDate - date,
            pastH = pastTime/3600000;
 
        if(pastH > curHour){
              timeStr = month +'月'+ day +'日 '+ hour +':'+ minute;
        }else if(pastH >= 1){
              timeStr = '今天 ' + hour +':'+ minute +'分';
        }else{
              var pastM = curDate.getMinutes() - minute;
              if(pastM > 1){
                timeStr = pastM +'分钟前';
              }else{
                timeStr = '刚刚';
              }
        }
    }
    return timeStr;
}

//获取页面中所有网址
const links = document.documentElement.outerHTML.match(/(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/ig).join("\r\n").replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/igm,"");
