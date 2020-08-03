function deepClone(target) {
    var result;
    if(target === null) return result = null;
    result  = target instanceof Array ? [] : {};
        for(let props in target) {
            if(target.hasOwnProperty(props)){
                result[props] = typeof target[props] === 'object' ? deepClone(target[props]) : target[props];
            }

        }
    return result;
}
const oldObj = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: {h: {i: 2}},
    sum : function () {
        console.log(this.a);
    }
};
const newObj = deepClone(oldObj);
newObj.c.h.i = 3;
console.log(oldObj.c);
console.log(newObj.c);
// 方法二
const news = JSON.parse(JSON.stringify(oldObj));
newObj.c.h.i = 3;
console.log(oldObj.sum());
console.log(newObj.sum());
