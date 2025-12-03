const bodyparser = require("body-parser");
const express=require("express");
const app=express();
app.set("view engine","ejs");
app.set("views","views");
const path=require("path");
const rootdir=require("./utils/pathUtils");
const userRouter=require("./routes/userRoutes");
const hostRouter=require("./routes/hostRoutes");

app.use(userRouter);

// parsing the body
app.use(bodyparser.urlencoded());

app.use(hostRouter);

app.use((req,res,next)=>{
 res.status(404).sendFile(path.join(rootdir,"views","NotFound404.html"));
});                

const PORT=3000;
app.listen(PORT,()=>{
  console.log(`Server is already running at http://localhost:${PORT}/`);
});
