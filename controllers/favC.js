const Favourites = require("../models/favsM");
const Home = require("../models/homeM");


exports.postAddToFav = (req, res, next) => {
  const reqID = req.body.houseID;
  
   Favourites.findOne({houseID : reqID}).then(fav =>{
    if(fav){
      console.log("Already added to Favourites");
    }else{
      const fav=new Favourites({
        houseID : reqID
      });  
      return fav.save();
    }
   }).then(()=>{
    res.redirect("/");
   }).catch(err => console.log("Error while validating the home for favs",err));
  }
//   Favourites.addToFavs(reqID).then((ids)=>{
//       const idExists=ids.includes(ids.find(idEle => idEle.houseID==reqID));
//       if(!idExists){
//          db.collection('favsID').insertOne({houseID : reqID}).then(() => {
//           console.log("Added to Favourites succesfully.");
//           res.redirect("/");
//          }).catch((err) => console.log("Error while adding Favourites to DB.", err));
        
     
//        }else{
//           console.log("Already added to Favourites.");
//           res.redirect("/");
//        }
//     }).catch(err=> console.log("Error in fetching favIDs while adding to Favourites",err))
// };

exports.getFavList = (req, res, next) => {
  // let favourites = [];
  Favourites.find().populate("houseID")
    .then((favs) => {
      const favourites=favs.map(fav => fav.houseID);
         //  console.log(favouritehomes[0]);
          res.render("./store/fav-list", {
            favourites,
            pageTitle: "Favourites",
            isLoggedin : req.isLoggedin
          });
         // console.log(favouritehomes);
        })
    .catch((err) =>
      console.log("Error while fetching Favourites from DB.", err)
    );
};

exports.delFavHome = (req, res, next) => {
  const homeid = req.body.houseID;
  Favourites.findOneAndDelete({houseID : homeid}).then(()=>{
      console.log("Deleted Successfully.");
      res.redirect("/fav-list");
  }).catch(err => console.log(err));

};
