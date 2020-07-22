/**
取2个数组的交集并且不去重
case 1:
const arr0 = [1, 3, 2, 4]
const arr0 = [3, 5, 2, 2, 10]
 */
function intersection(arr1,arr2) {
    var arrs =[];
       arrs = arr1.filter(item => arr2.includes(item))
    return arrs;
}
const arr1 = [1, 3, 2, 2,4];
const arr2 = [3, 5, 2, 2, 10];
console.log(intersection(arr1,arr2));
