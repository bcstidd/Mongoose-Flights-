const Flight = require('../models/flight');
const Ticket = require('../controllers/flights');
module.exports = {
    index,
    new: newFlight,
    create,
    show,
};
function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
};
function newFlight(req, res) {
    res.render('flights/new');
}
function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights');
    });
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        console.log()
        res.render('flights/show', { flight })
    });
}
























