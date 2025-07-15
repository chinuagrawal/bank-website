const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const { v4: uuidv4 } = require('uuid');




router.post('/', async (req, res) => {
  const {
    source,
    sourcingRm,
    businessStage,
    loanApplicationDate,
    loanApplicationNumber,
    loanType,
    purpose,
    firstName,
    middleName,
    lastName,
    phNumber,
    IFSCCode,
    bankName,

  } = req.body;

  try {
    const newEnquiry = new Enquiry({
      source,
      sourcingRm,
      businessStage,
      loanApplicationDate,
      loanApplicationNumber,
      loanType,
      purpose,
      firstName,
      middleName,
      lastName,
      phNumber,
      IFSCCode,
      bankName,
    });

    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry saved successfully' });
  } catch (err) {
    console.error('Error saving enquiry:', err);
    res.status(500).json({ message: 'Server error' });
  }
});





// GET /api/enquiry
router.get('/', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    console.error('🔥 Error in GET /api/enquiry:', err); // Add this
    res.status(500).json({ message: 'Error fetching enquiries' });
  }
});

module.exports = router;
