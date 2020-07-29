function bind(obj) {
    var self = this;
    var args =[...arguments].splice(1);
    return function () {
        Fn = function(){};
        return self.apply(this instanceof Fn ? this : obj || window,[...arguments].concat(args));
    }
}
