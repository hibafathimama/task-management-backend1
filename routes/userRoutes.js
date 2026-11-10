const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controllers/userController");

const {
    authMiddleware,
    roleMiddleware,
} = require("../middleware/authMiddleware");

router.get(
    "/all",
    authMiddleware,
    roleMiddleware("manager", "admin"),
    getAllUsers
);

module.exports = router;