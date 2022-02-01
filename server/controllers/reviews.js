var express = require('express');
var router = express.Router();

var Review = require('../models/review');
var Account = require('../models/account');
var Story = require('../models/story');
const { json } = require('body-parser');



router.post('/api/reviews',  async function (req, res, next) {
    // Create a new review for a spicific story and using a specific account

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
        return res.status(400).json({ 'message': 'Could not create a review!' });
    }

    const review = new Review(req.body);
    review.save()
        .then(ret => res.status(201).json(ret))
        .catch(err => { console.log(err); res.status(400).json({ 'message': 'Could not save the review!' }) });

});



    
// GET an specific review using "id" 
router.get('/api/reviews/:id', function (req, res, next) {
    var id = req.params.id;
    Review.find({ _id: id },
        function (err, review) {
            if (review == null) {
                return res.status(404).json({ 'message': 'Review does not exist!' });
            }
            if (err) { return next(err); }
            res.json(review);
        });
});

// GET all the reviews
router.get('/api/reviews', function (req, res, next) {

    Review.find(function (err, reviews) {
    
        if (err) { return next(err); }
        if (reviews == null) {
            return res.status(404).json({ 'message': 'There are no reviews in the system!' });
        }
        else res.json({ 'reviews': reviews });
    });


});


// DELETE an specific review for a specific story by specific account
// (d) DELETE /cars/:car_id/drivers/:driver_id
router.delete('/api/accounts/:account/reviews/:reviewId', function (req, res, next) {
    Account.findById(req.params.account, function (err, account) {
        if (account == null) {
        return  res.status(404).json({ 'message': 'ERROR: There is no such account (review)' });
        }
            Review.findOneAndRemove(req.params.reviewId, function (err, review) {
                if (err) { return next(err) }
                if (review == null) {
                   return res.status(404).json({ 'message': 'ERROR! Review does not exist' })
                }
               return res.json({ 'message': "This review have been deleted!" })
            });
        });  
    });


// DELETE an specific review by its id
router.delete('/api/reviews/:id', function (req, res, next) {
    var id = req.params.id;
    Review.findOneAndRemove({ _id: id },
        function (err, review) {
         
            if (review == null) {
                return res.status(404).json({ 'message': 'review does not exist!' });
            }
            if (err) { return next(err); }
            return res.json({ 'message': "The review has been deleted!" });
        });

});


// Delete all reviews
router.delete('/api/reviews', function (req, res, next) {
    Review.deleteMany({}, function (err, review) {
        if (err) { return next(err) }
       return res.json({ 'message': "All reviews have been deleted!" })
    })
});



module.exports = router;