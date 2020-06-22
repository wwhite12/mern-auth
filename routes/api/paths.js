const express = require("express");
const router = express.Router();
const validatePathInput = require("../../validation/path");

const Path = require("../../models/Path");
//const User = require("../../models/User");

router.post("/dashboard", (req,res) =>{
    //form validation
    const { errors, isValid } = validatePathInput(req.body);

    //check validation
    if(!isValid){
        return res.status(400).json(errors);
    }else{
        const newPath = new Path({
            startPoint: req.body.startPoint,
            endPoint: req.body.endPoint,
            timeframe: req.body.timeframe,
            money: req.body.money,
            currentExp: req.body.currentExp
        });
        newPath
              .save()
              .then(path => res.json(path))
              .catch(err => console.log(err));
    }

});

module.exports = router;