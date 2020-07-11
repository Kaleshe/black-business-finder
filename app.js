const helmet = require('helmet');
const config = require('config');
const debug = require('debug')('app:startup');
const dotenv = require('dotenv');
const businesses = require('./routes/businesses');
const home = require('./routes/home');
const express = require('express');
const morgan = require('morgan');
const app = express();


app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/businesses', businesses);
app.use('/', home);

// Congig

dotenv.config();

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  debug('Morgan enabled...');
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

console.log(`app: ${app.get('env')}`);
console.log(config.get('name'));



