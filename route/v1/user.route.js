const express = require("express");
const router = express.Router();
const userController = require("../../controller/user.controller");
const verifyToken = require("../../middleware/verifyToken");
const authorization = require("../../middleware/authorization");

// signup route --------------------
router.route("/create-user").post(userController.createAUser);
router.route('/accept-invite/:token').post(userController.acceptInvite);
router.route('/set-password/:id').post(userController.setPassword);


// login router---------------------
router.route("/log-in").post(userController.loginAUser);

// user persistance ------------------
router.route("/me").get(verifyToken, userController.getMe);

// forgot password
router.route("/forgot-password").post(userController.forgotPassword);

// reset password
router.route("/reset-password/:token").post(userController.resetPassword);

// find all clients
router.route("/all-clients").get(verifyToken, authorization("coach"), userController.getAllClients)

// get all client uder a coach------
router.route("/underCreator/:creatorId").get(verifyToken, authorization("coach", "admin"), userController.getAllClientsUnderCoach)

// filter a client for search 
router.route("/filter-user/filter").get(verifyToken, authorization("coach"), userController.filterClients)

// search a client ---------------
router.route("/search-user/:search").get(verifyToken, authorization("coach"), userController.getClientBySearch)

// get a single client by id -----------
router.route("/get-a-user/:id").get(verifyToken, authorization("coach", "admin"), userController.getASingleClient)

// update a client after get the eamil------------
router.route("/update-user-signup/:id").patch(verifyToken, authorization("client", "coach"), userController.updateAclientWithSignUp)


// update a client data ------------
router.route("/update-a-user/:id")
    .patch(verifyToken, authorization("coach"), userController.updateAclient)

//add multiple-users 
router.route("/add-multiple-user")
    .post(userController.createMultipleUser)


module.exports = router;
