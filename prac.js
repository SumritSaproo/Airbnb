const express = require("express");
const { pgNotFound } = require("./controllers/404");
const app = express();
const {mongoConnect} = require("./Utils/databaseUtil");
const mongoose=require("mongoose");

app.set("view engine", "ejs");
app.set("views", "views");

// importing user and host routes
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");


app.use((req, res, next) => {
  console.log("Request Path : ", req.path);
  next();
});

app.use((req, res, next) => {
  console.log("Request Method : ", req.method);
  next();
});


// parsing the request body
app.use(express.urlencoded());

app.use(userRouter);

app.use("/host", hostRouter);

app.use(pgNotFound);

const PORT = 3000;
const dbPATH='mongodb+srv://root:root@learningmongodb.zrf5g34.mongodb.net/airbnb?retryWrites=true&w=majority&appName=LearningMongoDB';

mongoose.connect(dbPATH).then(()=>{
  console.log("Mongo connected Successfully.");
   app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
  });
}).catch((err)=>{
    console.log("Mongo not connected.",err);
});
