const dotenv = require("dotenv");

// Configure environment
dotenv.config();

const app = require("./app");

const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
  console.log(`Node Environment: ${process.env.NODE_ENV || "development"}`);
});
