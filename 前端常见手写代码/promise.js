class Promise {
    constructor(fn) {
        this.state = 'pending';
        this.value = undefined;

        let result = function (value) {
            if(this.state === 'pending'){
                this.value = value;
            }
        };
        let reject = function(value){
            if(this.state === 'pending'){
                this.value = value;
            }
        };
        try{
            fn(result,reject);
        }catch(e){
            reject(e);
        }
    }

    then(onResulted,onRejected){
        switch (status) {
            case 'fulfilled': onResulted(this.value);
                break;
            case 'rejected': onRejected(this.value);
                break;
            default:
        }
    }

}
