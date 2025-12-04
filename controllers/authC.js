

exports.goToLogin=(req,res,next)=>{
     res.render("../views/store/loginPage",{pageTitle : "Logging in",isLoggedin : req.isLoggedin});

}

exports.postLoggedIn=(req,res,next)=>{
  console.log("You logged in successfully.");
  res.cookie("isLoggedin",true);
  res.redirect("/");

}

exports.postLogout=(req,res,next)=>{
  res.cookie("isLoggedin",false);
  console.log("You logged in successfully.");
  res.redirect("/");
}