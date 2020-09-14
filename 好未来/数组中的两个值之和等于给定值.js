function sum(arr, target){//一层循环解决
    for (let i = 0; i < arr.length; i++) {
        let idx = arr.indexOf(target-arr[i])
        if( idx> -1){
            return [i, idx];
        } else {
            return -1;
        }
    }
}
let arr = [1,3,2,0,9,11,6];
console.log(sum(arr,12));