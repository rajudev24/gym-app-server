const Food = require("../model/food");

// create a food journal
exports.createAFoodJournalService = async (data, image) => {
  const result = await Food.create(data, image);
  return result;
};

// get food journal by clientId

exports.getFoodByClientIdServices = async (clientId) => {
  const result = await Food.find({ clientId: clientId });
  return result;
};
