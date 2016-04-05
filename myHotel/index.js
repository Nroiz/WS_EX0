'use strict';
var EventEmitter = require("events");
var eventConfig = require("../config");



module.exports = class Hotels extends EventEmitter{

    constractor (hotelName , HotelLoc){
        super();
        this.name = hotelName;
        this.loc = hotelLoc;
        this.starAmount = 0;
        this.likeAmout = 0;
        this.reviewAmount = 0;
    }

    minusStar(){
        if(this.starAmount > 0){
            this.starAmount --;
        }else{
            this.starAmount = 0;
        }
        this.emit(eventConfig.starRankingChange);
    }

    addStar(){
        this.starAmount ++;
        this.emit(eventConfig.starRankingChange);
    }

    minusLike(){
        if(this.likeAmout > 0){
            this.likeAmout --;
        }else{
            this.like = 0;
        }
        this.emit(eventConfig.likeAmountChange);

    }

        addLike(){
        this.reviewAmount ++;
        this.emit(eventConfig.reviewAmountChange);
    }

    minusReview(){
        if(this.reviewAmount > 0){
            this.reviewAmount --;
        }else{
            this.reviewAmount = 0;
        }
        this.emit(eventConfig.reviewAmountChange);

    }

    addReview(){
        this.reviewAmount ++;
        this.emit(eventConfig.reviewAmountChange);
    }


    hotelDetails(){
        var details;
        details = "Hotel Name: " + this.name +" Hotel Location: " +this.loc + " Star Amnount: " +this.starAmount + "Review Amount: " +this.reviewAmount + "Like Amount: " + this.likeAmout ;

        console.log(details)
    }



}
