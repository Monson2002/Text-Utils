import React, { useState } from "react";

export default function TextUtils(props) {
  const toLower = () => {
    let txt = text.toLowerCase();
    settext(txt);
  };

  const toUpper = () => {
    let txt = text.toUpperCase();
    settext(txt);
  };

  const clearText = () => {
    settext("");
  };

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  const removeXSpace = () => {
    let currText = text.split(/[ ]+/);
    settext(currText.join(" "));
  }

  const [text, settext] = useState("");

  return (
    <>
      <div className={`${props.mode === "light" ? "bg-slate-50" : "bg-slate-800"}`}>
        <div className="w-10/12 h-screen mx-auto pt-24 flex flex-col justify-center items-center">
          <textarea id="message" rows="15" className={`block p-2 w-full text-sm ${props.mode === "light"? "text-gray-800":"bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"} rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`} placeholder="Write your thoughts here..." value={text} onChange={handleOnChange}></textarea>
          <div className="flex flex-col md:flex-row">
            <button disabled={text.length === 0} className={`m-1 p-1 md:p-2 text-sm md:text-base md:m-4 ${props.mode === "light" ? "text-blue-700 bg-transparent border-blue-500 hover:bg-blue-500" : "text-slate-50 bg-gray-700 border-gray-700 hover:bg-gray-600"} font-semibold hover:text-white border hover:border-transparent active:bg-gray-500 rounded`} onClick={toUpper}>
              Convert to Upper
            </button>
            <button disabled={text.length === 0} className={`m-1 p-1 md:p-2 text-sm md:text-base md:m-4 ${props.mode === "light" ? "text-blue-700 bg-transparent border-blue-500 hover:bg-blue-500" : "text-slate-50 bg-gray-700 border-gray-700 hover:bg-gray-600"} font-semibold hover:text-white border hover:border-transparent active:bg-gray-500 rounded`} onClick={toLower}>
              Convert to Lower
            </button>
            <button disabled={text.length === 0} className={`m-1 p-1 md:p-2 text-sm md:text-base md:m-4 ${props.mode === "light" ? "text-blue-700 bg-transparent border-blue-500 hover:bg-blue-500" : "text-slate-50 bg-gray-700 border-gray-700 hover:bg-gray-600"} font-semibold hover:text-white border hover:border-transparent active:bg-gray-500 rounded`} onClick={clearText}>
              Clear
            </button>
            <button disabled={text.length === 0} className={`m-1 p-1 md:p-2 text-sm md:text-base md:m-4 ${props.mode === "light" ? "text-blue-700 bg-transparent border-blue-500 hover:bg-blue-500" : "text-slate-50 bg-gray-700 border-gray-700 hover:bg-gray-600"} font-semibold hover:text-white border hover:border-transparent active:bg-gray-500 rounded`} onClick={removeXSpace}>
              Remove Extra Spaces
            </button>
          </div>
          <div className={`flex flex-col justify-center items-center m-1 sm:m-2 md:m-4 ${props.mode === "light" ? "text-gray-800" : "text-slate-50"}`}>
            <p className="font-Solway md:text-lg">
              {text.split(/\s+/).filter((e) => {return e.length !== 0}).length} words, {text.length} characters
            </p>
            <p className="font-Solway md:text-lg">
              Estimated time to read : {text.length === 0 ? 0 : text.split(" ").length * 0.5}s
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
