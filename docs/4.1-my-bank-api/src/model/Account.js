import mongoose from "mongoose";

const accountSchema =  mongoose.Schema({

  agency: {
    type: Number,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});

const Account = mongoose.model("account", accountSchema);

export default Account;
