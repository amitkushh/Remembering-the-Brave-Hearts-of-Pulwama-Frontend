import React from "react";
import { supabase } from "../../supabase/supabaseClient.js";
import { useEffect, useState } from "react";

function TributeWall() {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchMessages();

    const subscription = supabase
      .channel("realtime-messages")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prevMessages) => [payload.new, ...prevMessages]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchMessages = async () => {
    let { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("timestamp", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      setMessages(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return alert("Both fields are required!");

    const { error } = await supabase
      .from("messages")
      .insert([{ name, message }]);

    if (error) {
      console.error("Error saving message:", error);
    } else {
      setName("");
      setMessage("");
    }
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
      <div className="mt-5 w-full max-h-60 overflow-y-auto md:max-w-[570px]">
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
