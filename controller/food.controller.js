const upload = require("../config");
const { createAFoodJournalService, getFoodByClientIdServices } = require("../services/food.services");

//create a food journal controller
exports.createAFoodJournal = async (req, res) => {
  try {
    const uploadSingle = upload("aperio-photos").single("image");
    uploadSingle(req, res, async (err) => {
      if (err) {
        // console.log(err)
        return res.status(400).json({ success: false, message: err.message });
      }
      // console.log(req.file);
      const image = req?.file?.location;
      // console.log(image);
      const data = req.body;
      // console.log(data);
      const result = await createAFoodJournalService(data, image);
      res.status(200).json({
        status: "success",
        message: "Food Journal created successfully!",
        data: result,
      });
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Error while adding Food Journal",
      error: error.message,
    });
  }
};

// client wise food journal
exports.getFoodJournalByClientId = async (req, res) => {
  try {
    const clientId = req.params.clientId;
    const result = await getFoodByClientIdServices(clientId);

    res.status(200).json({
      status: "success",
      massage: " Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "  Not Found.",
      error: error.message,
    });
  }
};
