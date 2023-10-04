// const mongoose = require("mongoose");

// // common schema
// const commonSchema = {
//   collectionName: {
//     type: String,
//   },
//   collectionInfo: [
//     {
//       sectionName: {
//         type: String,
//       },
//       addResource: {
//         type: String,
//       },
//     },
//   ],
//   addNewSection: {
//     type: String,
//   },
// };

// // collection schema
// const collectionSchema = new mongoose.Schema({
//   newCollection: {
//     type: String,
//   },

//   collection: [...commonSchema],
// });

// const resourceSchema = new mongoose.Schema({
//   addLink: {
//     type: String,
//   },
//   document: [
//     {
//       resourceName: {
//         type: String,
//       },
//       resourceFile: {
//         type: String,
//       },
//     },
//   ],
//   form: [
//     {
//       resourceName: {
//         type: String,
//       },
//       resourceImage: {
//         type: String,
//       },
//     },
//   ],
//   resource: [...commonSchema],
// });

// const studioSchema = new mongoose.Schema(
//   {
//     collection: [collectionSchema],
//     resource: [resourceSchema],
//     clientId: {
//       type: String,
//     },
//     coachId: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//     sparse: true,
//   }
// );

// const Studio = mongoose.model("Studio", studioSchema);

// module.exports = Studio;
