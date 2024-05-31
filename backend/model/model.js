
const mongoose=require("mongoose");

const trackerSchema=new mongoose.Schema({
    amount:{
        type:Number,
        require:true,
    },
    discription:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    }

})

const trackerModel=mongoose.model('tracker',trackerSchema);
module.exports=trackerModel;