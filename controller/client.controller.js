const { createAClientService, getClientsServices, getClientBySerachService, getAsingleClientService, updateAclientService, filterClientServices, updateAclientSignUpService } = require("../services/client.services");
const { sendMailWithGmail } = require("../utils/email");


// const asyncErrorHandler = require("../utils/asyncErrorHandler");
// const templete = require("../views/emailTemplete.ejs");


// save a client controller-------------------------------
// exports.createAClinet = async (req, res) => {
//     try {
//         const data = req.body;
//         // console.log("data",data)
//         const result = await createAClientService(data)

        
//         // Mail data 
//         const mailData = {
//             to: data.clientEmail,
//             subject: "aperio email",
//             text: "Hello world",
//             html: "hello"
//         }
        
//         // call email function --------
//         sendMailWithGmail(mailData)

//         res.status(200).json({
//             status: 'success',
//             massage: "CLient added Successfully!",
//             data: result
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: 'error',
//             massage: "Client added Error",
//             error: error.message
//         })
//     }
// }

// get matched client under specific coach -----------
exports.getClients = async (req, res) => {
    try {
        const email = req.query.email
        // console.log("query email",email)
        const result = await getClientsServices(email)
        // console.log("query result",result)
        res.status(200).json({
            status: "success",
            massage: "Get clients successful",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            massage: "Get clients by email Error.",
            error: error.message
        })
    }
}


// search a client -----------------
exports.getClientBySearch = async (req, res, next) => {

    try {
        const searchItem = req.params.search
        const result = await getClientBySerachService(searchItem)

        res.status(200).json({
            status: 'success',
            massage: "Client search Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: " client Not Found.",
            error: error.message
        })
    }
}


// get a client controller by id----------
exports.getASingleClient = async (req, res) => {
    try {

        const id = req.params.id
        const result = await getAsingleClientService(id)
        res.status(200).json({
            status: 'success',
            massage: "client get Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "client get Error",
            error: error.message
        })
    }
}


// update a client ----------
exports.updateAclient = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const result = await updateAclientService(id, body)
        // console.log("my client",result)
        res.status(200).json({
            status: 'success',
            massage: "client update Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "client update Error",
            error: error.message
        })
    }
}


// filter a client controller 
exports.filterClients = async(req, res)=>{
    try {

        const { status, position } = req.query;
        const result = await filterClientServices(status, position)

        res.status(200).json({
            status: 'success',
            massage: " Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: " Error",
            error: error.message
        })
    }
}



exports.updateAclientWithSignUp = async (req, res) => {
    try {
        const body = req.body
        const id = req.params.id
        const result = await updateAclientSignUpService(id, body)
        // console.log("my client",result)
        res.status(200).json({
            status: 'success',
            massage: "client signUp Successfully!",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "client signUp Error",
            error: error.message
        })
    }
}