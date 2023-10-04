const {
  createAFaqService,
  getAllFaqService,
  getSpecificFaqService,
  updateOnlyFormService,
  deleteAFaqService,
} = require("../services/formAndQuestion.service");

exports.createAFaq = async (req, res) => {
  try {
    const data = req.body;
    const result = await createAFaqService(data);
    res.status(200).json({
      status: "success",
      massage: "Faq create Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Faq added Error",
      error: error.message,
    });
  }
};

// get all faq
exports.getAllFaq = async (req, res) => {
  try {
    const result = await getAllFaqService();
    res.status(200).json({
      status: "success",
      massage: " Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: " Not Found.",
      error: error.message,
    });
  }
};

// get a specific faq
exports.getAFaq = async (req, res) => {
  try {
    const id = req.params.id;
    // const arrayName = req.params.arrayname;
    const result = await getSpecificFaqService(id);
    res.status(200).json({
      status: "success",
      massage: " Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: " Not Found.",
      error: error.message,
    });
  }
};

// update only the form
exports.updateOnlyFaqForm = async (req, res) => {
  try {
    const formId = req.params.id;
    const updateForm = req.body.form;
    const result = await updateOnlyFormService(formId, updateForm);
    res.status(200).json({
      status: "success",
      massage: "update Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: " update error.",
      error: error.message,
    });
  }
};

// delete a faq
exports.deleteAFaq = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteAFaqService(id);
    res.status(200).json({
      status: "success",
      massage: "delete Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: " delete error.",
      error: error.message,
    });
  }
};
