var mongoose = require('mongoose')
var uuidv4 = require('uuid')
const messageSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: () => uuidv4().replace(/\-/g, ""),
        },
        roomId: String,
        userId:String,
        message:String,
        status:String,
        createBy:String,
    },
    {
        timestamps: true,
        collection: "messages",
    }
);

module.exports = mongoose.model("Message", messageSchema);