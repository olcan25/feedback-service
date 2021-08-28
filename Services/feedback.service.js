const createFeedbackService = (model, res) => {
  return model
    .save()
    .then((data) => {
      res.status(200).json({
        success: true,
        message: "Added",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message:
          err.message || "Some error occurred while creating the Feedback.",
      });
    });
};

module.exports = {
  createFeedbackService,
};
