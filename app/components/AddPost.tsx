"use client";

import { useState } from "react";

export default function AddPost() {
    const [text, setText] = useState<string>("");
    
  return (
    <form className="w-full">
      <div>
        <textarea
          name="title"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something here..."
          className="bg-white w-full text-black rounded-lg p-2 outline-none border-none"
        ></textarea>
      </div>
      <div className='flex justify-between my-4 items-center'>
        <p className={`${text.length > 300 ? "text-red-500" : "text-black"}`}>
          {text.length}/300
        </p>
        <button className="rounded-xl p-2 font-bold border-none bg-blue-500">
          Create Post
        </button>
      </div>
    </form>
  );
}
