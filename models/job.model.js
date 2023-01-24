const mongoose = require("mongoose");
const JobScema = mongoose.Schema({
 Company_name:String,
 Position:String,
 Contract:String,
 Location:String
});
const JobModel = mongoose.model("jobs", JobScema);
module.exports = { JobModel};
