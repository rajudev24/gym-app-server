const express = require("express")
const router = express.Router()
const clientController = require("../../controller/client.controller")
const authorization = require("../../middleware/authorization")
const verifyToken = require("../../middleware/verifyToken")

// create client 
router.route("/create-client")
.post( clientController.createAClinet)

// get client under coach 
router.route("/matched-client/email")
.get(verifyToken, authorization("coach"),clientController.getClients)

// filter a client for search 
router.route("/filter-client/filter")
.get(verifyToken,authorization("coach","client"),clientController.filterClients)

// search a client ---------------
router.route("/search-client/:search")
.get(verifyToken, authorization("coach"),clientController.getClientBySearch)

// get a single client by id -----------
router.route("/get-a-client/:id")
.get(verifyToken,authorization("coach"),clientController.getASingleClient)

// update client data --------------
router.route("/update-a-client/:id")
.patch(verifyToken,authorization("coach"),clientController.updateAclient)


// update a client after get the eamil------------
router.route("/update-client-signup/:id")
.patch(verifyToken,authorization("client"),clientController.updateAclientWithSignUp)


module.exports = router;