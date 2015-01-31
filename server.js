var http = require("http");
var express = require("express");
var app = express();
var o2x = require('object-to-xml');
var name_of_restaurants = {
    "restaurants": [
        {
            "Buf_Type_Id": 1,
            "Buf_Type_Name": "Breakfast"
        },
        {
            "Buf_Type_Id": 2,
            "Buf_Type_Name": "Lunch"
        },
        {
            "Buf_Type_Id": 3,
            "Buf_Type_Name": "Dinner"
        }
    ]
};

app.get("/api/users", function (req, res) {
  res.set("Content-Type", "text/xml");
  res.send(o2x({
    '?xml version="1.0" encoding="utf-8"?' : null,
    restaurants: {
        restaurant: name_of_restaurants
    }
  }));
});

var server = http.createServer(app);

server.listen(3000);
