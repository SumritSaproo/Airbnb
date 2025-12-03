const express=require("express");
const userRouter=express.Router();
const homeCExports=require("../controllers/homeC");
const favCExports=require("../controllers/favC");
const {home}=require("../controllers/homeC");

userRouter.get("/",home);
userRouter.get("/home-list",homeCExports.homeList);
userRouter.get("/home-detail/:id",homeCExports.homeDetails);
userRouter.post("/addToFav",favCExports.postAddToFav); 
userRouter.get("/fav-list",favCExports.getFavList);
userRouter.post("/delFav",favCExports.delFavHome);
userRouter.get("/AdminPage", homeCExports.AdminPage);
module.exports=userRouter;
