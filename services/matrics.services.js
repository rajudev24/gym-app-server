const Matrics = require("../model/matrics");

exports.createMatricsService = async (data) => {
  const clientId = data.clientId;
  const existingUser = await Matrics.findOne({ clientId });

  if (!existingUser) {
    const createdMatrices = await Matrics.create(data);
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

// get a matrics service ---------------
exports.getMatricsService = async (id) => {
  const result = await Matrics.findOne({ _id: id });
  return result;
};

// get matrics by clientID -----------
exports.getMatricsByClientIdService = async (clientId) => {
  const result = await Matrics.find({ clientId: clientId });
  return result;
};

// update a matrics
exports.updateMetricInMetrics = async (id, metricCategory, updatedValue) => {
  try {
    const result = await Matrics.updateOne(
      { _id: id, [metricCategory + '._id']: updatedValue.updatedId },
      { $set: { [metricCategory + '.$.measurement.value']: updatedValue.value } }
    );
    if (result.nModified === 0) {
      throw new Error(`Item with _id ${updatedValue.updatedId} not found in the category.`);
    }
    return result;
  } catch (error) {
    throw error;
  }
};

// delete a matrics
exports.deleteMetricInMetrics = async (id, metricCategory, itemIdToDelete) => {
  try {
    const result = await Matrics.findOneAndUpdate(
      { _id: id },
      { $pull: { [metricCategory]: { _id: itemIdToDelete } } }
    );
    if (!result) {
      throw new Error(`Metrics document with ID ${id} not found.`);
    }
    return result;
  } catch (error) {
    throw error;
  }
};

