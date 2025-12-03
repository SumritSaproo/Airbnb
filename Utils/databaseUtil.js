const mongo=require("mongodb");
const MongoClient=mongo.MongoClient;
const MONGO_URL="mongodb+srv://root:root@learningmongodb.zrf5g34.mongodb.net/?retryWrites=true&w=majority&appName=LearningMongoDB";

let _db;

const mongoConnect= (callback)=>{
  MongoClient.connect(MONGO_URL).then( client =>{
  callback();
  _db=client.db("airbnb");
}).catch(err=>{
   console.log("Error while connecting to Mongo : ",err)
});
}

exports.mongoConnect=mongoConnect;
