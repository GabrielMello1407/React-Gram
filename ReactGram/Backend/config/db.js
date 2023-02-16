const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

//connection
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async() => {
    try{
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.h05aeah.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Conectado ao banco!")
        
        return dbConn
    } catch(error){
        console.log(error)
    }
}

conn()
module.exports = conn