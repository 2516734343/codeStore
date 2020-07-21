/**
 * 节流：当达到一定的事件才触发
 * @param wait
 * @param fn
 */
function throttle(wait,fn) {
    let prev = Date.now();
    return function () {
        const con = this;
        const arg = arguments;
        let now = Date.now();
        if(now - prev >= wait) {
            fn.apply(con,arg);
            prev = Date.now();
        }
    }
}
function fn () {
    console.log('节流')
}
addEventListener('scroll', throttle(fn, 1000))
