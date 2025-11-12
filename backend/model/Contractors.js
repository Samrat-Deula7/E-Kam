
const mongoose=require( "mongoose");
const { Schema } = mongoose;

const ContractorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneno:{
    type:Number,
    required:true
  },
  experience:{
    type:String,
    required:true,
  },
  cost:{
    type:String,
    required:true
  },
  work:{
    type:String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contractor=mongoose.model('contractor',ContractorSchema);

module.exports=Contractor;