

exports.goToLogin=(req,res,next)=>{
     res.render("../views/store/loginPage",{pageTitle : "Logging in"});

}

exports.postLoggedIn=(req,res,next)=>{
  console.log("You logged in successfully.");
  res.redirect("/");

}