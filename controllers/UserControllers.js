const {User} = require("../models");

exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' });
    }
  };

exports.createUser = async (req, res) => {
    try {
        const {firstName, lastName, email} = req.body;

        const newUser = await User.create({
            firstName,
            lastName,
            email
        });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({error: "Error creating User"});
    }
}