import app from "./app";
require("dotenv").config();

// Boot express
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
