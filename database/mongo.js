var mongoose = require('mongoose')
var config = require('../config/config')

var connection = `mongodb+srv://sonuprajapati78:ILOFWeYrDT5ZOKj7@cluster0.vvnqzbn.mongodb.net/chatdb?retryWrites=true&w=majority`

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
    console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
    console.log('Mongo connection has an error', error)
    mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
    console.log('Mongo connection is disconnected')
})