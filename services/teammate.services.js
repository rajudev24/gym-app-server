const Teammate = require("../model/teammate")

// create a teammate -----------------

exports.createATeammateService = async (data) => {
    if (data) {
        const userData = await Teammate.findOne({ coachEmail: { $eq: data.coachEmail } })

        if (userData) {
            const result = "Coach is already created";
            return result
        }
        else {
            const result = await Teammate.create(data)
            return result;
        }
    }
}