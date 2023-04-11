import React, { useEffect, useState } from "react";
import ChatMessageCard from "./ChatMessageCard";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import {
  generateRandomCompliment,
  generateRandomId,
  generateRandomName,
} from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          id: generateRandomId(5),
          name: generateRandomName(),
          message: generateRandomCompliment(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div>
      <div className="box-border overflow-y-scroll flex flex-col-reverse h-96">
        {chatMessages.map(({ name, message }, i) => {
          return <ChatMessageCard key={i} name={name} message={message} />;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              id: generateRandomId(5),
              name: "Your name",
              message: userMessage,
            })
          );
          setUserMessage("");
        }}
      >
        <div className="bg-white flex p-2 gap-2 rounded-xl items-center">
          <FaUserCircle className="md:text-4xl " />

          <input
            className="outline-none border-b-2 w-full border-blue-200"
            placeholder="Say something..."
            value={userMessage}
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
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
