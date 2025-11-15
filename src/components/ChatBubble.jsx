import React from 'react';

// Make sure to pass 'time' as a prop
const ChatBubble = ({ text, isUser, time }) => (
  <div className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
    <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${isUser ? 'bg-[#DCF8C6] text-gray-800 rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'}`}>
      {text}
      {/* Use the time prop, with a fallback */}
      <div className="text-[10px] text-gray-500 text-right mt-1">{time || "17:48"}</div>
    </div>
  </div>
);

export default ChatBubble;