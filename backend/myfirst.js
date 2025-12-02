console.log("Server is setting");
var http = require('http');
var myMod = require('./myfirstmodule');
var myurl = require('url');
var fs = require('fs');
var uc = require("upper-case");
var events = require('events');
var myform = require('formidable');
const mail=require('nodemailer');
const mysql=require('mysql');
const mongo=require("mongodb");
const { captureRejectionSymbol } = require('events');
console.log("Server building");
//http.createServer(function (req, res) {
    // fs.readFile("index.html",(err,data)=>{
    //     res.writeHead(200,{'content-type' : 'text/html'});
    //     res.write(data);
    //     return res.end();
    // });

    // fs.appendFile("demo.txt", "This is my content", (err) => {
    //     res.writeHead(200, { 'content-type': 'text/html' });
    //     if (err) {
    //         throw new Error("Something went wrong.");
    //     }
    //     console.log("Changes Saved.");
    //     return res.end();
    // });

    // fs.open("demo2.txt","r",(err)=>{
    //     res.writeHead(200,{'content-type' : 'text/html'});
    //     if (err){console.log("Error");}
    //     res.write("Hare Krishna");
    //     return res.end();
    // });

    // fs.writeFile("demo.txt","This is the new content",(err)=>{
    //     if(err){console.log("Error");}
    //     res.writeHead(200,{'content-type' : 'text/html'});
    //     return res.end();
    // });

    // fs.unlink("demo2.txt",(err)=>{
    //   if(err){console.log("Can't delete.");}
    //   res.writeHead(200,{'content-type' : 'text/html'});
    //   res.write("File Deleted.");
    //   return res.end();
    // });


    // fs.rename("sample.txt","demo.txt",(err)=>{
    //     if(err){console.log("Can't rename the file.");}
    //     res.writeHead(200,{'content-type' : 'text/html'});
    //     res.write("File renamed successfully.");
    //     return res.end();
    // });

    // res.writeHead(200, { 'content-type': 'text/html' });
    // const link=myurl.parse(req.url, true);
    // res.write(JSON.stringify(link.query));
    // res.write(link.pathname);
    // res.end();

    // const q=myurl.parse(req.url, true);
    // var filename='.'+q.pathname;
    // fs.readFile(filename,(err,data)=>{
    //  if(err){
    //     res.writeHead(404,{'content-type' : 'text/html'});
    //     return res.end("404 Not Found");
    //  }
    //     res.writeHead(200,{'content-type' : 'text/html'});
    //     res.write(data);
    //     res.end();
    // });

    // res.writeHead(200,{'content-type' : 'text/html'});
    // res.end(uc.upperCase("Hello World!"));

    // res.writeHead(200,{'content-type' : 'text/html'});
    // var rs=fs.createReadStream('summer.html');
    // rs.on('open',()=>{
    // res.write("The file was opened.");
    // });
    // res.end();

    // const eventemitter=new events.EventEmitter();
    // res.writeHead(200,{'content-type' : 'text/html'});
    // eventemitter.on('scream2',()=>{
    //     res.write("Scream2 event has been fired.");
    // })

    // eventemitter.emit('scream2');
    // res.end();

    // if(req.url=='/fileupload'){
    //   var form= new myform.IncomingForm();
    //   form.parse(req,(err,fields,files)=>{
    //     if(err){
    //         res.writeHead(404, { 'content-type': 'text/html' });
    //         res.write("Could not upload the file");
    //         res.end();
    //     }else{
    //         //console.log(files);
    //         const oldpath=files.filetoupload[0].filepath;
    //         //console.log(files.filetoupload);
    //         const rootdir=`C:/targetFolder/`;
    //         const newpath=rootdir+files.filetoupload[0].originalFilename;
    //         console.log(newpath);
    //         if(!oldpath){
    //             return res.end("Oldpath is undefined.");
    //         }
    //         fs.rename(oldpath,newpath,(err)=>{
    //             if(err){
    //                 res.writeHead(404, { 'content-type': 'text/html' });
    //                 res.write("Could not save the file.");
    //                 console.log(err);
    //                 res.end();
    //             }else{
    //                 res.writeHead(200, { 'content-type': 'text/html' });
    //                 res.write("File saved successfully.");
    //                 res.end();   
    //             }
    //         });
    //     }
        
    //   });
    // }else{
    // res.writeHead(200, { 'content-type': 'text/html' });
    // res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    // res.write('<input type="file" name="filetoupload"><br>');
    // res.write('<input type="submit">');
    // res.write('</form>');
    // return res.end();
    // }

    // const transporter=mail.createTransport(
    //     {
    //         service : 'gmail',
    //         auth : {
    //             user :"sumritsaproo123@gmail.com" ,
    //             pass : jj
    //         },
            
    // });

    // var mailOptions={
    //     from: "sumritsaproo123@gmail.com"  ,
    //     to :  "sumritsaprooprof456@gmail.com"  ,
    //     subject : 'This is a test mail',
    //     text : `Hey there, Hope you received my mail.`
    // }
 
    // transporter.sendMail(mailOptions,(err,info)=>{
    //    if(err){
    //     res.writeHead(500,{'content-type' : 'text/html'});
    //     res.end();
    //    }else{
    //     res.writeHead(200,{'content-type' : 'text/html'});
    //     return res.end("Mail sent successfully.");
    //    }
    // });
   // }).listen(8080);
//    const mycon=mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'SumritDB'
//    });


//    mycon.connect((err)=>{
//     if(err){throw err;}
//     const values=[
//         ["Krsna",1,11126580],
//         ["Yuddhisthira",2,11126584],
//         ["Bhima",3,11126585],
//         ["Arjun",4,11126586]
//     ];
//     const vals=[
//         [2,1,1],
//         [3,2,1],
//         [4,3,1],
//         [5,4,1]
//     ];
//     const sql="select customers.name,customers.rollno,seating_arr.benchxDoor,seating_arr.benchyDoor from customers right join seating_arr on customers.rollno=seating_arr.benchid";
//     mycon.query(sql,[vals],(err,result,fields)=>{
//       if(err){throw err;}
//       console.log(result);
//       console.log(fields);
//     });
//    });


const mongocl=mongo.MongoClient;
const url= "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2";

mongocl.connect(url,(err,db)=>{
   if(err){
   console.error(err);
   return;
   }
   console.log("Database Created.");
   db.close();
});



console.log("task done");




