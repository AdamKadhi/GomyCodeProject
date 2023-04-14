const express=require('express')
const tournoirouter =express.Router()
const tournoi= require('../models/tournoi')

// add tournoi
tournoirouter.post('/add',async(req,res)=>{
    try {
       let newtournoi= new tournoi (req.body)
       let result= await newtournoi.save()
       res.send({tournoi:result,msg:"new tournoi is saved successfully"})
    } catch (error) {
       console.log(error) 
    }
})

// get all tournoi
tournoirouter.get('/all',async(req,res)=>{
    try {
       let result= await tournoi.find()
       res.send({tournoi:result,msg:"all tournoi found"})
    } catch (error) {
       console.log(error) 
    }
})

// get by id
tournoirouter.get('/:id',async(req,res)=>{
    try {
       let result= await tournoi.findById({_id:req.params.id})
       res.send({tournoi:result,msg:" tournoi found"})
    } catch (error) {
       console.log(error) 
    }
})


// update
tournoirouter.put('/:id',async(req,res)=>{
    try {
       let result= await tournoi.findByIdAndUpdate(
        {_id:req.params.id},
        {$set:{...req.body}}
        )
       res.send({msg:" tournoi updated"})
    } catch (error) {
       console.log(error) 
    }
})

// tournoirouter.put("/partie/:id", async (req, res) => {
//    try {
//      let result = await tournoi.findByIdAndUpdate(
//        {
//          _id: req.params.id,
//        },
//        { $push: { partie: req.body } }
//      );
//      res.send({ msg: " partie added updated" });
//    } catch (error) {
//      console.log(error);
//      res.send({ msg: "fail" });
//    }
//  });


// delete
tournoirouter.delete('/:id',async(req,res)=>{
    try {
       let result= await tournoi.findByIdAndDelete({_id:req.params.id})
       res.send({msg:" tournoi deleted"})
    } catch (error) {
       console.log(error) 
    }
})




module.exports=tournoirouter
