function myEach(collection, callback)
{
    const arr = (collection instanceof Array)? collection: Object.values(collection)
    arr.forEach(a => callback(a))

    
    return collection;
}

function myMap(collection, callback){
    const arr = (collection instanceof Array)? collection: Object.values(collection)
    const mod = [];
    arr.forEach(a => mod.push(callback(a)))
    
    return mod;
}

function myReduce(collection, callback, acc){
    let i = 0;
    let total = 0
    const arr = (collection instanceof Array)? collection: Object.values(collection)
    if (typeof(acc) != "number")
    {
        total = arr[0];
        i++;
    }
    else{
        total = acc;
    }
        
    while(i < arr.length){
        total = callback(total, arr[i], arr);

        i++;
    }
    return total;
}


function myFind(collection, predicate){
    const arr = (collection instanceof Array)? collection: Object.values(collection)
    for (let i = 0; i < arr.length; ++i)
    {
        if (predicate(arr[i]) === true)
            return arr[i];
    }
}

function myFilter(collection, predicate){
    const filtered = [];
    const arr = (collection instanceof Array)? collection: Object.values(collection)
    arr.forEach(a => {
        if (predicate(a))
            filtered.push(a);
    })

    return filtered;
}

function mySize(collection){
    const arr = (collection instanceof Array)? collection: Object.values(collection);
    return arr.length;
}

function myFirst(array, n){
    if(typeof(n) != "number")
        return array[0];

    return array.slice(0,n);
}

function myLast(array, n){
    if(typeof(n) != "number")
        return array[array.length-1];

    return array.slice(-n);
}

function myKeys(object){
    return Object.keys(object);
}

function myValues(object){
    return Object.values(object);
}