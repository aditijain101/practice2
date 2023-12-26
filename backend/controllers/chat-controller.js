
const Chat = require("../model/chatSchema");

const getBotReply = async (req, res, next) => {
  console.log("hi");
  let botReply = "";
  try {
    botReply = await Chat.findOne({
      userMessage: req.body.message
    });
    if (!botReply) {
      if (req.body.message == "hi" || req.body.message == "hello") {
        botReply = "hello, how can i help you ?";
      }
      // else if(req.body.message==""||req.body.message=="hello")
      else {
        botReply = "Sorry, i am currently learning about your requirement.";

      }


    }
    const chat = new Chat({
      userMessage: req.body.message, 
      botReply
    });
    await chat.save();
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ botReply });
};


exports.getBotReply = getBotReply;
