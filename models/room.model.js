var mongoose = require('mongoose')
var uuidv4 = require('uuid')
const roomSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuidv4().replace(/\-/g, ""),
        },
        userId: String,
        roomName:String,
        image: String,
        file:Number,
        status:String,
        createBy:String,
        updateBy:String
    },
    {
        timestamps: true,
        collection: "rooms",
    }
);

module.exports = mongoose.model("Room", roomSchema);