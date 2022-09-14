const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ContactModel = require('./models/Contacts');

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

app.listen(3003, () => {
  console.log('You are connected');
});
