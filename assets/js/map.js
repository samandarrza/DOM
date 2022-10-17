let array = [2,4,5];

function mymap(myfunction,array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(myfunction(array[i]))    
    }
    return newArray;
}

let newArr = mymap(x=>x*2,array);
console.log(newArr);