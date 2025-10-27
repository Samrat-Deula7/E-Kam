
const Contractors = require("../model/Contractors");

const fetchuser = async (req, res, next) => {
  try {
    const contractorsId =await req.headers["contractor-id"]; // Custom header key

    if (!contractorsId) {
      return res
        .status(400)
        .json({ error: "Missing contractor ID in headers" });
    }

    const contractor = await Contractors.findOne({_id:contractorsId});

    if (!contractor) {
      return res.status(404).json({ error: "Contractor not found" });
    }
    
    req.contractor = contractor; // Attach matched user to request
    next(); // Proceed to next middleware or route
  } catch (err) {
    console.error("Error matching user ID:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = fetchuser;