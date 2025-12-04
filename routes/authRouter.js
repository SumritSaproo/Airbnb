const express=require("express");
const authRouter=express.Router();
const authCExports=require("../controllers/authC");


authRouter.get("/login",authCExports.goToLogin);
authRouter.post("/login",authCExports.postLoggedIn);
authRouter.post("/logout",authCExports.postLogout);
module.exports=authRouter;
