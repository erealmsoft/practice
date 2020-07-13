    // 浅拷贝
    var a = [0,1,2,3,4];
    var b = a;
    console.log(a === b);
    a[0] = 11;
    console.log(a,b);
    // 深拷贝
    var c = [0,1,2,3,4];
    var d=JSON.parse(JSON.stringify(c));
    c[0] = 11;
    console.log(c,d)