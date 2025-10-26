const express = require("express");
const cors=require("cors");
const connectToMongo=require("./db");
const app = express();
const port = 3000;

connectToMongo();
app.use(cors());

//Available Routes

app.listen(port, () => {
  console.log(`E-kam app listening on port ${port}`);
});
