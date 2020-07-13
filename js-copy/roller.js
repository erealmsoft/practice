var arr = [1,2,3,4];
console.log('源数组',arr);

//浅拷贝
function shallowCopy(arr){
    var newArr = [];
    return newArr = arr;
}

var afterShallowCopyArr = shallowCopy(arr);
//修改源数组的值
arr[1] = 8;
console.log('数组被修改了',arr);
console.log('copy过后的数组',afterShallowCopyArr);

console.log('--------------------------');

//深拷贝
var arr2 = [1,2,3,4,5];
console.log('源数组',arr2);
function deepCopy(arr){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

var afterDeepCopyArr = deepCopy(arr2);
//修改源数组的值
arr2[3] = 9;
console.log('源数组被修改了',arr2);
console.log('copy过后的数组',afterDeepCopyArr);
