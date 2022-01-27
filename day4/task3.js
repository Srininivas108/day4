//TASK-3
//Write a loop that makes seven calls to console.log to output the following triangle:
//#
//##
//###
//####
let n=5;
for(i=1;i<=n;i++){
    var s='';
    for(j=1;j<=i;j++){
        s+='#'
    }
    console.log(s);
}

//Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"]
for(let i=0;i<strArray.length;i++){
    console.log(strArray[i]);
}

//write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55];
let c=0;
for(i=0;i<myarray.length;i++){
    c++;
}
console.log(c);

//Create an array called foods holds the names of your top 10 favorite foods, starting with the best food.
let foods=['biryani','sambar','parota','fish','aleem','sweet potatoes','oatmeal','broccoil','wild salmon'];
//How can you find your fifth favorite food?
console.log(foods[4]);
console.log(foods.length);


//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];
    function dataHandling(input){
        for (var i = 0; i < input.length; i++) {
             if(friends[i]=== 'Mari'){
                 friends[i]='Munnabai'
             }
        
        }
        }
        dataHandling(friends);

//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
            
            if(friends[i] === 'CaptianAmerica'){
                break;
            }
            console.log(friends[i]);
    }
    }
    dataHandling(friends);

    //Find the person is ur friend or not.
const friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];
    function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if(friends[i]===name){
            return true
        }
    
    }
    }
    let found = dataHandling(friends,'jeff');
    console.log(found);

    //We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
    var friends1 = [
        'Mari',
        'MaryJane',
        'CaptianAmerica',
        'Munnabai',
        'Jeff',
        'AAK chandran'
        ];
        var friends2 = [
        'Gabbar',
        'Rajinikanth',
        'Mass',
    'Spiderman',
        'Jeff',
        'ET'
        ];
        function dataHandling(a,b){
        
            return a.concat(b).sort();
        
        }
        var a=dataHandling(friends1,friends2);
        console.log(dataHandling(a);
 //Get the first item, the middle item and the last item of the array
 console.log(a[0],a[a.length-1],a[Math.floor(a.length/2)]);
//Add your name to the end of the friends array, and add another name to beginning.
a.push='bobby';
 a.unshift('arya');
 // Add Mr or Ms to the names in the friends array.
var b= a.map(ele=> 'Mr'+' '+ele);
console.log(b);
// Concat all the names the friends array and return as comma “,” seperated string.
let c='';
for(i=0;i<a.length;i++){
    c+= a+','
}
console.log(c);
//Find the friends names who has letter ‘a’ and return the list.
var y=[];
for(let i=0;i<a.length;i++){
    var s=a[i];
    for(let j=0;j<s.length;j++){
        if(s[j]=== 'a'){
           y.push(a[i]);
           break;
        }
    }
}
console.log(y)

//Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let sum=0;
for(i=0;i<a.length;i++){
    sum+= a[i].length
}
console.log(sum/a.length);
// Find the names and return the list starting with letter M.
var y=[];
for(let i=0;i<a.length;i++){
    var s=a[i];
    for(let j=0;j<s.length;j++){
        if(s[j]=== 'M'){
           y.push(a[i]);
           break;
        }
    }
}
console.log(y)
//Find the name with max characters and return the name.
let max=a[0].length;
for(i=1;i<a.length;i++){
    let y= a[i].length
    max=Math.max(max,y);
}
console.log(max);
a.filter((ele)=> ele.length=== max).map((ele)=>console.log(ele));

   //Find the name with min characters and return the name.
   let min=a[0].length;
   for(i=1;i<a.length;i++){
       let y= a[i].length
       min=Math.min(min,y);
   }
   console.log(min);
   a.filter((ele)=> ele.length=== min).map((ele)=>console.log(ele));
   
   //Find the average in the array below.Make sure you add only the numbers and do avg.
   const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let r= friendsInfo.filter((ele)=> typeof(ele)==='number');
console.log((r.reduce((a,b)=> a+b))/r.length);

//Print the contents of the input variable
var input = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
    ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
    ]
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
   console.log(input[i]);
    }
    }
    dataHandling(input);

    //What the output
    myobject = {1:one,'11':1,'name':'arun'}
console.log(myobject.11); //here key in objects cannnot be a non-string 
console.log(myobject.name); //you get an error

  //Add a new key value pair to myobject
//key : ten
//value : ten
myobject = {"1":"one",'11':"1",'name':'arun'};
myobject['ten']='ten';
console.log(myobject);

//Write out an object literal to represent the data below.
//Guvi, Geek, 6, IIT-M RP,Chennai.
let myobj={"firstname":"guvi","lastname":"geek","streetno":6 ,"landmark":"IIT-M", "city":"Chennai"};

//How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
//Guvi, Geek, 6, IIT-M RP,Chennai.
//Amazon, Inc, 31, SP Infocity, Chennai.
//Google, Alphabet, 34 Amphitheater Parkway, MountainView.
//Tesla, Inc , 32, 333 Santana Row,San Jose.

let myarry=[{
    companyfname: 'Guvi',
    comapanyLname : 'Geek',
    steert: 6,
    landmark: 'IIT-M RP',
    City : 'chennai' 
      },
    {
       companyfname: 'Amazon',
       companyLname: 'Inc',
       address: ' SP Infocity',
       city: 'chennai'
    },
    {
        companyfname: 'Tesla',
        companyLname: 'Inc',
        address: [32,'333 Santana Row'],
        city: 'San Jose'
    }


]