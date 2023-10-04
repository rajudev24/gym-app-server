const User = require("../model/user");
const bcrypt = require('bcryptjs');
// save a user services ---------------------------
exports.createAUserService = async (data, inviteToken) => {
  if (data) {
    const userData = await User.findOne({ email: { $eq: data.email } });

    if (userData) {
      const result = "User is already created";
      return result;
    } else {
      data.inviteToken = inviteToken;
      const result = await User.create(data);
      return result;
    }
  }
};

exports.acceptInviteService = async (token) => {
  const user = await User.findOne({ inviteToken: token });
  if (!user) {
    return res.status(404).send('Invitation not found.');
  }

  if (!user) {
    return res.status(404).send('Invitation not found.');
  }
  return user
}

exports.setPasswordService = async (id, newPassword) => {
  const user = await User.findOne({ _id: id });

  if (!user) {
    return res.status(404).send('User not found.');
  }
  const result = await User.updateOne(
    { _id: id },
    {
      $set: {
        password: newPassword,
        inviteToken: null,
        isPasswordChange: true,
        status: 'Connected'
      },
    }
  );
  return result;
}

// login a user service--------------------------------
exports.loginAUserService = async (email) => {
  const result = await User.findOne({ email: email });
  return result;
};

// user persistance
exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// forgot password service

exports.getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw new Error("Error fetching user by email");
  }
};


// forgot password 
exports.forgotPasswordService = async (
  id,
  resetToken,
  resetTokenExpiration
) => {
  const result = await User.updateOne(
    { _id: id },
    {
      $set: {
        resetToken: resetToken,
        resetTokenExpiration: resetTokenExpiration,
      },
    }
  );
  return result;
};

// reset password service
exports.getUserByResetToken = async (token) => {
  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() },
    });
    return user;
  } catch (error) {
    throw new Error("Error fetching user by reset token");
  }
};


//reset password service
exports.resetPasswordService = async (id, hashedPassword) => {
  const result = await User.updateOne(
    { _id: id },
    {
      $set: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiration: null,
      },
    }
  );
  return result;
};


// get all clients---------
exports.getAllClientsService = async () => {
  const result = await User.find({ role: "client" })
  return result;
}

// get all clients under coach ---------
exports.getAllClientUderCoachServie = async (id, filter) => {
  const query = { creatorId: id };
  if (filter && filter.filter && filter.filter.category) {
    query.category = filter.filter.category;
  }
  if (filter && filter.filter && filter.filter.status) {
    query.status = filter.filter.status;
  }
  const result = await User.find(query);
  return result;
};


// filter a client 
exports.filterClientServices = async (status, category) => {
  const filterQuery = {};

  if (status) {
    filterQuery.status = status;
  }
  if (position) {
    filterQuery.category = category;
  }


  const result = await User.find(filterQuery)
  return result
}

// search client by name ---------
exports.getClientBySerachService = async (firstName) => {
  const result = (await User.find({ firstName: { $regex: new RegExp(firstName, 'i') } }))
  return result
};


// get a single client service 
exports.getAsingleClientService = async (id) => {
  const result = await User.findOne({ _id: id })
  return result
}


// update a client by signUp------------
exports.updateAclientSignUpService = async (id, data) => {
  try {
    // Hash the new password
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(data.password, saltRounds);
    const result = await User.updateOne({ _id: id }, {
      $set: {
        password: hashedPassword,
        isPasswordChange: true
      }
    })
    return {
      result,
      message: "Client data updated and user created successfully."
    };
  } catch (error) {
    throw new Error('Failed to update password and position: ' + error.message);
  }
}

// update a client ------------
exports.updateAclientService = async (id, data) => {
  const result = await User.updateOne({ _id: id }, {
    $set: {
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      birthDate: data.birthDate,
      gender: data.gender,
      owner: data.owner,
      category: data.category
    }
  })

  // console.log("result client", result)
  return result
}


// add multiple user service 
exports.createMultipleUserService = async (userDataArray) => {
  if (Array.isArray(userDataArray) && userDataArray.length > 0) {
    const existingEmails = await User.find(
      { email: { $in: userDataArray.map(user => user.email) } },
      { email: 1 }
    );

    const existingEmailSet = new Set(existingEmails.map(user => user.email));
    const newUserArray = userDataArray.filter(user => !existingEmailSet.has(user.email));

    if (newUserArray.length > 0) {
      const result = await User.insertMany(newUserArray);
      return result;
    } else {
      const result = "No new users to create";
      return result;
    }
  }
};