const mongoose = require("mongoose")

//connection
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async() => {
    try{
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${DB_PASS}:<password>@cluster0.h05aeah.mongodb.net/?retryWrites=true&w=majority`
        )
        console.log("Conectado ao banco!")
        
        return dbConn
    } catch(error){
        console.log(error)
    }
}

conn()
module.exports = conn