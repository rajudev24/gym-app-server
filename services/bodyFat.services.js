const BodyFat = require("../model/bodyFat");

// create body matrics
exports.createBodyFatMatricsService = async (data) => {
  const result = await BodyFat.create(data);
  return result;
};

// get body metrics by clientId
exports.getBodyMetricsByClientId = async (clientId) => {
  const result = await BodyFat.find({ clientId: clientId });
  return result;
};
