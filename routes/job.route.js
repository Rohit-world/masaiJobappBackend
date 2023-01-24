const express = require("express");
const jwt = require("jsonwebtoken");
const JobRoute = express.Router();
const { JobModel } = require("../models/job.model");

JobRoute.get("/", async(req,res)=>{
 const AllUsers= await JobModel.find()
 res.send(AllUsers)
})


JobRoute.post("/", async (req, res) => {
 const {Company_name,
  Position,
  Contract,
  Location}=req.body
  const NewJob= new JobModel({Company_name,Position,Contract,Location})
  await NewJob.save()
  res.send({"msg":"Job added sucessfully"})
  });


  JobRoute.patch("/:ID", async (req, res) => {
const {ID}=req.params
    const {Company_name,
     Position,
     Contract,
     Location}=req.body

     JobModel.findByIdAndUpdate(ID, { Company_name,
      Position,
      Contract,
      Location},
     function (err, docs) {
if (err){
  res.send({"msg":"Error in Updating file"})
}
else{
  res.send({"msg":"Job Updated Successfull sucessfull"})
}
})
      
     });
  


     JobRoute.delete("/:ID", async (req, res) => {
      const {ID}=req.params
     
      
           JobModel.findByIdAndDelete(ID,
           function (err, docs) {
      if (err){
        res.send({"msg":"Error in Deleting file"})
      }
      else{
        res.send({"msg":"Job Deleted Successfull sucessfull"})
      }
      })
            
           });


module.exports = { JobRoute };