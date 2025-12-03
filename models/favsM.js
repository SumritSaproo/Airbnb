const Home = require("./homeM");
const mongoose=require("mongoose");

const favSchema=mongoose.Schema({
   houseID : {
     type : mongoose.Schema.Types.ObjectId,
     ref : "Home",
     required : true,
     unique : true
   }
});

module.exports = mongoose.model("Favourites",favSchema);

//   static addToFavs(homeID) {  
//     return db.collection('favsID').find().toArray();
//   }

//   static getFavourites() {
//    return db.collection('favsID').find().toArray();
// }

//    static delFavourites(homeid){
//    return db.collection('favsID').deleteOne({houseID : homeid});

//    }
// };
