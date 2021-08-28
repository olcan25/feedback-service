const express = require("express");
const router = express.Router();

const feedbackRouter = require("./feedback.router");

router.use("/feedbacks", feedbackRouter);

module.exports = router;
