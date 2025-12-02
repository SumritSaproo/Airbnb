
console.log("Hello World!");

// Callbacks 

//  function greet(name,callback){
//    console.log("Start");
//    setTimeout(() => {
//        console.log("Asynchronous code executed");
//        if(name!==null){
//        callback(null,name);}
//        else{
//         callback(new Error("Something Went Wrong!.."));
//        }
//    }, 3000);

//  }

//  function msg(error,name){
//     if(error){
//         console.error("Sorry, Name not found!...");
//         return;
//     }
//     console.log("Good Evening.."+name);
//  }

//  greet(null,msg);

//  console.log("End");



// Callback Hell

//  function greet(name,callback){
//     console.log("Start");
//     setTimeout(() => {
//         console.log("Asynchronous code executed");
//         if(name!==null){
//         callback(null,name);}
//         else{
//          //callback(new Error("Something Went Wrong!.."));
//          callback(null,name);
//         }
//     }, 3000);

//   }

//   function msg(error,name){
//      if(error){
//          console.error("Sorry, Name not found!...");
//          return;
//      }
//      console.log("Good Evening.."+name);
//   }

//   greet(null,msg);

//   console.log("End");





// Pyramid of Doom

// function greet(name, callback) {
//     console.log("Start");
//     setTimeout(() => {
//         console.log("Asynchronous code executed");
//         if (name !== null) {
//             callback(null, name);
//         }
//         else {
//             callback(new Error("Something Went Wrong!.."));
//         }
//     }, 3000);

// }

// greet("Aditya", function (error, name) {
//     if (error) {
//         console.error("Sorry, Name not found!...");
//         return;
//     }
//     console.log("Good Evening.." + name);

//     greet("Rahul", function (error, name) {
//         if (error) {
//             console.error("Sorry, Name not found!...");
//             return;
//         }
//         console.log("Good Evening.." + name);
//         greet("Shubham", function (error, name) {
//             if (error) {
//                 console.error("Sorry, Name not found!...");
//                 return;
//             }
//             console.log("Good Evening.." + name);
//         });
//     });
// });

// console.log("End");

// Promises

// let p1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("In the Promise1..");
//       resolve(1947);
//     },3000)

// });


// let p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("In the Promise2..");
//       reject(new Error("Promise2 Rejected"));
//     },5000)

// });


// let p3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("In the Promise3..");
//       resolve("Promise3 Completed");
//     },7000)

// });

// //console.log(p1,p2,p3);

// p1.then((value)=>{
//     console.log("Again : ",value)
//     return "Reached to 2nd Then Consumer";
// }).then((value)=>{
//    console.log(value);
// });

// p2.then(null,(error)=>{
//   console.log("Some error Occured in P2");
// });

// p3.then((value)=>{
//    console.log(value);
// }).catch((error)=>{
//   console.log(error);
// }).finally(()=>{
//      console.log("After al finally the Promise 3 is reached to its conclusion.");
// });



// // Attatching Multipe handlers

// p1.then((value)=>{
//   console.log("In this Year , India Got Freedom.");
// });

// p1.then((value)=>{
//     console.log("In the very next Year , Gandhi Died.");
//   });


// // Promise API

// let whenAll=Promise.all([p1,p3]);
// whenAll.then((value)=>{
//     console.log("All 2 Promises resolved.", value);
// });

// let settled=Promise.allSettled([p1,p2,p3]);
// settled.then((value)=>{
//     console.log("Promises Settled : ", value);
// });

// let reso1=Promise.race([p1,p2,p3]);
// reso1.then((value)=>{
//     console.log("Promises resolved first : ", value);
// });

// let set1=Promise.any([p2,p3]);
// set1.then((value)=>{
//     console.log("Promises Settled first : ", value);
// });


// let p=Promise.resolve(true);
// let q=Promise.reject(false);
// console.log(p,q);
// q.catch((value)=>{
//   console.log("The Passed value is :",value);
// });



// Async/Await

// async function func1(){
//     let p1=new Promise((resolve,reject)=>{
//       setTimeout(() => {
//           console.log("Inside Promise 1");
//           resolve("Promise1 Resolved.");
//        },2000)

//     });

//     let p2=new Promise((resolve,reject)=>{
//       setTimeout(() => {
//           console.log("Inside Promise 2");
//           resolve("Promise2 Resolved.");
//        },2000)

//     });


//   let p11=await p1;
//   let p22=await p2;
//    return [p11,p22] ;
// }



// async function myfuncs(){

//    let fun1= await func1();
//    console.log(fun1);




// }

// myfuncs();



// Error Handling - try and catch
// setTimeout(() => {
//    console.log("Inside task1")
// }, 1000)


// try {


//    console.log(errInOutermostTry)


//    setTimeout(() => {
//       try {
//          console.log(Rahul)
//       } catch (error) {
//          console.log(error)
//       }
//    }, 4000)
// }catch(err){
//    console.log(err)
// }

//    setTimeout(() => {
//    console.log("Inside task2")
// }, 2000)

// setTimeout(() => {
//    console.log("Inside task3")
// }, 3000)


// Error Obj and Cusotm Errors
// try{
//   let age=prompt("Enter your Age.");
//   age=Number.parseInt(age);
//   if(age>150){
//    throw new Error("You have probably passed wrong age.")
//   }else{
//    console.log("You Age : ",age)
//   }

// }catch(err){
//   console.log(err.name)
//   console.log(err.message)
// }



// Finally Clause
// function myfunc() {
//   try {
//     // This_is_an_error
//     console.log(34)
//       return;
//   } catch (err) {
//     // This_is_also_an_error
//     console.log(err)
//     return;
//   } finally {
//     console.log("Finally will anyway run.")
//   }
// }

// myfunc();
// console.log("Function Exit.");



//Practice Set
// const main1 = async () => {
//   // const loadScript = async (src) => {
//   //   return new Promise((resolve, reject) => {
//   //     let script = document.createElement("script");
//   //     script.src = src;
//   //     script.onload = () => {
//   //       resolve("Script successfully Loaded..");
//   //     }
//   //     document.head.append(script)
//   //   });

//   // }
//   // let p=loadScript("script2.js");
//   //  p.then((value)=>{
//   //   console.log("This is using 'then' consumer - ",value)
//   // })

//   // let q=await loadScript("script2.js");
//   // console.log("This is using the Async/Await",q)



//   const proReject = async () => {

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Promise Rejected")
//       }, 3000);
//     });
//   }


//   const fun2 = async () => {

//     try {
//       let s = await proReject();
//       console.log(s);
//     } catch (err) {
//       console.log("Your Promise was Rejected - ", err);
//     }


//   }

//   fun2();

// }

// //main1();


// async function main2() {

//   let a = Promise.resolve("Resolved a")
//   let b = Promise.resolve("Resolved b")
//   let c = Promise.resolve("Resolved c");



//   let all = await Promise.all([a, b, c]);
//   console.log("All Promises are Resolved.  -  Promise.all  - ", all);

//   let aa = await a, bb = await b, cc = await c;
//   console.log(aa, bb, cc, " - One by One")

// }

// main2();



// Clock
// let time=document.createElement("h3");
// time.setAttribute("id","time")
// document.body.append(time);

//  time=document.getElementById("time");

//  let date;
//  let mytime;
//  setInterval(() => {
//   date=new Date();
//   mytime=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
//   time.innerText=mytime;


//  }, 1000);


// Fetch API

// let p=fetch("https://goweather.herokuapp.com/weather/Curitiba");
// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);

//     return response.json();
// }).then((value)=>{
//    console.log(value);
// });


// Sending POST request
// const dataSend = async (data) => {

//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(data)
//     }
//     let p =  await fetch("https://jsonplaceholder.typicode.com/posts", options);
//     let response = await p.json();
//     return response;
// }

// const getBody= ()=>{
//   let data={
//     id : 104,
//     name : "Rahul Gupta",
//   }
//   return data;
// }

// const getbyID=async(id)=>{
//     let p =  await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
//     let response = await p.json();
//     return response;
// }

// const main = async()=>{
//     let data=getBody();
//    let response1= await dataSend(data);
//    console.log(response1);

//    let response2= await getbyID(9);
//    console.log(response2);
// }

// main();



// Cookies
// document.cookie= `name1 : Hari`;
// document.cookie= `name2 : Krishna`;
// console.log(document.cookie);
// let key = prompt("Enter your Key");
// let val=prompt("Enter your Value");

// document.cookie=`${encodeURIComponent(key)} = ${encodeURIComponent(val)}`;
// console.log(document.cookie);



// Prototype in JS

// let obj={
//     name : "Hari",
//     age : 20,
//     place : "Vaikuntha"
// };

// console.log(obj);


// let proto1={
//     id : 101
// }

// let proto2={
//     job : "Software Developer"
// }
// obj.__proto__=proto1;
// proto1.__proto__=proto2;

// console.log(obj.job);



// OOPS in JS

// class Car{
//     constructor(name,model,color){
//         this.name=name;
//         this.model=model;
//         this.color=color;
//     }
    
//     start(){
//         this.gear=1;
//     }
//     shiftGear(){
//         this.gear++;
//     }
// }

// class sportsCar extends Car{
//   constructor(name,model,color,pwd){
//     super(name,model,color);
//   this.doorPWD=pwd
//   }


// }


// let myCar=new Car("Maruti Suzuki","M2JO4PI","White");
// console.table(myCar);

// let mySpCar=new sportsCar("Mercedez Benz","124FJ9","Black","Hello@789");
// mySpCar.start();
// console.table(mySpCar);
// mySpCar.shiftGear();
// console.table(mySpCar);


// class God{
//   constructor(name,age){
//     this._name=God.correct(name);
//     this.age=age;
//   }
  
//   static correct(){
//     if(this.name!="Krishna"){
//       return "Krishna";
//     }
//   }

//   set myname(name){
//      this._name=name;
//   }

//   get myname(){
//     return this._name;
//   }

// }

// class Krishna extends God{
//   constructor(place){
//     super();
//     this.place=place;
//   }
// }

// let g= new God("Agni","infinity");
// console.log(g);

// let k=new Krishna("Golok Vrindavan");
// console.log(k);
// g._name="Ram"
// console.log(g._name);

// class Complex{
//   constructor(real,imag){
//      this.r=real;
//      this.i=imag;
//   }

//   add(c){
//      return new Complex(this.r+c.r,this.i+c.i);
//   }

//   static format(c){
//     return `${c.r}+${c.i}i`;
//   }

//   get parts(){
//     return `${this.r} + ${this.i}i`;
//   }

//   set parts(arr){
//      this.r=arr[0];
//      this.i=arr[1];
//   }
// }

// let c1= new Complex(4,5);
// let c2= new Complex(3,6)
// let c3=c1.add(c2);
// console.log(c1);
// console.log(c2);
// console.log(Complex.format(c3));

// c1.parts=[1,2];
// console.log(c1," ->  ",c1.parts)



// class Human{
// constructor(color,sex) {
//   this.color=color;
//   this.sex=sex;
//  }

//  sees(){
//   console.log("Human sees objects");
//  }
// }

// class Student extends Human{
//  constructor(color,sex,std) {
//   super(color,sex);
//   this.std=std;
//  }

//  sees(){
//   console.log("Student sees objects");
//  }
// }

// let h1=new Human("Black","Male");
// console.log(h1);


// let s1=new Student("White","Female",10);
// console.log(s1);

// console.log(s1 instanceof Human);

// s1.sees();


/* IIFE -Immediately Invoked Function Explressions */

// let a=()=>{ return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve("Promise1 is resolved");
//   },3000);
// })};


// (async()=>{

  
//   let b= await a();
//   console.log(b);

//   let d= await a();
//   console.log(d);
// })()

// console.log(d)  // gives error coz scope of local variable are destroyed after exec of  IIFE block.


// let arr=[6,8,3,4,5];
// let [a,b]=arr;
// console.log(a,b);

// let [a1,,c,...rest]=arr;
// console.log(a1,c,rest);

// const obj={
//   name : "Sumrit",
//   age : 21
// }

// console.log(obj)



// function fun(a,b,c){
//   console.log(a,b,c)
// }

// fun(...arr);

// console.log({...obj,name : "Sahil"});

// let f=()=>{
//   setTimeout(()=>{
//      console.log("Hello\nWorld");
//   },2000);
// }
// f();

// let arr=[1,2,3,4,5]

// let findavg=(a,b,c,d,e)=>{
//   return ((a+b+c+d+e) /5);
// };
// console.log(findavg(...arr));


// Password Generator
// class Password{


//   generatePWD(){
//     let charS="abcdefghijklmnopqrstuvwxyz";
//     let charC="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let nums="0123456789";
//     let specials=`~"'!#$%^&*()_+={[}]:;<>?/,.|\*-;`;
//     let res="";
//   //  let len=prompt("Enter the length of password");
//     let len=6;
//    let i=0;
//    while(i < len){
//       res+=charS[Math.floor(Math.random() * len)];
//       res+=nums[Math.floor(Math.random() * len)];
//       res+=charC[Math.floor(Math.random() * len)];
//       res+=specials[Math.floor(Math.random() * len)];
//       i+=4;

//    }
//    res=res.substring(0,len);
//    return res;
//   }
// }

// let pwd= new Password();
// console.log(pwd.generatePWD());


// Closures in JS

// function outer() {
//   let outerVar = "I'm in the outer scope!";
//   function inner() {
      
//       console.log(outerVar);
//   }
//   console.log(outerVar);
//   return inner;
// }
// const closure = outer(); 
// closure();




// Clock
let time=document.createElement("h3");
time.setAttribute("id","time")
document.body.append(time);

 time=document.getElementById("time");

 let date;
 let mytime;
 setInterval(() => {
  date=new Date();
  mytime=`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
  time.innerText=mytime;
 }, 1000);

 
var audio = new Audio('AUD-20241017-WA0002.mp3');

document.getElementById("btn").addEventListener("click",function(){
  let val=document.getElementById("secs").value;
  val=parseInt(val,10);
  if(!isNaN(val) && val > 0){
    setTimeout(() => {
      audio.play();
    }, val * 1000);
  }
  
});






