import mongoose from "mongoose";


const  connectMongoDB=async()=>{
    try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('connected to mongodb');
    }catch(err){
        console.log(err);
    }
}

export default connectMongoDB;


