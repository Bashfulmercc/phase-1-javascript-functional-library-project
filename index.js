function myEach (collection, alert) {
    let arr = Object.values(collection)
        arr.forEach((item) => {
            alert(item)
    });
    return collection
}

function myMap (collection, callback) {
    let arr = Object.values(collection)
    let newArr = []
    for(let ele of arr){
        newArr.push(callback(ele))
    }    
    return newArr
}

function myReduce (collection,callback, ...acc) {
    let arr = Object.values(collection)
    let newAcc;
    let i;
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }

    for(i; i < arr.length; i++) {
        newAcc = callback(newAcc, arr[i], collection)
    }
    return newAcc
}

function myFind (collection, predicate) {
    let arr = Object.values(collection)
    for(let val of arr) {
         if(predicate(val) === true) {
            return val
        }
    }
}

function myFilter (collection, predicate) {
    let arr = Object.values(collection)
    let newArr = []
    for(let val of arr){
        if(predicate(val) === true) {
            newArr.push(val)
        }
    }
    return newArr
}

function mySize (collection) {
    let arr = Object.values(collection)
    return arr.length
}

function myFirst (array, n = 1) {
    let arr = Object.values(array)
    if(n === 1){
        return arr[0]
    }else {
        return arr.slice(0, n)
    }
}

function myLast (array, n = 1) {
    let arr = Object.values(array)
    if(n === 1){
        return arr.slice(-1)[0]
    }else {
        return arr.slice(-n)
    }
}

function myKeys (object) {
    let newObj = Object.keys(object)
    return newObj
}

function myValues(object) {
    let newObj = Object.values(object)
    return newObj
}