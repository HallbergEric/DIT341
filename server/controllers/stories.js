var express = require('express');
var router = express.Router();
var Story = require('../models/story');
var Account = require('../models/account');
const app = require('../app');
const { findById } = require('../models/story');

// (a) POST /cars/:car_id/drivers
router.post('/api/accounts/:id/stories', function (req, res, next) {

    // Create a new story
    // Validate for an excisting account
    var id = req.params.id;
    Account.findById(id, function (err, account) {
       
        if (err) {
            return next(err);
        }

        if (account == null) {
            return res.status(404).json({ 'message': 'ERROR: There is no account to create this story' });
        }
        var story = new Story(req.body);
        
        story.save(function (err, story) {
            if (err) {
                return next(err);
            }
            res.status(201).json(story);
        });

    });

});

// GET an specific Story using "id" 
router.get('/api/stories/:id', function (req, res, next) {
    // Retrive a specific story
    var id = req.params.id;
    Story.find({ _id: id },
        function (err, story) {
            if (err) { return next(err); }
            if (story == null) {
                return res.status(404).json({ 'message': 'Story does not exist!' });
            }
            res.json(story);
        });


});

// GET all the stories using an Account _id 
// (b) GET /cars/:car_id/drivers (done)
router.get('/api/accounts/:id/stories', function (req, res, next) {
    // Retrive a specific account
    var id = req.params.id;
    Story.find({ account: id },
        function (err, story) {
            if (err) { return next(err); }
            if (story == null) {
                return res.status(404).json({ 'message': 'Account does not exist!' });
            }
            res.json(story);
        });


});


router.get('/api/accounts/:account/stories/:story', function (req, res, next) {
    // Get a specific story for a specific account
    // (c) GET /cars/:car_id/drivers/:driver_id

    Account.findById(req.params.account, function (err, account) {
        if (account == null) {
            res.status(404).json({ 'message': 'ERROR: There is no such account' });
        }
        if (err) {
            return next("Account does not exits!");
        }
    });
    Story.findById(req.params.story, function (err, story) {
        if (err) { return next("Story Does not Exist!"); }
        if (story == null) {
            return res.status(404).json({ 'message': 'Story does not exist!' });
        }
        res.json(story);
    });
});



// GET all the stories  
router.get('/api/stories/', function (req, res, next) {
    // Retrive all stories
    Story.find(function (err, story) {
        if (err) { return next(err); }
        if (story == null) {
            return res.status(404).json({ 'message': 'Stories do not exist!' });
        }
        else res.json({ 'story': story });
    });


});


// DELETE an specific story by its id
router.delete('/api/stories/:id', function (req, res, next) {
    var id = req.params.id;
    Story.findOneAndRemove({ _id: id },
        function (err, story) {
            if (err) { return next(err); }
            if (story == null) {
                return res.status(404).json({ 'message': 'story does not exist!' });
            }
            return res.json({ 'message': "This story has been deleted!" });
        });

});

// DELETE all stories in the database
router.delete('/api/stories/', function (req, res, next) {

    Story.deleteMany({}, function (err, story) {
        if (err) { return next(err); }
        if (story == null) {
            return res.status(404).json({ 'message': 'No stories exist!' });
        }
        return res.json({ 'message': "All stories have been deleted!" });
    });

});

// PUT (Replace) an specific Story (search by id)
router.put('/api/stories/:id', function (req, res, next) {
    // Retrive a specific story
    var id = req.params.id;
    Story.findOneAndReplace({ _id: id }, req.body, null,
        function (err, story) {
            if (err) { return next(err); }
            if (story == null) {
                return res.status(404).json({ 'message': 'Story does not exist!' });
            }
            res.json(story);
        });
});

// PATCH (Update) an specific story (search by id)
router.patch('/api/stories/:id', function (req, res, next) {
    // Retrive a specific account
    var id = req.params.id
    Story.findOneAndUpdate({ _id: id }, req.body, null,
        function (err, story) {
            if (err) { return next(err); }
            if (story == null) {
                return res.status(404).json({ 'message': 'Story does not exist!' });
            }
            res.json(story);
        });
});

module.exports = router;