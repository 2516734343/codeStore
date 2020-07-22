// 手写一个函数把aaa-bbb-ccc转换成aaaBbbCcc，多种写法

function trans(str) {
    var arr = str.split(''), str1 = '';
   for (let i=0;i<arr.length;i++){
       if(arr[i] === '-'){
           arr.splice(i,1);
           str1 += arr[i+1].toUpperCase();
       } else {
           str1 += arr[i];
       }
   }
   return str1;
}
console.log(trans('aaa-bbb-ccc'));
