const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ContactModel = require('./models/Contacts');
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.othk6t3.mongodb.net/ContactList?retryWrites=true&w=majority',
  { useNewUrlParser: true }
);

app.post('/addContact', async (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const mobile = req.body.mobile;
  const contact = new ContactModel({
    name: name,
    address: address,
    mobile: mobile,
  });
  await contact.save();
  res.send('Success');
});

app.get('/read', (req, res) => {
  ContactModel.find({}, (error, result) => {
    if (error) {
      res.send(error);
    } else {
      res.send(result);
    }
  });
});

app.put('/update', async (req, res) => {
  const newName = req.body.newName;
  const newAddress = req.body.newAddress;
  const newMobile = req.body.newMobile;
  const id = req.body.id;

  try {
    await ContactModel.findById(id, (err, contactToUpdate) => {
      contactToUpdate.name = String(newName);
      contactToUpdate.address = String(newAddress);
      contactToUpdate.mobile = Number(newMobile);
      contactToUpdate.save();
    });
  } catch (error) {
    console.log(error);
  }
  res.send('Updated');
});

app.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  await ContactModel.findByIdAndDelete(id).exec();
  res.send('Itme Deleted');
});

app.listen(process.env.PORT || 3003, () => {
  console.log('You are connected');
});
