function promiseAll(promises) {
    if(!Array.isArray(promises)){
        throw new Error('promises is not  array')
    }
    return new Promise(function (resolve,reject) {
        let resolveCount = 0;
        let len = promises.length;
        let resolveValues = new Array(len+1);
       for (let i=0;i<len;i++){
           Promise.resolve(promises[i]).then(function(value) {
               resolveValues[i] = value;
               resolveCount++;
               if(resolveCount === len){
                   return resolve(resolveValues);
               }
           },function (reason) {
                return reject(reason);
           })
       }
    })
}
