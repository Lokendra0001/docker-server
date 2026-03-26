import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.routes.js";

const app = express();

// Standard middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api", routes);

app.get("/", async (req, res) => {
  console.log(`Worker Process Id : ${process.pid}`);
  return res.json({
    process: `Worker Process Id : ${process.pid}`,
    msg: "Hello From Docker Server!",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
