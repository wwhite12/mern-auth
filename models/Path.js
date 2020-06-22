const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const PathSchema = new Schema({
   //user:{
    //type: mongoose.Schema.Types.ObjectId,
    //ref: "User"
   //}, 
   startPoint:{
        type: String,
        required: true
   },
   endPoint:{
       type: String,
       required: true
   },
   timeframe:{
       type: String,
       required: true
   },
   money:{
       type: Number,
       required: true
   },
   currentExp:{
       type: String,
       required: true
   }
});

module.exports = Path = mongoose.model("paths", PathSchema);