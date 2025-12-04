const Home = require("../models/homeM");
const { ObjectId } = require("mongodb");
const { match } = require("assert");

exports.home = (req, res, next) => {
  //res.sendFile(path.join(rootdir,"views","homepage.html"));

  Home.find()
    .then((registeredHomes) => {
      res.render("./store/homepage", { registeredHomes, pageTitle: "Home" ,isLoggedin : req.isLoggedin});
    })
    .catch((err) => {
      console.log("An error occured", err);
    });
};

exports.getPropertyDetails = (req, res, next) => {
  res.render("./admin/addHome", {
    editing: false,
    pageTitle: "Property-Details",
    isLoggedin : req.isLoggedin
  });
};

exports.postPropertyDetails = (req, res, next) => {
  console.log(req.body);
  const {
    imgURL,
    username,
    propertyname,
    propertyDetails,
    price,
    location,
    ratingLabel
  } = req.body;
  const home = new Home({
    imgURL,
    username,
    propertyname,
    propertyDetails,
    price,
    location,
    ratingLabel}
  );
  //const home=new Home(req.body.imgURL,req.body.username,req.body.propertyname,req.body.price,req.body.location,req.body.ratingLabel);
  home.isFav = false;
  home.isBooked = false;
  home
    .save()
    .then(() => {
      res.render("./admin/homeAdded", { pageTitle: "Property Added" , isLoggedin : req.isLoggedin});
    })
    .catch((err) => {
      console.log("Error while saving home to DB", err);
    });
};

exports.homeList = (req, res, next) => {
  Home.find()
    .then((allEntries) => {
      res.render("./store/home-list", {
        allEntries,
        pageTitle: "Property List",
        isLoggedin : req.isLoggedin
      });
    })
    .catch((err) => {
      console.log("An error occured", err);
    });
};

exports.hostHomeList = (req, res, next) => {
  Home.find()
    .then((allEntries) => {
      res.render("./admin/host-home-list", { allEntries ,isLoggedin : req.isLoggedin});
    })
    .catch((err) => {
      console.log("An error occured", err);
    });
};

exports.homeDetails = (req, res, next) => {
  const reqdHouseID = req.params.id;
    Home.findById(reqdHouseID)
    .then((propertyDetails) => {
      res.render("./store/home-details", {
        propertyDetails,
        pageTitle: "Property Details",
        isLoggedin : req.isLoggedin
      });
    })
    .catch((err) => {
      console.log("An error occured", err);
    });
};
exports.AdminPage = (req, res, next) => {
  res.render("./admin/AdminPage",{isLoggedin : req.isLoggedin});
};

exports.editHomeList = (req, res, next) => {
  const houseID = req.params.id;
  const editing = req.query.editing === "true";
  const pageTitle = editing ? "Update home" : "Add home";
  Home.find()
    .then((registeredHomes) => {
      const newID = new ObjectId(String(houseID));
      registeredHomes = registeredHomes.filter((home) => home._id.equals(newID));
      const reqHome = registeredHomes[0];   
      res.render("./admin/addHome", { editing, houseID, pageTitle, reqHome ,isLoggedin : req.isLoggedin});
    })
    .catch((err) => {
      console.log("An error occured", err);
    });
};

exports.delHomeList = (req, res, next) => {
  const homeid = req.body._id;
  Home.findByIdAndDelete(homeid)
    .then(() => {
      console.log("Deleted home successfully.");
      res.redirect("/");
    })
    .catch((err) => {
      console.log("Error encounterd while deleting home.", err);
    });
};

exports.postEditHomeList = (req, res, next) => {
    const {_id,imgURL,username,propertyname,propertyDetails,price,location,ratingLabel}=req.body;
  // const home=new Home({imgURL,username,propertyname,propertyDetails,price,location,ratingLabel});
    Home.findById(_id).then((home)=>{
      home.imgURL=imgURL;
      home.username=username;
      home.propertyname=propertyname;
      home.propertyDetails=propertyDetails;
      home.price=price;
      home.location=location;
      home.ratingLabel=ratingLabel;
       home.save().then(() => {
          console.log("Home updated successfully.");
        }).catch((err) => {
          console.log("Error encountered while updating home details", err);
        });
    }).catch(err=> console.log("Can't find home."));
     
   

  res.redirect("/");
};
