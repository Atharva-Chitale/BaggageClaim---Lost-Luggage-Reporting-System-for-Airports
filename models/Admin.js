const mongoose=require("mongoose");

const adminschema=new mongoose.Schema({
    username:String,
    password:String
});

module.exports=mongoose.model("Admin",adminschema);