const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ContactModel = require('./models/Contacts');

app.use(express.json());
app.use(cors());

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0.othk6t3.mongodb.net/ContactList?retryWrites=true&w=majority'
);

app.get('/addContact', async (req, res) => {
  const contact = new ContactModel({
    name: 'Enis',
    age: 24,
    address: '20 Russell St',
    mobile: '23123123',
    photo: 'https://picsum.photos/200/300',
  });

  await contact.save();
  res.send('Success');
});

app.listen(3003, () => {
  console.log('You are connected');
});
