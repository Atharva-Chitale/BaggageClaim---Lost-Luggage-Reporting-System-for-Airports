const Chat = require('../models/Chat');

exports.viewChat = async (req, res) => {
  const chat = await Chat.findOne({ user: req.userId });
  res.render('chat', { chat });
};

exports.sendMessage = async (req, res) => {
  const text = req.body.message;

  let chat = await Chat.findOne({ user: req.userId });

  if (!chat) {
    chat = new Chat({
      user: req.userId,
      messages: [{ sender: req.role, text }]
    });
  } else {
    chat.messages.push({ sender: req.role, text });
  }

  await chat.save();
  res.redirect('/chat');
};

exports.adminViewChats = async (req, res) => {
  const chats = await Chat.find().populate('user');
  res.render('adminChat', { chats });
};

exports.adminReply = async (req, res) => {
  const { chatId } = req.params;
  const { message } = req.body;

  const chat = await Chat.findById(chatId);
  chat.messages.push({ sender: 'admin', text: message });
  await chat.save();

  res.redirect('/adminChat');
};
