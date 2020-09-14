var obj1 = {name: 'A'};
var obj2 = obj1;
obj2.name = 'B';
console.log(obj1.name); //b

function f(obj) {
    obj.name = 'C';
}

f(obj1);
console.log(obj2.name); // c
var a = 3;

function fn(a) {
    a = a + 1;
}

console.log(a); // 3
