const BodyWeight = require("../model/bodyWeight");

// create body matrics
exports.createBodyWeightService = async (data) => {
  const result = await BodyWeight.create(data);
  return result;
};

// get body metrics by clientId
exports.getBodyWeightMetricsByClientId = async (clientId) => {
  const result = await BodyWeight.find({ clientId: clientId });
  return result;
};
