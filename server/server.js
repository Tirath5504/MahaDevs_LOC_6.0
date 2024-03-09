const {app} = require("./app.js")
const {connectToDB} =require("./data/db.js")
const {initializeRooms , dropRoom} = require("./script/initRooms.js");

connectToDB();
// initializeRooms();

app.get("/" , (req , res)=>{
    res.send("site is working")
})
app.listen(process.env.PORT , ()=>{
    console.log(`Server is working on port : ${process.env.PORT}`)
})