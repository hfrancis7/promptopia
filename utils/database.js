import mongoose from 'mongoose';

let isConnected = false; //track connection status

export const connectToDB = async () => {
mongoose.set('strictQuery', true);

if(isConnected){
    console.log("MongoDB already connected");
    return;
}

try{
    await mongoose.connect(process.env.MONGODB_URI, {
        name: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
}catch(err){
    console.log(err);
}
}