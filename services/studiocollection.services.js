const StudioCollection = require("../model/studio");

// create a studio collection
exports.createStudioCollectionServices = async (data) => {
  const result = await StudioCollection.create(data);
  return result;
};
