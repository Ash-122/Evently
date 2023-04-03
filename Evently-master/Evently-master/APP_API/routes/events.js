const express = require('express');
const router = express.Router();
const ctrlEvent = require('../controllers/event');
// locations
router
    .route('/events')
    .get(ctrlEvent.getEvents)
    .post(ctrlEvent.createEvent);
router
.route('/events/:eventId')
    .get(ctrlEvent.getSingleEvent)
    .put(ctrlEvent.updateEvent)
    .delete(ctrlEvent.deleteEvent);

module.exports = router;