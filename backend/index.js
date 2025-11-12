const express = require("express");
const cors=require("cors");
const connectToMongo=require("./db");


const app = express();
const port =process.env.PORT || 3000;

connectToMongo();
// app.use(cors());
app.use(
  cors({
    origin: ["https://e-3mrnwuzsl-samrat-deulas-projects.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json()) // This is an middleware

//Available Routes
app.use("/api/contractor",require("./routes/Contract"));

app.listen(port, () => {
  console.log(`E-kam app listening on port ${port}`);
});
