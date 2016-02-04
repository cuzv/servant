/*
 * Created by Moch Xiao on 2/3/2016.
 * Copyright (c) 2016. Moch Xiao (https://github.com/cuzv).
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

//alert('Hello, world');

var arr = ["1", 22, "333"];
console.log(arr);

//alert(`多行
//字符串
//测试`);

arr = [1, 2]
arr.push('!', "B")
console.log(arr);
pop = arr.pop();
console.log(pop);
console.log(arr);

arr = ["b", "a", "c"]
console.log(arr);
arr.sort()
console.log(arr);
arr.sort(function(a, b) {
    return a < b;
});
console.log(arr)

arr = ['one', 'two', 'three']
console.log(arr)
arr.reverse()
console.log(arr)

arr = ["Apple", "Microsoft", "Yahoo", "Facebook", "Aol", "Twitter"]
console.log(arr)
arr.splice(2, 3, "Google", "line")
console.log(arr);
arr.splice(2, 0, "Oracle", "Amzone");
console.log(arr);
arr.splice(2, 2);
console.log(arr);

newArr = ["1", "2", "3"];
arr = arr.concat(newArr);
console.log(arr);

var join = arr.join("-");
console.log(join);


arr = [[1, 2, 3], ["A", "B", "C"], "-"];
console.log(arr);

var value = arr[1][1];
console.log("arr[1][1]: " + value);


var xiaoming = {
    name: "小明",
    birth: 1990,
    "middle-school": "No. 1 middle school",
    height: 1.70,
    weight: 65,
    score: null
};
console.log(xiaoming.name);
console.log(xiaoming["middle-school"]);
console.log("name" in xiaoming);
console.log("toString" in xiaoming);

console.log(xiaoming.hasOwnProperty('name'));
console.log(xiaoming.hasOwnProperty('toString'));

var xiaoming_desc = descriptObject(xiaoming);
console.log(xiaoming_desc);

function descriptObject(obj) {
    var arr = [];
    for (var property in obj) {
        arr.push(property + ": " + obj[property])
    }

    return arr.join(",\n" );
}


for (var i = 0; i < 10; i++) {
    console.log(i);
}





'use strict';
var m = new Map();
var s = new Set();
console.log('浏览器支持 Map 和 Set！');


var map = new Map(
    [
        ["Micheal", 100],
        ["Lucy", 90],
        ["Lily", 98]
    ]
);
console.log(map)
console.log(map.get("Micheal"))

var set = new Set([
    22,
    22,
    33,
    44,
    55
]);
console.log(set);


for (var x of arr) {
    console.log(x);
}

for (var x of set) {
    console.log(x);
}

for (var x of map) {
    console.log(x[0] + ": " + x[1]);
}


var abs = function(x) {
    if(typeof x !== 'number') {
        throw "Not a number.";
    }

    if (x >= 0) {
        return x;
    }
    else {
        return -x;
    }
};

var x = -199;
console.log(abs(x));
//console.log(abs());
console.log(abs);
//console.log(abs("qqq"));


var xiaoli = {
    name: "小李",
    birth: 1990,
    age: function() {
        var that = this
        var year = new Date().getFullYear()
        return year - that.birth
    }
}
console.log(xiaoli.age())


arr = [1, 2, 3, 4, 5, 6, 7 ,8, 9]
arr = arr.map(String)
console.log(arr)

var str = arr.reduce(function(x, y) {
    return x + y
})
console.log(str)

arr = [1, 2, 3, 4, 5, 6, 7 ,8, 9]
res = arr.reduce(function(x, y) {
    return x * y
})
console.log(res)



function string2int(str) {
    return str * 1;
}

// Test
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}


function count() {
    var arr = []
    for (var i = 0; i < 3; i++) {
        arr.push((function(n) {
            return function () {
                return n * n
            }
        })(i))
    }

    return arr
}

var results = count()
var f1 = results[0]
var f2 = results[1]
var f3 = results[2]

console.log(f1())
console.log(f2())
console.log(f3())


var fn = x => {
    if (x > 0) {
        return x * x
    }
    else {
        return - x * x
    }
}

console.log(fn(-10))

var v = ((x, y) => x * x + y * y)(10, 3)
console.log(v)

function* fib(max) {
    var t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a
        t = a + b
        a = b
        b = t
        t = a
        n++
    }

    return a
}

var f = fib(6)
console.log(f)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)
console.log(f.next().value)

for (var x of fib(6)) {
    console.log(x)
}

console.log(typeof 1)
console.log(typeof NaN)
console.log(typeof "str")
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof Math.abs)
console.log(typeof [])
console.log(typeof {})

var n = new Number(123)
console.log(typeof n)
console.log(n === 123)

var n = Number('123')
console.log(typeof n)


var ming = JSON.stringify(xiaoming, null, ' ')
console.log(ming)

ming = JSON.stringify(xiaoming, ["name", "birth", "weight"], ' ')
console.log(ming)

var json = '{"name": "Lucy", "age": 22,"height": 170,"weight": 45}'
var obj = JSON.parse(json)
console.log(obj)












