import dotenv from "dotenv";

// Configure environment
dotenv.config();

import app from "./app.js";

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
  console.log(`Node Environment: ${process.env.NODE_ENV || "development"}`);
});
