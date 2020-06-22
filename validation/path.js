const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validatePathInput(data){
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
  data.startPoint = !isEmpty(data.startPoint) ? data.startPoint : "";
  data.endPoint = !isEmpty(data.endPoint) ? data.endPoint : "";
  data.timeframe = !isEmpty(data.timeframe) ? data.timeframe: "";
  data.money = !isEmpty(data.money) ? data.money: "";
  data.currentExp = !isEmpty(data.currentExp) ? data.currentExp: "";

  if(Validator.isEmpty(data.startPoint)){
      errors.startPoint = "Starting Point is required";
  }
  if(Validator.isEmpty(data.endPoint)){
    errors.endPoint = "End Goal is required";
}
if(Validator.isEmpty(data.timeframe)){
    errors.timeframe = "A timeframe is required";
}
if(Validator.isEmpty(data.money)){
    errors.money = "Budget guidelines are required";
}
if(Validator.isEmpty(data.currentExp)){
    errors.currentExp = "Current experience is required";
}
return{
    errors,
    isValid: isEmpty(errors)
};

};