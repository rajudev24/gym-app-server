const {
  createBodyWeightService,
  getBodyWeightMetricsByClientId,
} = require("../services/bodyweight.services");

// create body weight
exports.createBodyWeight = async (req, res) => {
  try {
    const data = req.body;
    const result = await createBodyWeightService(data);
    res.status(200).json({
      status: "success",
      massage: "Body weight create Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Body Weight added Error",
      error: error.message,
    });
  }
};

// get all body weight metrics by clientId
exports.getBodyWeightMetrics = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    // console.log(clientId);
    const result = await getBodyWeightMetricsByClientId(clientId);
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
