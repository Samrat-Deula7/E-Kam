const mongoose =require("mongoose");
const mongoURL =
  "mongodb://atlas-sql-690ee33f94f443685364a88c-uo94c4.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin";

const connectToMongo=()=>{
    try {
        mongoose.connect(mongoURL);
        console.log("✅ Connected to Mongoose successfully");
    } catch (error) {
            console.error("❌ Mongoose connection failed:", error);
    }
}

module.exports=connectToMongo;