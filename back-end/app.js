// DEPENDENCIES
const express = require("express")
const cors = require("cors");
const snacksRoute = require("./controllers/snackController");


// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
    console.log("Request to GET /");
    res.send("Get Snack'n at Snack-a-log!");
});

// ROUTES
app.use("/snacks", snacksRoute);

app.get("*", (_, res) => {
    console.log("Invalid URL Detected");
    res.status(404).json({ error: "Page not found" });
});


// EXPORT
module.exports = app;
