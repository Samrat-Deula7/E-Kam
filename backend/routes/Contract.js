const express = require("express");
const router = express.Router();
const Contractor = require("../model/Contractors");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
var jwt = require("jsonwebtoken");
const fetchcontractor = require("../middleware/fetchcontractor");

//ROUTE 1:Create a User using:POST "/api/contractor/createcontractor".Doesn't require login

router.post(
  "/createcontractor",
  [
    body("name", "Name should have at least 3 characters").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
    body("phoneno", "Phoneno must be at least have 10 numbers").isLength({
      min: 10,
    }),
    body(
      "experience",
      "provide work experience with more then 3 characters"
    ).isLength({ min: 3 }),
    body(
      "work",
      "provide your field of work  with more then 3 characters"
    ).isLength({ min: 3 }),
    body(
      "cost",
      "provide your price range  with more then 3 characters"
    ).isLength({ min: 3 }),
  ],
  async (req, res) => {
    // The above array will set the restrictions rules and the following code will give error if those rules are broken.
    const errors = validationResult(req);
    // If error is empty is false then there is error so the if statement cathes the error.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let contractor = await Contractor.findOne({ email: req.body.email });
      if (contractor) {
        return res
          .status(400)
          .json({ error: "Sorry this email already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      let secPass = await bcrypt.hash(req.body.password, salt);

      contractor = await Contractor.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        phoneno: req.body.phoneno,
        experience: req.body.experience,
        cost: req.body.cost,
        work: req.body.work,
      });

      // The following code generates an authentication token which is provided to the user
      const data = {
        contractor: {
          id: contractor.id,
        },
      };
      // This gives the user the authtoken using which the token can be transformed back into the user.id .And because of the secret helps to detect if the token has been Tampered(changed)
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken: authtoken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE 2:Create a User using:POST "/api/contractor/login".Doesn't require login
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    // If error is empty is false then there is error so the if statement cathes the error.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let contractor = await Contractor.findOne({ email });
      if (!contractor) {
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
      }
      const passwordCompare = await bcrypt.compare(
        password,
        contractor.password
      );
      if (!passwordCompare) {
        return res.status(400).json({
          error: "Please try to login with correct credentials",
        });
      }

      // The following code generates an authentication token which is provided to the user
      const data = {
        contractor: {
          id: contractor.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken: authtoken, contractorId: contractor.id });
      //  res.json(contractor.id);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
);

//ROUTE 3: Contractor's data retrived through the use of _id to do CURD operatins login required :/api/contractor/fetchdata
router.get("/fetchdata", fetchcontractor, async (req, res) => {
  try {
    const contractorsId = await req.headers["contractor-id"];
    const contractor = await Contractor.findOne({ _id: contractorsId });

    if (!contractor) {
      return res.status(404).json({ error: "Contractor not found" });
    }

    res.json(contractor);

    res.json(req.contractor);
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occured");
  }
});

//ROUTE 4:getting all data for the public to see
router.get("/fetchalldata", async (req, res) => {
  try {
    let contractor = await Contractor.find();
    res.json(contractor);
  } catch (error) {
    res.status(500).send("Some error occured");
  }
});

//ROUTE 5:update an existing contractor info using:put  /api/contractor/updatedata/:id, login required.
        // The fetchcontractor is an middle ware that does the authentication using auth token
router.put(
  "/updatedata/:id",
  [
    body("name", "Name should have at least 3 characters").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
    body("email", "Enter a valid email").isEmail(),
    body("phoneno", "Phoneno must be at least have 10 numbers").isLength({
      min: 10,
    }),
    body(
      "experience",
      "provide work experience with more then 3 characters"
    ).isLength({ min: 3 }),
    body(
      "work",
      "provide your field of work  with more then 3 characters"
    ).isLength({ min: 3 }),
    body(
      "cost",
      "provide your price range  with more then 3 characters"
    ).isLength({ min: 3 }),
  ],
  fetchcontractor,
  async (req, res) => {
    // The above array will set the restrictions rules and the following code will give error if those rules are broken.
    const errors = validationResult(req);
    // If error is empty is false then there is error so the if statement cathes the error.
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, phoneno, experience, cost, work } = req.body;
    const newContractor = {};
    try {
      if (name) {
        newContractor.name = name;
      }
      if (email) {
        newContractor.email = email;
      }
      if (password) {
        newContractor.password = password;
      }
      if (phoneno) {
        newContractor.phoneno = phoneno;
      }
      if (experience) {
        newContractor.experience = experience;
      }
      if (cost) {
        newContractor.cost = cost;
      }
      if (work) {
        newContractor.work = work;
      }

      //Find the note to be updated and update it.
      // req.params.id is simply the note id that I pass as an parameter in the url(/api/contractor/updatenote/:id)
      let contractor = await Contractor.findById(req.params.id);
      if (!contractor) {
        return res.status(404).send("Not Found");
      }

      // contractor.id.toString() comes form params
      // req.contractor.id comes from fetchuser middleware
      if (contractor.id.toString() !== req.contractor.id) {
        return res.status(401).send("Not Allowed");
      }

      contractor = await Contractor.findByIdAndUpdate(
        req.params.id,
        { $set: newContractor },
        { new: true }
      );
      res.json({ contractor, contractorId: contractor.id });
    } catch (error) {
      console.error(error);
      res.status(500).send("Some error occured");
    }
  }
);

//ROUTE 6:Delete an existing contractor data using:delete  /api/contractor/deletenote/:id, login required
router.delete("/deletenote/:id", fetchcontractor, async (req, res) => {
  try {
    //Find the note to be deleted and delete it.
    // req.params.id is simply the note id that I pass as an parameter in the url(/api/contractor/deletenote/:id)
    let contractor = await Contractor.findById(req.params.id);
    if (!contractor) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this Note
    if (contractor.id.toString() !== req.contractor.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Contractor.findByIdAndDelete(req.params.id);
    res.json({  contractor: contractor });
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occured");
  }
});

// Route 7:This is search api for the search bar url(/api/contractor/search)
router.get("/search",  async (req, res) => {
  try {
    // const { q } = req.params.q;
        const q = await req.headers["query"];

    const ContractorData = await Contractor.find({
      work: { $regex: q, $options: "i" }, // webdev = Webdev
    }).sort({ createdAt: -1 }); // newly saved data will be shown first
    return res.status(200).json( ContractorData );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = router;
