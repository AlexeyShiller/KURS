const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

mongoose.connect('mongodb+srv://kursProj:1234@cluster1.q855i.mongodb.net/kursProj?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
