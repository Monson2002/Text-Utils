import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function NavBar(props) {

  const [drop, setdrop] = useState(false);

  const showDropdown = () => {
    if (drop === false) {
      setdrop(true);
    } else{
      setdrop(false);
    }
  }

  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className={`navBar ${props.mode === "light" ? "bg-slate-100 text-slate-700" : "bg-slate-900 text-slate-50"} absolute flex justify-between items-center w-full top-0`}>
        <div>
          <div className=" w-24 hidden md:flex">
            <Link to="/"><h1 className={`m-4 lg:p-2 ${props.mode === "light" ? "hover:text-slate-800 active:bg-slate-200 active:border-rounded-lg" : "hover:text-slate-200 active:bg-slate-600 active:border-rounded-lg"} lg:text-lg rounded-md`}>TextUtils</h1></Link>
            <Link to="/about"><h1 className={`m-4 lg:p-2 ${props.mode === "light" ? "hover:text-slate-800 active:bg-slate-200 active:border-rounded-lg" : "hover:text-slate-200 active:bg-slate-600 active:border-rounded-lg"} lg:text-lg rounded-md`}>About</h1></Link>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="hidden p-4 font-Solway text-lg sm:text-lg md:text-xl md:block lg:text-3xl">
            {props.title}
          </h1>
          <div className="menu-dropdown md:hidden ml-24">
            <i class="fa-solid fa-bars" onClick={showDropdown}></i>
            <div>
              {drop ? (
                <div className="flex flex-col justify-start items-center">
                <ul className={`absolute mt-4 ${props.mode === "light" ? "bg-slate-100 text-slate-700" : "bg-slate-900 text-slate-50"} flex flex-col justify-start items-center p-2 sm:p-3 rounded-b-md`}>
                  <Link to="/"><li className={`p-2 m-1 w-auto font-Solway ${props.mode === "light" ? "active:bg-slate-200 active:text-slate-800 active:border-rounded-lg" : "active:bg-slate-600 active:text-slate-100 active:border-rounded-lg"}`} onClick={showDropdown}>TextUtils</li></Link>
                  <Link to="/about"><li className={`p-2 m-1 w-auto font-Solway ${props.mode === "light" ? "active:bg-slate-200 active:text-slate-800 active:border-rounded-lg" : "active:bg-slate-600 active:text-slate-100 active:border-rounded-lg"}`} onClick={showDropdown}>About</li></Link>
                </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="m-4 flex items-center justify-center">
          {enabled ? <i class="fa-solid fa-moon material-symbols-outlined mr-3 w-6"></i> : <i class="fa-solid fa-sun material-symbols-outlined mr-3 w-6"></i>}
          <Switch
            checked={enabled}
            onClick={props.toggleMode}
            onChange={setEnabled}
            className={`${enabled ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
    </>
  );
}
