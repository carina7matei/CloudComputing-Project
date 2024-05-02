// import mongoose from "mongoose";


// const  connectMongoDB=async()=>{
//     try{
//     await mongoose.connect(process.env.MONGODB_URI)
//     console.log('connected to mongodb');
//     }catch(err){
//         console.log(err);
//     }
// }

// export default connectMongoDB;


import mongoose from 'mongoose';

const connection = {}

async function connectMongoDB() {
    if (connection.isConnected) {
        console.log('already connected');
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log('use previous connection');
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('new connection');
    connection.isConnected = db.connections[0].readyState;
}
export default connectMongoDB;