function myNew() {
    let obj = {};//创建一个新对象
    let constructor = [].shift().call(arguments);
    obj__proto__= constructor.prototype;//连接到原型
    let result = constructor.apply(obj,arguments);//绑定this值
    return typeof result === 'object' ? result: obj;//返回新对象
}
