const Mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/cardapp?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

const ConnectToMongoose =() =>{
    Mongoose.connect(mongoURI,()=>{
        console.log("Connected To Mongoose succecssfully ")
    })
}
module.exports = ConnectToMongoose; 