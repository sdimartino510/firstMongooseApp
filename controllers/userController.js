const { Todo, User } = require('./../models');



module.exports = {
  addTodo: async (req, res) => {
    const { text, userId } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Todo text cannot be blank'});
    }

    try {
      const newTodo = await new Todo({ text, user: userId }).save();
    } catch (e) {
      return res.status(403).json(e);
    }
  }
}