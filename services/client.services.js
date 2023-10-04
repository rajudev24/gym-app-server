const Client = require("../model/client")
const User = require("../model/user")
const bcrypt = require('bcryptjs');


// save a user services ---------------------------
exports.createAClientService = async (data) => {
    if (data) {
        const userData = await Client.findOne({ clientEmail: { $eq: data.clientEmail } })

        if (userData) {
            const result = "client is already created";
            return result
        }
        else {
            const result = await Client.create(data)
            return result;
        }
    }
    
}

// get matched client under specific coach -----------
exports.getClientsServices = async (email) => {
    const result = await Client.find({ coachEmail: email });
    return result
};


// search client by name ---------
exports.getClientBySerachService = async (clientFirstName) => {
    const result = (await Client.find({ clientFirstName: { $regex: new RegExp(clientFirstName, 'i') } }))
    return result
};


// get a single client service 
exports.getAsingleClientService = async (id) => {
    const result = await Client.findOne({ _id: id })
    return result
}

// update a client ------------
exports.updateAclientService = async (id, data) => {
    const result = await Client.updateOne({ _id: id }, {
        $set: {
            clientFirstName: data.clientFirstName,
            clientLastName: data.clientLastName,
            status: data.status,
            number: data.number,
            birthDate: data.birthDate,
            gender: data.gender,
            owner: data.owner
        }
    })

    // console.log("result client", result)
    return result
}


// filter a client 
exports.filterClientServices = async(status, position)=>{
    const filterQuery = {};

    if (status) {
        filterQuery.status = status;
    }
    if (position) {
        filterQuery.position = position;
    }
   

    const result = await Client.find(filterQuery)
    return result
}


// update a client by signUp------------
exports.updateAclientSignUpService = async (id, data) => {
    try {
             // Hash the new password
             const saltRounds = process.env.SALT_ROUND;
             const hashedPassword = bcrypt.hashSync(data.password, saltRounds);
 
        // Update the client's password field with the hashed password and change position to "connected"
     const clientUpdateResult =await Client.findByIdAndUpdate(id,
         { 
            // password: hashedPassword,
             position: "connected", 
             clientFirstName: data.clientFirstName, 
             clientLastName: data.clientLastName ,
             isVerified: true
            }
         );

    
        console.log("Stored hashed password:", data.password);
        console.log("hashedPassword",hashedPassword)
        // console.log("Hashed version of provided password:", bcrypt.hashSync(data.password, 10));
 // Create a new user using the provided client data
            const userCreateResult = await User.create({
             name: `${data.clientFirstName} ${data.clientLastName}`,
            email: data.clientEmail,
            password: hashedPassword,
            role: "client"
            });

        console.log("userCreateResult", userCreateResult.password);

        // console.log("userCreateResult",userCreateResult)

        return {
            clientUpdateResult,
            userCreateResult,
            message: "Client data updated and user created successfully."
        };
    } catch (error) {
        throw new Error('Failed to update password and position: ' + error.message);
    }
}