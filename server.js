//Author :Ravi Tambade
//Write some lines of code to generate html output
 var express=require('express');   // import library
 var app=express();                // create global object

//define Http handling logic for each type of HTTP request
//Just now I have added file

var onDefault=function(req, res){
    res.send("<h1> Transflower Learning Pvt. Ltd.   </h1>" +
             "<hr/>"+
             "<ol>" +
             "<li> Mentoring for skill building</li>"+
             "<li> Workshops</li>"+
             "<li> Online Courses</li>"+
             "<li> Dac Courses</li>"
    );
  };

  var onAboutUs=function(req,res){
        res.send("Chief Mentor: Ravi Tambade ");
  };
  // configure http incomming request handling  logic
  app.get("/",onDefault);
  app.get("/aboutus",onAboutUs)
  app.listen(8081);  // contionusly wait fro client request
  console.log("Server is listening on port 8081");
