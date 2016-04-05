var http = require("http");
var Hotels = require("./myHotel");
var eventsConfig = require("./config")

//Creating a hotel.
var my_hotel = new Hotels("Berashit" , "Isreal");

my_hotel.on(eventConfig.likeAmountChange , my_hotel.hotelDetails);

//Adding and delete hotel reviews/likes/stars
my_hotel.addStar();
my_hotel.addStar();
my_hotel.addStar();
my_hotel.addReview();
my_hotel.addLike();
my_hotel.addLike();
my_hotel.addLike();
my_hotel.minusLike();

http.createServer(function(req, res){
    res.writeHeader(200 , {'content-Type': 'text/plain'});
    res.end();
}).listen(8080);
