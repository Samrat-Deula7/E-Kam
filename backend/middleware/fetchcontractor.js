
// const Contractors = require("../model/Contractors");

// const fetchuser = async (req, res, next) => {
//   try {
//     const contractorsId =await req.headers["contractor-id"]; // Custom header key

//     if (!contractorsId) {
//       return res
//         .status(400)
//         .json({ error: "Missing contractor ID in headers" });
//     }

//     const contractor = await Contractors.findOne({_id:contractorsId});

//     if (!contractor) {
//       return res.status(404).json({ error: "Contractor not found" });
//     }
    
//     req.contractor = contractor; // Attach matched user to request
//     next(); // Proceed to next middleware or route
//   } catch (err) {
//     console.error("Error matching user ID:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// module.exports = fetchuser;

var jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  // It requires the auth-token so need to provide that in the header.
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.contractor = data.contractor;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;