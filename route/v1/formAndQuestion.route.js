const express = require("express");
const router = express.Router();
const faqController = require("../../controller/formAndQuestion.controller");

// create a faq
router.route("/create-faq").post(faqController.createAFaq);

// get all faq
router.route("/get-all-faq").get(faqController.getAllFaq);

// get a form by id
router
  .route("/faq/:id")
  .patch(faqController.updateOnlyFaqForm)
  .get(faqController.getAFaq)
  .delete(faqController.deleteAFaq);

module.exports = router;
