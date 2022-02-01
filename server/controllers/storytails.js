var express = require('express');
var router = express.Router();

var StoryTail = require('../models/storyTail');
var Story = require('../models/story');
var Account = require('../models/account');
const app = require('../app');

// post a new storyTail
router.post('/api/storytails', async function (req, res, next) {
    try {
        const account = await Account.findById(req.body.account);
        if (account == null) {
            return res.status(404).json({ 'message': 'ERROR: There is no account to create a story tail' });
        }

        const story = await Story.findById(req.body.story)
        if (story == null) {
            return res.status(404).json({ 'message': 'ERROR: There is no story to create a story tail' });
        }

    } catch (err) {
        return res.status(400).json({ 'message': 'Could not create a story tail!' });
    }

    const storyTail = new StoryTail(req.body);
    storyTail.save()
        .then(ret => res.status(201).json(ret))
        .catch(err => { console.log(err); res.status(400).json({ 'message': 'Could not save the story tail!' }) });
});

// GET all the storytails for a story_id 
router.get('/api/stories/:id/storytails', function (req, res, next) {
    // Retrive a specific account
    var id = req.params.id;
    StoryTail.find({ story: id },
        function (err, storyTail) {
            if (err) { return next(err); }
            if (storyTail == null) {
                return res.status(404).json({ 'message': 'Story does not exist!' });
            }
            res.json(storyTail);
        });


});


// GET an specific storyTail using "id" 
router.get('/api/storytails/:id', function (req, res, next) {
    // Retrive a specific storyTail
    var id = req.params.id;
    StoryTail.find({ _id: id },
        function (err, storyTail) {
            if (err) { return next(err); }
            if (storyTail == null) {
                return res.status(404).json({ 'message': 'storytail does not exist!' });
            }
            res.status(200).json(storyTail);
        });
});

// GET all the stories using an Story _id 
router.get('/api/storytails/:id/stories', function (req, res, next) {
    // Retrive a specific account
    var id = req.params.id;
    StoryTail.find({ Story: id },
        function (err, story) {
            if (err) { return next(err); }
            if (story == null) {
                return res.status(404).json({ 'message': 'Account does not exist!' });
            }
            res.json(story);
        });


});

// GET all the storyTail
router.get('/api/storytails', function (req, res, next) {
    // Retrive a specific storyTail
    StoryTail.find(function (err, storyTail) {
        if (err) { return next(err); }
        if (storyTail == null) {
            return res.status(404).json({ 'message': 'There are no storytails!' });
        }
        else res.json({ 'storyTail': storyTail });
    });


});

// DELETE an specific storyTail using ID
router.delete('/api/storytails/:id', function (req, res, next) {
    var id = req.params.id;
    StoryTail.findOneAndRemove({ _id: id },
        function (err, storyTail) {
            if (err) { return next(err); }
            if (storyTail == null) {
                return res.status(404).json({ 'message': 'StoryTail does not exist!' });
            }
            res.json(storyTail);
        });

});

// DELETE all storyTail in the database
router.delete('/api/storytails', function (req, res, next) {
    StoryTail.deleteMany({}, function (err, storyTail) {
        if (err) { return next(err); }
        if (storyTail == null) {
            return res.status(404).json({ 'message': 'No Existing StoryTails!' });
        }
        res.json(storyTail);
    });

});

// PUT (Replace) an specific storyTail (search by id)
router.put('/api/storytails/:id', function (req, res, next) {
    // Retrive a specific storyTail
    var id = req.params.id;
    StoryTail.findOneAndReplace({ _id: id }, req.body, null,
        function (err, storyTail) {
            if (err) { return next(err); }
            if (storyTail == null) {
                return res.status(404).json({ 'message': 'Story id does not exist!' });
            }
            res.json(storyTail);
        });
});

// PATCH (Update) an specific storyTail (search by id)
router.patch('/api/storytails/:id', function (req, res, next) {
    // Retrive a specific account
    var id = req.params.id;
    StoryTail.findOneAndUpdate({ _id: id }, req.body, null,
        function (err, storyTail) {
            if (err) { return next(err); }
            if (storyTail == null) {
                return res.status(404).json({ 'message': 'Story tail does not exist!' });
            }
            res.json(storyTail);
        });
});



module.exports = router;