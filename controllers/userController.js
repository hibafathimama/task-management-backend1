const User = require("../models/User");

// Get all users for task assignment
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({
            role: "user",
        })
            .select("userName email role")
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Users fetched successfully",
            users,
        });

    } catch (error) {
        console.log("Get users error:", error);

        res.status(500).json({
            message: "Failed to fetch users",
        });
    }
};

module.exports = {
    getAllUsers,
};