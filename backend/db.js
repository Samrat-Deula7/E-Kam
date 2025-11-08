const mongoose =require("mongoose");
const CloudMongoDB = process.env.CloudMongoDB;

const mongoURL = CloudMongoDB;
  

const connectToMongo=()=>{
    try {
        mongoose.connect(mongoURL);
        console.log("✅ Connected to Mongoose successfully");
    } catch (error) {
            console.error("❌ Mongoose connection failed:", error);
    }
}

module.exports=connectToMongo;