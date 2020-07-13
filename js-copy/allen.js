    // 浅拷贝
    var a = [0,1,2,3,4];
    var b = a;
    console.log(a === b);
    a[0] = 11;
    console.log(a,b);
    // 深拷贝1
    var c = [0,1,2,3,4];
    var d=JSON.parse(JSON.stringify(c));
    c[0] = 11;
    console.log(c,d)
    // 深拷贝2
    var obj1 = {
        a:{
            b:1
        },
        c:1
    };
    var obj2 = {};
    obj2.a = {};
    obj2.c = obj1.c;
    obj2.a.b = obj1.a.b;
    console.log(obj1); //{a:{b:1},c:1};
    console.log(obj2); //{a:{b:1},c:1};
    obj2.a.b = 2;
    console.log(obj1); //{a:{b:2},c:1};
    console.log(obj2); //{a:{b:1},c:1};

