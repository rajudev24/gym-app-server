const {
  createMatricsService,
  getMatricsService,
  getMatricsByClientIdService,
  deleteAMatricsService,
  deleteAMatricService,
  updateMetricInMetrics,
  deleteMetricInMetrics,
} = require("../services/matrics.services");

// save a matrics controller-------------------------------
exports.createAMatrics = async (req, res) => {
  try {
    const data = req.body;
    const result = await createMatricsService(data);
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

// get a matrics by id -------------
exports.getAMatrics = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await getMatricsService(id);

    res.status(200).json({
      status: "success",
      massage: "Matrics get Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Matrics found Error",
      error: error.message,
    });
  }
};

// update a matrics controller by id----------
exports.updateAMatrics = async (req, res) => {
  try {
    const id = req.params.id;
    const metricCategory = req.params.metricName;
    const updatedValue = req.body;
    const result = await updateMetricInMetrics(id, metricCategory, updatedValue);
    res.status(200).json({
      status: "success",
      message: "Matrics update Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "matrics update Error",
      error: error.message,
    });
  }
};

// get a matrics by id -------------
exports.getMatricsByClientId = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const result = await getMatricsByClientIdService(clientId);
    res.status(200).json({
      status: "success",
      message: "Matrics get Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Matrics found Error",
      error: error.message,
    });
  }
};

// delete a matrics

exports.deleteAMatric = async (req, res) => {
  try {
    const id = req.params.id;
    const metricCategory = req.params.metricName;
    const itemIdToDelete = req.body.itemIdToDelete
    const result = await deleteMetricInMetrics(id, metricCategory, itemIdToDelete);
    res.status(200).json({
      status: "success",
      message: `Metrics deleted successfully!`,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Metric deletion error",
      error: error.message,
    });
  }
};
