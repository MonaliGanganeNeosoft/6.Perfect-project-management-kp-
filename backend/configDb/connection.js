import mongoose from 'mongoose'

    // DB Connection  
// const db = "mongodb+srv://projectmanagement:projectapp@cluster0.qkdx2.mongodb.net/projectwebapp";
// const db = "mongodb+srv://Monali_Gangane:Monali@123ss@cluster0.siida.mongodb.net/test";

//mongodb+srv://Monali_Gangane:<password>@cluster0.siida.mongodb.net/test
const db="mongodb://localhost:27017/projectwebapp";
export const connectdb = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true })
        console.log("mongo connected");
    }
    catch (err) {
        console.log(err.message)
    }

}