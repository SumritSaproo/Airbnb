const mongoose=require("mongoose");
const Favourites=require("./favsM");

const homeSchema=new mongoose.Schema({
  imgURL : String,
  username : {type : String, required : true},
  propertyname : {type : String, required : true},
  propertyDetails : String,
  price : {type : Number, required : true},
  location : {type : String, required : true},
  ratingLabel : {type : Number, required : true}

});

homeSchema.pre("findOneAndDelete",async function(){
   const homeID=this.getQuery()._id;
   await Favourites.deleteMany({houseID : homeID});
});
// save,fetchAll,delHome

module.exports=mongoose.model("Home",homeSchema)
