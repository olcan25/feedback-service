const express = require("express");
const router = express.Router();
const feedbackController = require("../Controllers/feedback.controller");

router.get("/", feedbackController.getAllFeedbacks);
router.post("/", feedbackController.createFeedback);
router.delete("/:id", feedbackController.deleteFeedback);

module.exports = router;
