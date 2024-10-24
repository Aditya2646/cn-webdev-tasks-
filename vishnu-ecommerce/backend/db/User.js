const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, default: false } // New field to indicate admin status
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = User;
