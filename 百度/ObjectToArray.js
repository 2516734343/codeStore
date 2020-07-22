/**将数组对象转化为对象
输入 const arr = [{name:"zhao",age:20},{name:"qian", age:30}];
用reduce 进行数据转换 输出：
{ zhao: { name: ‘zhao’, age: 20 }, qian: { name: ‘qian’, age: 30 } }
 */
const arr = [{name:"zhao",age:20},{name:"qian", age:30}];
let result = arr.reduce((prev,cur) => {
    prev[cur.name] = cur;
    return prev;
},{});
// 打印出结果---遍历对象
//方法一
Object.keys(result).forEach(key => {
    console.log(key,result[key]);
})
// 方法二
for(let key in result) {
    console.log(key,result[key]);
}
