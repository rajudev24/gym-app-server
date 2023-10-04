const AppMetrics = require("../model/appMetrics");

// create a metrics service
exports.generateAMetricsService = async (data) => {
  const clientId = data.clientId;
  const existingUser = await AppMetrics.findOne({ clientId });

  if (!existingUser) {
    const createdMatrices = await AppMetrics.create(data);
    return createdMatrices;
  } else {
    Object.keys(data).forEach((category) => {
      const measurementValue = data[category][0]?.measurement?.value;
      if (measurementValue !== undefined && measurementValue !== "") {
        if (!existingUser[category]) {
          existingUser[category] = data[category];
        } else {
          existingUser[category].push(...data[category]);
        }
      }
    });
    await existingUser.save();
    return existingUser;
  }
};

// get metrics by clientId
exports.getMetricsByClientId = async (clientId) => {
  const result = await AppMetrics.find({ clientId: clientId });
  return result;
};
