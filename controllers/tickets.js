const Flight = require('../models/flight');
module.exports = {
    show
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
      res.render('flights/show', { title: 'Flight Detail', flight });
    });
  })
}
