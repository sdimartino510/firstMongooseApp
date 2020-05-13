const { Todo, User } = require('./../models');

module.exports = {
  addTodo: async (req, res) => {
    const { text, userId } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Todo text cannot be blank'});
    }

    try {
      const newTodo = await new Todo({ text, user: userId }).save();
      const user = await User.findById(userId);
      user.todos.push(newTodo);
      await user.save();
      return res.status(200).json(newTodo);
    } catch (e) {
      return res.status(403).json(e);
    }
  },
  getAllUserEmails: async (req, res) => {
    try {
      const users = await User.find()
      if (!users) {
        return res.status(404).json({ error: 'No users yet' });
      }
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json(e);
    }
  }
}