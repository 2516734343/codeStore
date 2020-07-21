/**
 * 防抖：在规定时间内未触发事件，第二次则执行函数
 * @param wait
 * @param fn
 */
function debounce(wait,fn) {
    let timer = null;
    return function () {
        const con = this;
        const arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(con,arg);
        },wait)
    }
}

function fn () {
    console.log('防抖')
}
addEventListener('scroll', debounce(fn, 1000))
