
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
};

function newTicket(res, req) {
    const flight = req.params.id
    res.render('tickets/new',{flight}) 
}

function create(req, res) {
        const ticket = new Ticket(req.body);
        ticket.flight = req.params.id
        ticket.save(function(err) {
            if (err) return res.redirect('/tickets/new');
            // console.log(flight);
            res.redirect('/flights');
        });
    }
