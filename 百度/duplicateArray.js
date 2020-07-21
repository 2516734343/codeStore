/**
 * 数组去重 方法一：利用对象健的唯一性
 */
function obj(arr) {
    var obj = {},arr1 = [];
    for (let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            arr1.push(arr[i]);
            obj[arr[i]] = 1;
        } else {
            arr.splice(i,1);
        }
    }
    return arr1;
}

/**
 * 数组去重 方法二：利用indexOf
 * @param arr
 */
function indexOf(arr) {
    var arr1 = [];
    for (let i=0;i<arr.length;i++){
        if(arr1.indexOf(arr[i]) === -1) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

/**
 * 数组去重 方法三：利用set
 */
function set(arr) {
    return Array.from(new Set(arr));
}

/**
 * 数组去重 方法四：利用filter 当前元素在原始数组中的第一个索引是当前索引
 */
function filter(arr) {
    return arr.filter(function (item,index,arr) {
        return arr.indexOf(item,0) === index;
    })
}

/**
 * 数组去重 方法五：利用includes
 */
function includes(arr) {
    var arr1 = [];
    for (let i=0;i<arr.length;i++) {
        if(!arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

