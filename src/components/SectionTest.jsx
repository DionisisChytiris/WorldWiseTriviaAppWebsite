import React from 'react'
import { Link } from "react-router-dom";

function SectionTest() {
  return (
    <div>
       <div className="transition-colors duration-300 bg-white text-black dark:bg-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold p-4">Hello World</h1>
        <Link to="/header" className="text-blue-500 underline">
          Go to About Page
        </Link>
        <h1 className="text-3xl font-bold p-4">Hello World</h1>
        <h1 className="text-3xl font-bold p-4">Hello World</h1>
        <h1 className="text-3xl font-bold p-4">Hello World</h1>
        <h1 className="text-3xl text-yellow-500 font-bold p-4">Hello World</h1>
      </div>
    </div>
  )
}

export default SectionTest

