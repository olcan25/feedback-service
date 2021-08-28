const Feedback = require("../Models/Feedback");
const feedbackService = require("../Services/feedback.service");

const getAllFeedbacks = (req, res, next) => {
  Feedback.find().then((feedbacks) => {
    return res
      .status(200)
      .json(feedbacks)
      .catch((err) =>
        res.status(404).json({
          success: false,
          message: err,
        })
      );
  });
};

const createFeedback = (req, res, next) => {
  // const feedback = req.body;
  // const feedback = new Feedback({
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   title: req.body.title,
  //   message: req.body.message,
  //   phone: req.body.phone,
  // });

  const data = req.body;

  const feedback = new Feedback({
    ...data,
  });

  feedbackService.createFeedbackService(feedback, res);
};

const deleteFeedback = (req, res, next) => {
  const { id } = req.params;

  Feedback.findByIdAndRemove(id)
    .then(() =>
      res.status(200).json({
        message: "Deleted",
        success: true,
      })
    )
    .catch((err) =>
      res.status(404).json({
        success: false,
        message: err.message,
      })
    );
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  deleteFeedback,
};
