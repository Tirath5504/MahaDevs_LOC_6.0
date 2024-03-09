const mongoose = require("mongoose")

const connectToDB = () => {
    mongoose.
connect(process.env.MONGO_URI,{
    dbName:"loc",
})
.then((c)=>console.log(`Database connected with ${c.connection.host}`))
.catch((e)=>console.log(e))
} 

module.exports.connectToDB = connectToDB;