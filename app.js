const express = require('express');
const userRoutes = require("./routes/userRoutes.js")
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes);

// app.get("/new", (req, res) => {
//     res.send("<h1>Daniel Maina</h1>")
// })



app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})