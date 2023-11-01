const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true, "input task"],
        trim: true,
        maxlenght: [20,"max is 20"]
    },
    completed: {
        type: Boolean,
        default : false
    }
})

module.exports = mongoose.model("Task",TaskSchema)