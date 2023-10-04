const {
  getBodyMetricsByClientId,
  createBodyFatMatricsService,
} = require("../services/bodyFat.services");

exports.createBodyFat = async (req, res) => {
  try {
    const data = req.body;
    const result = await createBodyFatMatricsService(data);
    res.status(200).json({
      status: "success",
      massage: "Body Matrics create Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Body Matrics added Error",
      error: error.message,
    });
  }
};

// get all metrics by clientId
exports.getBodyMetrics = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    // console.log(clientId);
    const result = await getBodyMetricsByClientId(clientId);
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
