import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';

const NavBar = () => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <div>
        <h1 className=" ml-2">Cory Pham</h1>
      </div>
      <div>
        <ul className="flex ">
          <li className="px-4 cursor-pointer capitalize hover:scale-105"><BsFillMoonStarsFill/></li>
          <li><a href="#">Resume</a></li>
          <li className="px-4 cursor-pointer capitalize hover:scale-105">About</li>
          <li className="px-4 cursor-pointer capitalize hover:scale-105">Experience</li>
          <li className="px-4 cursor-pointer capitalize hover:scale-105">Projects</li>
          <li className="px-4 cursor-pointer capitalize hover:scale-105">Gallery</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
