import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

import ChatMessageCard from "../components/ChatMessageCard";
import { addMessage } from "../utils/chatSlice";
import {
  generateRandomCompliment,
  generateRandomId,
  generateRandomName,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newMessage = {
        id: generateRandomId(5),
        name: generateRandomName(),
        message: generateRandomCompliment(),
      };
      dispatch(addMessage(newMessage));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: generateRandomId(5),
      name: "User name",
      message: userMessage,
    };
    dispatch(addMessage(newMessage));
    setUserMessage("");
  };

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  return (
    <div>
      <div className="box-border overflow-y-scroll flex flex-col-reverse h-96">
        {chatMessages.map((message, i) => (
          <ChatMessageCard key={i} {...message} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white flex p-2 gap-2 rounded-xl items-center">
          <FaUserCircle className="md:text-4xl " />

          <input
            className="outline-none border-b-2 w-full border-blue-200"
            placeholder="Say something..."
            value={userMessage}
            name="userMessage"
            onChange={handleChange}
          />
          <button type="submit" className="bg-none border-none">
            <AiOutlineSend className="w-10 cursor-pointer" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default LiveChat;
