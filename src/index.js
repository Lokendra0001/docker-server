const dotenv = require("dotenv");
const app = require("./app");
const healthRoutes = require("./routes/index.routes");

// Configure environment
dotenv.config();

const port = process.env.PORT || 5000;

app.use("/api/health", healthRoutes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
  console.log(`Node Environment: ${process.env.NODE_ENV || "development"}`);
});
