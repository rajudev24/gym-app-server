// const { updateAclientSignUpService } = require("../services/client.services");
const {
  createAUserService,
  loginAUserService,
  findUserByEmail,
  getUserByEmail,
  getUserByResetToken,
  forgotPasswordService,
  resetPasswordService,
  getAllClientsService,
  getAllClientUderCoachServie,
  filterClientServices,
  getClientBySerachService,
  getAsingleClientService,
  updateAclientSignUpService,
  updateAclientService,
  createMultipleUserService,
  acceptInviteService,
  setPasswordService
} = require("../services/user.services");
const { sendMailWithGmail } = require("../utils/email");
const { generateToken, generateRandomToken } = require("../utils/token");
const bcrypt = require("bcryptjs");

// save a user controller-------------------------------
exports.createAUser = async (req, res) => {
  try {
    const datas = req.body;
    // Ensure datas is an array
    const dataArray = Array.isArray(datas) ? datas : [datas];
    const results = [];
    for (const data of dataArray) {
      const inviteToken = generateRandomToken();
      const result = await createAUserService(data, inviteToken);
      const inviteLink = `https://aperio.netlify.app/invitation/${inviteToken}`;

      // Mail data 
      const mailData = {
        to: data.email,
        subject: "aperio email",
        text: "Hello world",
        html: "hello",
        inviteLink: inviteLink,
        creatorName: data.creatorName,
        receiverName: data.firstName
      }

      // call email function --------
      sendMailWithGmail(mailData);

      results.push(result);
    }

    res.status(200).json({
      status: "success",
      message: "User(s) inserted Successfully!",
      data: results,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User(s) insertion Error",
      error: error.message,
    });
  }
};


// accept invitation link controller 
exports.acceptInvite = async (req, res) => {
  const token = req.params.token;
  try {
    const result = await acceptInviteService(token);
    res.status(200).json({
      status: "success",
      massage: "User Found Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "User not found",
      error: error.message,
    });
  }
};

exports.setPassword = async (req, res) => {
  const id = req.body.id;
  const newPassword = req.body.password;
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);
  try {
    const result = await setPasswordService(id, hashedPassword);
    res.status(200).json({
      status: "success",
      massage: "Password updated Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Password update failed",
      error: error.message,
    });
  }
}
// login controller

exports.loginAUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      return res.status(400).json({
        status: "failed",
        message: "Please insert your email and password",
      });
    }
    const user = await loginAUserService(email);

    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User doesn't exist",
      });
    }
    const isPasswordValid = await user.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "failed",
        message: "Incorrect password",
      });
    }
    const token = generateToken(user);
    const userWithoutPassword = {
      ...user.toObject(),
      password: undefined,
    };

    res.status(200).json({
      status: "success",
      message: "User login successful",
      data: {
        user: userWithoutPassword,
        token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "User login error",
      error: error.message,
    });
  }
};

//  user persistance -------------------------------
exports.getMe = async (req, res) => {
  try {
    let user = await findUserByEmail(req?.user?.email);
    const { password: pwd, ...others } = user.toObject();
    res.status(200).json({
      status: "success",
      data: others,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
};

// forgot password controller
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }

    const resetToken = generateToken(user);
    const resetTokenExpiration = Date.now() + 3600000;
    const result = await forgotPasswordService(
      user._id,
      resetToken,
      resetTokenExpiration
    );

    const resetLink = `https://aperio.netlify.app/reset-password/${resetToken}`;
    // Create the mailData object
    const mailData = {
      to: user.email,
      subject: "Password Reset Request",
      text: `To reset your password, click on the following link: ${resetLink}`,
    };

    await sendMailWithGmail(mailData);

    return res.status(200).json({
      status: "success",
      message: "Password reset link sent successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Error sending reset password email",
      error: error.message,
    });
  }
};

// reset password controller
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;
    const user = await getUserByResetToken(token);
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "Invalid or expired reset token",
      });
    }
    if (user.resetTokenExpiration < Date.now()) {
      return res.status(400).json({
        status: "failed",
        message: "Reset token has expired",
      });
    }

    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);
    const result = await resetPasswordService(user._id, hashedPassword);

    return res.status(200).json({
      status: "success",
      message: "Password reset successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error resetting password",
      error: error.message,
    });
  }
};


// get all clients ----------

exports.getAllClients = async (req, res) => {
  try {
    const result = await getAllClientsService()
    res.status(200).json({
      status: 'success',
      massage: "Successfully!",
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

// get all client under coach 
exports.getAllClientsUnderCoach = async (req, res) => {
  try {
    const creatorId = req.params.creatorId
    const filter = req.query
    const result = await getAllClientUderCoachServie(creatorId, filter)
    res.status(200).json({
      status: 'success',
      massage: "Successfully!",
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

// filter a client 
exports.filterClients = async (req, res) => {
  try {

    const { status, category } = req.query;
    const result = await filterClientServices(status, category)

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

// update client with signup 
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


// add multiple user 
exports.createMultipleUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await createMultipleUserService(data);

    if (Array.isArray(result) && result.length > 0) {
      const mailPromises = result.map(user => {
        const mailData = {
          to: user.email,
          subject: "aperio email",
          text: "Hello world",
          html: "hello"
        };
        return sendMailWithGmail(mailData);
      });

      await Promise.all(mailPromises);
    }

    res.status(200).json({
      status: "success",
      massage: "Users inserted Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: "Users insertion Error",
      error: error.message,
    });
  }
};