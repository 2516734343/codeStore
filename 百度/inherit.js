// js实现继承
/**
 * 圣杯模式
 */
function inherit(target,origin) {
    function F(){};//构造函数
    F.prototype = origin.prototype;
    target.prototype = new F();// 儿子等于构造函数new 的实例
    target.prototype.constructor = target;// 构造函数归位
}
