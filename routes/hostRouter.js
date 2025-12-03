const express=require("express");
const homeCExports=require("../controllers/homeC");
const favCExports=require("../controllers/favC");
const hostRouter=express.Router();

hostRouter.get("/property-details", homeCExports.getPropertyDetails);

hostRouter.post("/property-details", homeCExports.postPropertyDetails);

hostRouter.get("/home-list",homeCExports.hostHomeList);

hostRouter.get("/editHome/:id",homeCExports.editHomeList);

hostRouter.post("/postEditHome",homeCExports.postEditHomeList);

hostRouter.post("/delHome",homeCExports.delHomeList);



module.exports=hostRouter;
