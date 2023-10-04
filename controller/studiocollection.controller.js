const {
  createStudioCollectionServices,
} = require("../services/studiocollection.services");

exports.createAStudioCollection = async (req, res) => {
  try {
    const data = req.body;
    const result = await createStudioCollectionServices(data);
    res.status(200).json({
      status: "success",
      massage: "Studio collection create Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Studio collection added Error",
      error: error.message,
    });
  }
};
