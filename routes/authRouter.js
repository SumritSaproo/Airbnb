const express=require("express");
const authRouter=express.Router();
const authCExports=require("../controllers/authC");


authRouter.get("/login",authCExports.goToLogin);
authRouter.post("/login",authCExports.postLoggedIn);

module.exports=authRouter;
