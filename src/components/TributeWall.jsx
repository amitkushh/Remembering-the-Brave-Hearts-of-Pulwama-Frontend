import React from "react";
import { useEffect, useState } from "react";

function TributeWall() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return alert("Both fields are required!");

    const newMessage = { name, message, timestamp: new Date().toISOString() };
    const updatedMessages = [newMessage, ...messages];

    localStorage.setItem("messages", JSON.stringify(updatedMessages));
    setMessages(updatedMessages);

    setName("");
    setMessage("");
  };

  return (
    <div className="flex flex-col justify-center items-center px-7 pb-16">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none rounded-md w-full bg-[#1a1a1a] border-2 border-gray-500 text-white px-3 py-2 mb-3"
          placeholder="Write your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          name=""
          id=""
          placeholder="Write your tribute message..."
          className="outline-none rounded-md h-20 w-full bg-[#1a1a1a] border-2 border-gray-500 text-white px-3 py-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black py-2 px-4 rounded-md mt-6 w-full hover:bg-gray-500"
        >
          Submit Tribute
        </button>
      </form>

      {/* Display Messages */}
      <div className="mt-5 w-full max-h-60 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-md mb-3">
            <h3 className="font-bold text-white text-xl">{msg.name}</h3>
            <p className="text-gray-300">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TributeWall;
