import React from "react";

const Navbar = ({totalCounts}) => {
    return (
         <nav className=" w-full h-16 bg-gray-300 items-center">
        <span  className=' font-bold text-2xl' > Navbar </span>

        <span className=" bg-blue-500 rounded-full p-2 "> {totalCounts}  </span>
    </nav>
    );
}
 
export default Navbar;

