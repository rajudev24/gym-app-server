const {
  createASettingService,
  updateSettingService,
  getSettingService,
} = require("../services/settings.services");

// save a settings controller-------------------------------
exports.createASettings = async (req, res) => {
  try {
    const data = req.body;
    const result = await createASettingService(data);
    res.status(200).json({
      status: "success",
      message: "settings create Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "settings added Error",
      error: error.message,
    });
  }
};
exports.getSettings = async (req, res) => {
  try {
    const clientId = req.params.id;
    const result = await getSettingService(clientId);
    res.status(200).json({
      status: "success",
      message: "settings retrived Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "settings added Error",
      error: error.message,
    });
  }
};

// update settings ----------
exports.updateASettings = async (req, res) => {
  try {
    const updatedData = req.body;
    const id = req.params.id;
    console.log(updatedData)
    // const result = await updateSettingService(id, updatedData);
    res.status(200).json({
      status: "success",
      massage: "Settings update Successfully!",
      // data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Settings update Error",
      error: error.message,
    });
  }
};
