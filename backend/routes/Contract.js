const express = require("express");
const router=express.Router();
const Contractor=require("../model/Contractors");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");



//ROUTE 1:Create a User using:POST "/api/contractor/createcontractor".Doesn't require login

router.post("/createcontractor", [
  body("name", "Enter a valid name").isLength({ min: 3 }),
  body("password", "Password must be atleast 5 characters").isLength({
    min: 5,
  }),
  body("email", "Enter a valid email").isEmail(),
  body("phoneno", "Enter an valid phone no").isLength({ min: 10 }),
  body("experience", "provide work experience").isLength({ min: 3 }),
],async (req,res)=>{
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
        phoneno:req.body.phoneno,
        experience:req.body.experience,
        cost :req.body.cost
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Some error occured");
    }
});

module.exports=router;