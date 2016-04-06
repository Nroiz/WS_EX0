'use strict';
var EventEmitter = require("events");
var eventConfig = require("../config");



module.exports = class Hotels extends EventEmitter{

    constructor (hotelName , hotelLoc){
        super();
        this.name = hotelName;
        this.loc = hotelLoc;
        this.starAmount = 0;
        this.likeAmout = 0;
        this.reviewAmount = 0;
        this.messages = "";
    }

    minusStar(){
        if(this.starAmount > 0){
            this.starAmount --;
        }else{
            this.starAmount = 0;
        }
        this.emit(eventConfig.Change);
    }

    addStar(){
        this.starAmount ++;
        this.emit(eventConfig.Change);
    }

    minusLike(){
        if(this.likeAmout > 0){
            this.likeAmout --;
        }else{
            this.like = 0;
        }
        this.emit(eventConfig.Change);

    }

        addLike(){
        this.likeAmout ++;
        this.emit(eventConfig.Change);
    }

    minusReview(){
        if(this.reviewAmount > 0){
            this.reviewAmount --;
        }else{
            this.reviewAmount = 0;
        }
        this.emit(eventConfig.Change);

    }

    addReview(){
        this.reviewAmount ++;
        this.emit(eventConfig.Change);
    }

    getMessage(){
        return this.messages;
    }

    hotelDetails(){
        var details;
        details = "Hotel Name: " + this.name +"\nHotel Location: " +this.loc + "\nStar Amnount: " +this.starAmount + "\nReview Amount: " +this.reviewAmount + " \nLike Amount: " + this.likeAmout +"\n\n\n" ;
        this.messages += details;
        console.log(details)
    }

}
