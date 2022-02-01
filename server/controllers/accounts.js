var express = require('express');
var router = express.Router();

var Account = require('../models/account');
const app = require('../app');

// post a new Account
router.post('/api/accounts', function (req, res, next) {
    var account = new Account(req.body);
    account.save(function (err) {
        if (err) {
            if (err.code == 11000) {
                res.status(406).json({ 'message': 'ERROR: This USERNAME is already in use choose another one' });
            }
            return next(err);
        }
        res.status(201).json(account);
    });

});



// GET an specific account using "id" 
router.get('/api/accounts/:id', function (req, res, next) {
    // Retrive a specific account
    var id = req.params.id;
    Account.find({ _id: id },
        function (err, account) {
            if (err) { return next(err); }
            if (account == null) {
                return res.status(404).json({ 'message': 'Account does not exist!' });
            }
            res.json(account);
        });


});



// GET all accounts and filter by first or last name
router.get('/api/accounts', function (req, res, next) {
    // Retrive a specific account
 

    if (req.query.fname || req.query.lname) {
        if (req.query.fname) {

            Account.find({ fname: req.query.fname },
                function (err, account) {
                    if (account == null) {
                        return res.status(404).json({ 'message': 'Account does not exist!' });
                    }
                    if (err) { return next(err); }
                    res.json(account);
                });
        }

        if (req.query.lname) {

            Account.find({ lname: req.query.lname },
                function (err, account) {
                    if (err) { return next(err); }
                    if (account == null) {
                        return res.status(404).json({ 'message': 'Account does not exist!' });
                    }
                    res.json(account);
                });
        }
    }
    else {
        Account.find(function (err, accounts) {
            if (err) { 
                
                return next(err); }
            if (accounts.length == 0) {

                return res.status(404).json({ error: 'There are no accounts in the system!' });
            }
            else res.json({ 'accounts': accounts });
        });


    }
});



// DELETE an specific account using ID
router.delete('/api/accounts/:id', function (req, res, next) {
    var id = req.params.id;
    Account.findOneAndRemove({ _id: id },
        function (err, account) {
            if (err) { return next(err); }
            if (account == null) {
                return res.status(404).json({ 'message': 'Account does not exist!' });
            }
            return res.json({ 'message': "The account has been removed!" });
        });

});

// DELETE all accounts in the database
router.delete('/api/accounts', function (req, res, next) {

    Account.deleteMany({}, function (err, accounts) {
        if (accounts == null) {
            return res.status(404).json({ 'message': 'No Existing Account!' });
        }
        if (err) { return next("All account have been removed!"); }

        res.json({ 'message': "All account have been removed!" });
    });

});

// PUT (Replace) an specific account (search by id)
router.put('/api/accounts/:id', function (req, res, next) {
    // Retrive a specific account
    var id = req.params.id;
    Account.findOneAndReplace({ _id: id }, req.body, null,
        function (err, account) {
            if (err) { return next(err); }
            if (account == null) {
                return res.status(404).json({ 'message': 'Account id does not exist!' });
            }
            res.json(account);
        });
});




// PATCH (Update) an specific account (search by id)
router.patch('/api/accounts/:id', function (req, res, next) {
    // Retrive a specific account
    var id = req.params.id;
    Account.findOneAndUpdate({ _id: id }, req.body, null,
        function (err, account) {
            if (err) { return next(err); }
            if (account == null) {
                return res.status(404).json({ 'message': 'Account id does not exist!' });
            }
            res.json(account);
        });
});



module.exports = router;
