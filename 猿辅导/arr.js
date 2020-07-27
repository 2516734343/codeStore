/**
猿辅导老师在直播课上和同学们做游戏，让同学们在聊天区报自己的学号，每报一次可以获得一个礼物。但是老师不给报数次数超过了一定的次数的同学发礼物。
现在请你来帮助老师把聊天区的报数数列处理一下。
规定，当发现某个数大于 m 次时，则认定为报数过多，我们需要得到去除这些学生的报数后的报数数列。

输入描述:

    第一行：两个数，学生报数总个数n，和允许的最大重复次数 m，以空格分隔
第二行：n个整数，表示学生所有报数数列，以空格分隔，范围是-2147483648~2147483647

输出描述:

    只有一行，去除超出m次的报数数字后的报数数列，该数列不改变原报数顺序，数列以空格分隔

 */
function splitArr(m,n,arr){
    var obj = {},arr1 = [];
    for(let i=0;i< m;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    // console.log(obj);
    for(let key in obj){
        if(obj[key] <= n){
            arr1.push(key);
        }
        if(obj[key] === n){
            arr1.push(key);
        }
    }
    return arr1;
}
var m = 6,n=3,arr= [1 ,2 ,2 ,2 ,2 ,2];
console.log(splitArr(m,n,arr));
