const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const { v4: uuidv4 } = require('uuid');

// GET /api/enquiry/:loanApplicationNumber
router.get('/:loanApplicationNumber', async (req, res) => {
  try {
    const enquiry = await Enquiry.findOne({ loanApplicationNumber: req.params.loanApplicationNumber });
    if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });
    res.json(enquiry);
  } catch (error) {
    console.error('Error fetching enquiry:', error);
    res.status(500).json({ message: 'Server error' });
  }
});



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
