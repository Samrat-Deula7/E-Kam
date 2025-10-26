
const mongoose=require( "mongoose");
const { Schema } = mongoose;

const ContractorSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  phoneno:{
    type:Number,
    require:true
  },
  experience:{
    type:String,
    require:true,
  },
  cost:{
    type:String,
    require:true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contractor=mongoose.model('contractor',ContractorSchema);

module.exports=Contractor;