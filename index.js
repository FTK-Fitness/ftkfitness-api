// Setup
const express = require("express");
const app = express();
const port = 5500;
const router = require("./routes/Router");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Display status on root
app.get("/", (req, res) => {
    res.json({message: "ok" });
});

// Start routing at /api
app.use("/api", router);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message });
    return;
});

// Listening
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});