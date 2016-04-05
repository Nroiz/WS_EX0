var http = require("http");
var Hotels = require("./myHotel");
var eventConfig = require("./config")

//Creating a hotel.
var my_hotel = new Hotels("Berashit" , "Isreal");

my_hotel.on(eventConfig.Change , my_hotel.hotelDetails);


//Adding and delete hotel reviews/likes/stars
my_hotel.addStar();
my_hotel.addStar();
my_hotel.addStar();
my_hotel.addLike();
my_hotel.addLike();
my_hotel.addLike();
my_hotel.minusLike();

http.createServer(function(req, res){
    res.writeHeader(200 , {'content-Type': 'text/plain'});
    res.end();
}).listen(8080);
