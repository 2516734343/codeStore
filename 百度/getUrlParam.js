// 获取url里的参数，比如www.baidu.com?a=1&b=2&c=123
function getUrlParams(url) {
    var temp = url.split('?');
    var str = temp[1];
    var str1 = str.split('&');
    var obj = {};
    for (let i=0;i<str1.length;i++){
        var tmp = str1[i].split('=');
        obj[tmp[0]] = tmp[1];
    }
    return obj;
}
let url = 'www.baidu.com?a=1&b=2&c=123';
console.log(getUrlParams(url));
