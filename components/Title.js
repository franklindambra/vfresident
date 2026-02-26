import React from "react";

export default function Title({ text }) {
  return (
    <>
      <h2 className="text-xl font-bold mb-2">{text}</h2>
      <hr className="border-gray-300 mb-5"></hr>
    </>
  );
}
