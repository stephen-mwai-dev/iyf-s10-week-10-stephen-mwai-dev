// SIMPLE USERS (for assignment structure)

const getAllUsers = (req, res) => {
    res.json([
        { id: 1, name: "Stephen Mwai" },
        { id: 2, name: "Guest User" }
    ]);
};

module.exports = {
    getAllUsers
};