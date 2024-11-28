const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/roleMiddleware");

const router = express.Router();

// Only admin can access this router
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// Both admin and moderator can access this router
router.get(
  "/moderator",
  verifyToken,
  authorizeRole("admin", "moderator"),
  (req, res) => {
    res.json({ message: "Welcome moderator" });
  }
);

// All can access this router
router.get(
  "/user",
  verifyToken,
  authorizeRole("admin", "moderator", "user"),
  (req, res) => {
    res.json({ message: "Welcome user" });
  }
);

module.exports = router;
