const upload = require("../config");
const {
  createProgressService,
  getProgressByClientIDService,
  updateAProgressService,
  deleteAProgressService,
} = require("../services/progress.services");

// save a progress controller-------------------------------
exports.createAProgress = async (req, res) => {
  try {
    const uploadSingle = upload("aperio-photos").single("image");
    uploadSingle(req, res, async (err) => {
      if (err) {
        // console.log(err)
        return res.status(400).json({ success: false, message: err.message });
      }
      const image = req?.file?.location;
      const data = req.body;
      const result = await createProgressService(data, image);
      res.status(200).json({
        status: "success",
        message: "Progress created successfully!",
        data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Error while adding progress",
      error: error.message,
    });
  }
};

// get all note by clientID--------------

exports.getProgressByClientId = async (req, res, next) => {
  try {
    const clientId = req.params.clientId;
    const result = await getProgressByClientIDService(clientId);

    res.status(200).json({
      status: "success",
      massage: " Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: " Not Found.",
      error: error.message,
    });
  }
};

// update a progress ----------
exports.updateAProgress = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const result = await updateAProgressService(id, body);
    res.status(200).json({
      status: "success",
      massage: "progress update Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "progress update Error",
      error: error.message,
    });
  }
};

// delete a progress ----------
exports.deleteAProgress = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await deleteAProgressService(id);
    res.status(200).json({
      status: "success",
      massage: "progress delete Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "progress delete Error",
      error: error.message,
    });
  }
};
