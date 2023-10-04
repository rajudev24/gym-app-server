const express = require("express");
const router = express.Router();
const foodController = require("../../controller/food.controller");

// create a food journal
router.route("/create-food-journal").post(foodController.createAFoodJournal);

// get a single food
router
  .route("/get-Client-foodJournal/:clientId")
  .get(foodController.getFoodJournalByClientId);

module.exports = router;
