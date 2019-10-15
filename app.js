var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("homepage");
});

app.get("/main", function(req, res){
    var posts = [
        {title: "Wagaya Japanese Restaurant!", image:"../login/static/image/Cherry.png", tags:"restaurants"},
        {title: "Tanaka", image:"../login/static/image/Cherry.png", tags:"restaurants"},
    ]
    res.render("main");
});

app.get("/register", function(req, res){

});

app.listen(process.env.PORT || 3000);
/*
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The DooleyEats Server has Started");
});
*/