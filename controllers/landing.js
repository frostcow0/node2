const models = require('../models');

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
};

exports.submit_lead = function(req, res, next) {
  reutrn models.Lead.create({
    email:req.body.lead_email
  }).then(lead=> {
    res.redirect('/';)
  })
};