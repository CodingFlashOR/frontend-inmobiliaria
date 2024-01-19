import { useState } from "react";
import BurgerButton from "./BurgerButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between bg-amarillo h-16 px-2">
        <BurgerButton setOpen={setOpen}/>
        <h1 className="flex-grow text-white text-xl ml-2">Inmobiliaria</h1>
        <button
          className="flex items-center ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <div
        className={`bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 backdrop-blur-sm transition-all duration-300 ${
          open ? "" : "hidden"
        }`}
      ></div>

      <div
        className={`bg-white min-h-screen transition-all duration-300  fixed top-0 left-0 ${
          open ? "sm:w-80 w-52" : "w-0"
        }`}
      >
        <div
          className={`bg-amarillo-cream h-5 w-full ${
            open ? "" : "hidden"
          }`}
        ></div>
        <button
          className={`${
            open ? "" : "hidden"
          }`}
          onClick={() => {
            setOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${
              open ? "" : "hidden"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
