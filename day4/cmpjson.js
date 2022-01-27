const obj1 = { name: "Person 1", age:5 };
const obj2 = { age:5 ,name: "Person 1"};
var keys1=Object.keys(obj1);  //return array of keys
var keys2=Object.keys(obj2);
                                  //every() return boolen 
console.log(keys1.length === keys2.length && keys1.every(key=>obj1[key]==obj2[key]));