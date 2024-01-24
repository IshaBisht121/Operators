Array
// Array=Array is a collection of items.array is object type

// example:-
let arr=[1,2,3,4,5,6,7,8];
console.log(arr);
console.log(arr.length);

// program of Array
let fruits=["Apple","Mango","Orange","Banana"]
fruits.push("grapes");
fruits.pop();
fruits.shift()
fruits.unshift("jackfruits")
console.log(fruits)

// using loops itteration of array
let name=["isha","nisha","payal","ishika"]
for(i=0;i<name.length;i++){
    console.log(name[i])
}

//  iterate using for each loop
name.forEach(function(name) {
    console.log(name);
  });
  