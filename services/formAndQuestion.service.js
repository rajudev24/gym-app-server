const Faq = require("../model/formAndQuestion");

// create a faq
exports.createAFaqService = async (data) => {
  const result = await Faq.create(data);
  return result;
};

// get all faq
exports.getAllFaqService = async () => {
  const result = await Faq.find({});
  return result;
};

// get a specific faq
exports.getSpecificFaqService = async (id) => {
  const result = await Faq.findOne({ _id: id });
  return result;
};

// update only form
exports.updateOnlyFormService = async (formId, updateForm) => {
  try {
    // Find the form by its Object ID
    const form = await Faq.findOne({ _id: formId });

    if (!form) {
      return { success: false, message: "Form not found" };
    }

    // Update the 'form' field
    form.form = updateForm;

    // Save the updated form
    await form.save();

    return { success: true, message: "Form updated successfully" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server error" };
  }
};

// delete a faq

exports.deleteAFaqService = async (id) => {
  const result = await Faq.deleteOne({ _id: id });
  return result;
};
