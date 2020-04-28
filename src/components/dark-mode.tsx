import * as React from "react"
import { useContext } from "react"

import { ThemeContext } from "../context/ThemeProvider"

const DarkMode = ({ setToggle }) => {
  return (
    <svg
      onClick={setToggle}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M 9 1.653 C 13.058 1.653 16.347 4.942 16.347 9 C 16.347 13.058 13.058 16.347 9 16.347 C 4.942 16.347 1.653 13.058 1.653 9 C 1.653 4.942 4.942 1.653 9 1.653 Z"
        fill="hsl(0, 0%, 100%)"
        strokeWidth="1.31"
        stroke="#333"
      ></path>
      <path
        d="M 16.347 9 C 16.347 13.058 13.058 16.347 9 16.347 L 9 1.653 C 13.058 1.653 16.347 4.942 16.347 9 Z"
        fill="#333"
      ></path>
    </svg>
  )
}

export default DarkMode
