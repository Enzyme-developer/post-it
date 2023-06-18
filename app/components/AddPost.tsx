"use client";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function AddPost() {
  const [text, setText] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  //create post
  const { mutate } = useMutation(
    async (title: any) => await axios.post("/api/posts/addPost", { title }),
    {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (data) => {
        console.log(data);
        setText("");
        setIsDisabled(false);
      },
    }
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsDisabled(true);
    mutate(text);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div>
        <textarea
          name="title"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something here..."
          className="bg-gray-100 h-20 w-full text-black rounded-lg p-2 outline-none border-none"
        ></textarea>
      </div>
      <div className="flex justify-between my-4 items-center">
        <p
          className={`${
            text.length > 300 ? "text-red-600" : "text-black"
          } font-bold`}
        >
          {text.length}/300
        </p>
        <button
          disabled={text.length > 300 ? isDisabled : false}
          className="rounded-xl p-2 font-medium border-none bg-blue-500 text-white"
          type="submit"
        >
          Create Post
        </button>
      </div>
    </form>
  );
}
