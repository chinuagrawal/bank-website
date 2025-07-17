const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  // Borrower & Group Details
  groupName: String,
  groupCode: String,
  kycCode: String,
  userName: String,
  aadharNumber: String,
  panCard: String,
  createdBy: {
  type: String,
  required: true
},
createdByRole: {
  type: String
},

  // Loan & Sourcing Info
  source: String,
  sourcingRm: String,
  businessStage: String,
  loanAmount: { type: Number, default: 0 },
  loanApplicationDate: Date,
  loanApplicationNumber: String,
  loanType: String,
  purpose: String,

  // Applicant Personal Info
  firstName: String,
  middleName: String,
  lastName: String,
  phNumber: String,

  // Bank Details
  IFSCCode: String,
  bankName: String,

  // Approval Workflow Fields
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  rejectionReason: String,
  rejectedBy: String, // 'Team Lead', 'Team Manager', 'Roshan'

  approvalHistory: [
    {
      level: String, // 'Team Lead', 'Team Manager', 'Roshan'
      status: String, // 'approved' or 'rejected'
      comment: String,
      date: { type: Date, default: Date.now }
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Enquiry', enquirySchema);
