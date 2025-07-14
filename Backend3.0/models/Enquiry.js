const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  source: String,
  sourcingRm: String,
  businessStage: String,
  groupName: { type: String, default: "" },
  borrowerName: { type: String, default: "" },
  loanAmount: { type: Number, default: 0 },
  loanApplicationDate: Date,
  loanApplicationNumber: String,
  loanType: String,
  purpose: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// ✅ Export the model here
module.exports = mongoose.model('Enquiry', enquirySchema);
