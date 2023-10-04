const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.generateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        role: userInfo.role
    }
    // console.log(payload)

    const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: "7d"
    })
    return token

}

// This Token creating for send unique email to invite users
exports.generateRandomToken = () => {
    const tokenLength = 32;
    return crypto.randomBytes(tokenLength).toString('hex');
}