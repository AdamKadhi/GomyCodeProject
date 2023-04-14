const mongoose = require("mongoose");
const schema = mongoose.Schema;
const tournoiSchema = new schema({
    gamename:{
        type:String,
        required:true,
    },
    mode:{
        type:String,
        required:true,
    },

    money:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    owner:{
        type:String,
        required:true,
    },
    owpdp:{
        type:String,
    },
    participant:{
        type:String,
    },
    partpdp:{
        type:String,
    },
    code:{
        type:String,
    },
});
module.exports = mongoose.model("tournoi", tournoiSchema);
