const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const saucesRouter = require('./routes/sauce');
const userRouter = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://mehdi:azerty@cluster0.iorbq.mongodb.net/projet6?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());
// app.use(cors({origin: true, credentials: true}));
app.use('/api/sauces', saucesRouter)
// app.use(cors({origin: true, credentials: true}));
app.use('/api/auth', userRouter);

module.exports = app;