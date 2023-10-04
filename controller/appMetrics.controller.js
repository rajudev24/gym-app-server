const {
  generateAMetricsService,
  getMetricsByClientId,
} = require("../services/appMetrics.services");

exports.generateAMatrics = async (req, res) => {
  try {
    const data = req.body;
    const result = await generateAMetricsService(data);
    res.status(200).json({
      status: "success",
      massage: "Matrics create Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Matrics added Error",
      error: error.message,
    });
  }
};

// get all metrics by clientId
exports.getMetrics = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    // console.log(clientId);
    const result = await getMetricsByClientId(clientId);
    // console.log(result);
    res.status(200).json({
      status: "success",
      massage: "Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: " Error",
      error: error.message,
    });
  }
};
