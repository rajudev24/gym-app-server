// const CustomError = require("../utils/CustomError")

// const devErrors = (res, error) =>{
//     res.status(error.statusCode).json({
//         status: error.statusCode,
//         message: error.message,
//         stackTrace : error.stack,
//         error: error
//     })
// }


// const validationError =(err) =>{
// const msg = `${err.message}`
//   return new CustomError(msg, 400)
// }

// // production error function  
// const productionError = (res, error) =>{

//         if(error.isOperational){
//             res.status(error.statusCode).json({
//                 status: error.statusCode,
//                 message: error.message
//             })
//         }
//         else{
//             res.status(500).json({
//                 status: "Error",
//                 message: "Something went wrong , Please Try Again later" 
//             })
//         }
// }


// module.exports =  (error,req,res,next)=>{
//     error.statusCode =  error.statusCode || 500
//     error.status = error.status || "error"

// if(process.env.NODE_ENV=== "development"){
//     devErrors(res, error)
// }
// else if(process.env.NODE_ENV=== "production"){

//     // check error type 
//     if(error.name === "ValidationError"){
//        error = validationError(error)
//     }

//     productionError(res, error)
// }

// }