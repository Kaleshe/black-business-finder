const Joi = require('joi');
const express = require('express');
const router = express.Router();
const businessesJSON = require('../businesses.json');

router.get('/', (req, res) => {
  res.send(businessesJSON);
});

router.get(`/:id`, (req, res) => {
  const business = businessesJSON.find(c => c.id === parseInt(req.params.id));
  if (!business) return res.status(404).send('The business with the given ID was not found.'); 
  res.send(business);
});

router.post('/', (req, res) => {
  const { error } = validateBusiness(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const business = {
      id: businessesJSON.length + 1,
      name: req.body.name,
      type: req.body.type,
      location: [parseFloat(req.body.lat), parseFloat(req.body.long)]   
  };

  businessesJSON.push(business);
  res.send(businessesJSON);
});

router.put('/:id', (req, res) => {
  const business = businessesJSON.find(c => c.id === parseInt(req.params.id));
  if (!business) return res.status(404).send('The business with the given ID was not found.');

  const { error } = validateBusiness(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (req.body.name) business.name = req.body.name;
  if (req.body.type) business.type = req.body.type;
  if (req.body.location) business.location = [req.body.lat, req.body.long];

  res.send(business);
});

router.delete('/:id', (req, res) => {
  const business = businessesJSON.find(c => c.id === parseInt(req.params.id));
  if (!business) return res.status(404).send('The business with the given ID was not found.');

  const index = businessesJSON.indexOf(business);
  businessesJSON.splice(index, 1);

  res.send(business);
});

function validateBusiness(course) {
  const schema = {
      name: Joi.string().min(3),
      type: Joi.string(),
      lat: Joi.number(),
      long: Joi.number()
  };

  return Joi.validate(course, schema);
}

module.exports = router;