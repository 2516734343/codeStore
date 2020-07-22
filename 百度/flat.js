// 数组扁平化、去重、排序

var arr = [1,4,6,2,0,[-1,4,2,8],8,10];
// 方法一：直接调用api
const arr1 = Array.from(new Set(arr.flat(Infinity))).sort((a,b) => a-b) ;
// console.log(arr1);

/**
 * 方法二
 * @param arr
 * @returns {[]}
 */
function flat(arr) {
    var result = [];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
const arr2 = Array.from(new Set(flat(arr))).sort((a,b) => a-b) ;
console.log(arr2);
/**
 * 扁平化方法三:利用reduce
 */
function flatten(arr){
   return arr.reduce((prev,cur) => {
        return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
    },[])
}
console.log(flat(arr));

