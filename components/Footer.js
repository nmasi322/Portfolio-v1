import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="sm:flex items-center justify-between text-gray-300 py-10">
        <h1 className="black text-lg mb-6">Built by: Divine</h1>
        <div className="sm:flex sm:space-x-3">
          <a
            href="mailto:edehdivine042@gmail.com"
            className="flex items-center space-x-2 mr-9 hover:text-themeYellow hover:cursor-pointer"
          >
            <h1 className="bold text-lg">Mail?</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4 hover:text-themeYellow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/divine_edeh1"
            className="flex items-center space-x-2 hover:text-themeYellow hover:cursor-pointer"
          >
            <h1 className="bold text-lg">Twitter</h1>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nmasi322"
            className="flex items-center space-x-2 hover:text-themeYellow hover:cursor-pointer"
          >
            <h1 className="bold text-lg">Github</h1>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/divine-edeh/"
            className="flex items-center space-x-2 hover:text-themeYellow hover:cursor-pointer"
          >
            <h1 className="bold text-lg">LinkedIn</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
