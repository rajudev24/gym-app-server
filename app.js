const express = require("express");
const app = express();
const cors = require("cors");

// import routes
const userRoute = require("./route/v1/user.route");
// const clientRoute = require("./route/v1/client.route")
const matricsRoute = require("./route/v1/matrics.route");
const noteRoute = require("./route/v1/note.route");
const limitationRoute = require("./route/v1/limitation.route");
const goalRoute = require("./route/v1/goal.route");
const imageRoute = require("./route/v1/image.route");
const addNewMatricRoute = require("./route/v1/addNewMatrics.route");
const workoutRoute = require("./route/v1/workout.route");
const progressRoute = require("./route/v1/progress.route");
const typeRoute = require("./route/v1/type.route");
const exerciseRoute = require("./route/v1/exercise.route");
// const teammateRoute = require("./route/v1/teammate.route")
const chatRoute = require("./route/v1/chatRoute");
const messageRoute = require("./route/v1/messageRoute");
const taskRoute = require("./route/v1/task.route");
const settingsRoute = require("./route/v1/settings.route");
const formAndQuestionRoute = require("./route/v1/formAndQuestion.route");
const foodRoute = require("./route/v1/food.route");
const appMetricRoute = require("./route/v1/appMetrics.route");
const studioCollectionRouter = require("./route/v1/studiocollection.route");
const bodyFatRouter = require("./route/v1/bodyFat.route");
const bodyWeightRouter = require("./route/v1/bodyWeight.route");
const myTaskRoute = require("./route/v1/myTask.route");
// const CustomError = require("./utils/CustomError");
// const globalErrorHandler = require("./controller/error.controller")

// middleware
app.use(express.json());

// Configure CORS with specific origins
const corsOptions = {
  origin: ["https://aperio.netlify.app", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Use the cors middleware with custom options
app.use(cors(corsOptions));

app.set("view engine", "ejs");

// user route -------
app.use("/api/v1/user", userRoute);

// client route --------------
// app.use("/api/v1/client", clientRoute);

// matrics route ------------
app.use("/api/v1/matrics", matricsRoute);

// note route -----------
app.use("/api/v1/note", noteRoute);

// limitation-----------
app.use("/api/v1/limitation", limitationRoute);

// goal route -------
app.use("/api/v1/goal", goalRoute);

// image route -----------
app.use("/api/v1/image", imageRoute);

// add new matric route ---------------
app.use("/api/v1/add-new-matric", addNewMatricRoute);

// progress route ----------
app.use("/api/v1/progress", progressRoute);

//type route

app.use("/api/v1/type", typeRoute);

//exercise route
app.use("/api/v1/exercise", exerciseRoute);

// workout route
app.use("/api/v1/workout", workoutRoute);

// teammate route --------------
// app.use("/api/v1/team-mate", teammateRoute)

// Chat route --------------
app.use("/api/v1/chat", chatRoute);

// Message route --------------
app.use("/api/v1/message", messageRoute);

// task route
app.use("/api/v1/task", taskRoute);

// settings route -----------
app.use("/api/v1/settings", settingsRoute);

// form and question
app.use("/api/v1/form-and-question", formAndQuestionRoute);

// food journal
app.use("/api/v1/food-journal", foodRoute);

//appMetrics
app.use("/api/v1/metrics", appMetricRoute);

// studio collection
app.use("/api/v1/studioCollection", studioCollectionRouter);

// bodymatrics for app
app.use("/api/v1/body-matrics", bodyFatRouter);

// bodyWeight router
app.use("/api/v1/body-metrics", bodyWeightRouter);

// hometask router
app.use("/api/v1/my-task", myTaskRoute);

// ---------- Happy Server ----------
app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// global error handler
// app.all("*",(req, res, next)=>{
//     const err = new CustomError(`can't find the ${req.originalUrl} on the server`,404)
//     next(err)
// })

// app.use(globalErrorHandler)

module.exports = app;
