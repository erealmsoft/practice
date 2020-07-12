// deepCopy = (obj) => {
//     let result;
     
//     if(Object.prototype.toString.call(obj) == '[object Array]') {
//         result = [];

//         for(let i= 0; i < obj.length; i++) {
//             result[i] = deepCopy(obj[i])
//         }
//     } else if (Object.prototype.toString.call(obj) == '[object Object]') {
//         for(let j in obj) {
//             result[j] = deepCopy(obj[j])
//         }
//     } else {
//         return obj
//     }

//     return result
// }


const obj1 = {
    name: 'ada',
    'age': {
        'number': 18
    },
    'numbers': [1, 58]
}

deepClone = (obj) => {
    let result = obj instanceof Array ? []: {}
    for( let i in obj) {
        if(obj.hasOwnProperty(i)) {
            result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
        }
    }

    return result
}

const copyObj = deepClone(obj1)

obj1.name = 'where you are'
console.log(copyObj, '=====')
console.log(obj1, '=====')