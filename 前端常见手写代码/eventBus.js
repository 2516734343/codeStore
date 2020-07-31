class EventBus{
    constructor() {
       this.event = this.event || new Map();
    }
    //监听
    on(type,fn){
        if(!this.event.get(type)){
            this.event.set(type,fn);
        }
    }
    //触发
    emit(type){
        let handle = this.event.get(type);
        handle.apply(this,[...arguments].splice(1));
    }

}

let emitter = new EventBus();
emitter.on('age',(age)=> console.log(age));
emitter.emit('age',18,19,20);

