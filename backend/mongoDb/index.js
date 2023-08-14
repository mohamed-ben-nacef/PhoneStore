const mongoose = require("mongoose");
const phone =require("./product")
const mongoUri = "mongodb://127.0.0.1/phoneStore";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

const getAllPhone = () => {
  return phone.find()
}
const addPhone = (newPhoneData) => {
  const newPhone = new phone(newPhoneData);
  return newPhone.save();
};
const deletePhone = (phoneId) => {
  return phone.findByIdAndDelete(phoneId);
 };
 const update = (phoneId, updatedData) => {
  return phone.findByIdAndUpdate(phoneId, updatedData, { new: true });
};
module.exports = {
  getAllPhone,
  addPhone,
  deletePhone,
  update,
    db,
  };