var mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        id: mongoose.Schema.ObjectId,
        firstName: String,
        middleName:String,
        lastName: String,
        mobile:Number,
        image:String,
        email:String,
        facebook:String,
        password: String,
        status:String,
        createBy:String,
        updateBy:String,
        type: String,
    },
    {
        timestamps: true,
        collection: "users",
    }
);

module.exports =  mongoose.model('User', userSchema)

// var user = mongoose.model("User", userSchema);
// module.exports = user