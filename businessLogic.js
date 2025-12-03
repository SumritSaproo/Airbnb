const add=require("./add");
let html='';
const handleRequest=(req,res)=>{
  res.setHeader('Content-Type','text/html');
 if(req.url==='/'){
    html=`<html>
    <h2>Welcome to the Home Page</h2>
    <a href="/calculator">Go to Calculator</a>
    </html>`;
    res.write(html);
    res.end();
 }else if(req.url==='/calculator'){
  html=`<html>
  <form action="/calculate-result" method="POST">
  <input id="num1" type="number" name="num1">
  <input id="num2" type="number" name="num2">
  <input type="submit" name="submit">
  </form>
  </html>
  `
  res.write(html);
   res.end();
 }else if(req.url==='/calculate-result' && req.method==="POST"){
  res.setHeader('Content-Type','text/html');
      res.write("Here is the answer...");
      let result;
  const body=[];
  req.on("data",(chunks)=>{
   // console.log(chunks);
    body.push(chunks);
  });

  req.on("end",()=>{
  const fullBody=Buffer.concat(body).toString();
  const params= new URLSearchParams(fullBody)
  const objBody=Object.fromEntries(params);
  add(res,objBody);
 
  });
   
  
 }
}

 
module.exports={
  handler : handleRequest,
}