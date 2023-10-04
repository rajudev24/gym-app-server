const { createATeammateService } = require("../services/teammate.services");
const { sendMailWithGmail } = require("../utils/email");

// save a client controller-------------------------------
exports.createATeammate = async (req, res) => {
    try {
        const data = req.body;
        console.log("team data",data)
        const result = await createATeammateService(data)
            console.log("team result",result)
         // Mail data 
         const mailData = {
            to:  data.coachEmail,
            subject: "aperio email",
            text: "Hello world",
            html: "hello"
        }

        
        // call email function --------
        sendMailWithGmail(mailData)


        res.status(200).json({
            status: 'success',
            massage: "Teammate added Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Teammate added Error",
            error: error.message
        })
    }
}
