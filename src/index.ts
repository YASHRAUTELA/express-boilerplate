import app from "./app";
// Boot express
const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
