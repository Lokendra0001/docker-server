const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.controller");

// Basic API Check
router.get("/health", indexController.healthCheck);

module.exports = router;
