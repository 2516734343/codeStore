class EventBus{
    constructor() {
       this.event = {};
    }
    // 发布
    emit(type,...args){
        this.event[type] = args;
    }
    //订阅
    addListener(type,fn){
        fn(...(this.event[type]));
    }

}

let emitter = new EventBus();
emitter.emit('age',18,19,20);
emitter.addListener('age',(age)=> console.log(age))

