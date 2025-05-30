const { default: mongoose } = require("mongoose");
const moongose=require("mongoose");

const chatSchema=new moongose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    messages:[{
        sender:{
            type:String,
            enum:['user','admin'],
            required:true
        },
        text:{
            type:String,
            required:true
        },
        timestamp:{
            type:Date,
            default:Date.now
        }
    }
]
});

module.exports=mongoose.model('Chat',chatSchema);