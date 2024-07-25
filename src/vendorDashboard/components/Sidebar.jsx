import React from "react";


const Sidebar = () => {
 

  return (
    <div className="p-5 text-white">
     
       <ul className="list-image-[url(checkmark.png)] ...">
        <li className="w-full"><a href="/add-firm" className="p-4 bg-blue-800 hover:bg-blue-600 active:bg-blue-700 cursor-pointer w-full block  mb-1">Add Firm</a></li> 
        <li className="w-full"><a href="/" className="p-4 bg-blue-800 hover:bg-blue-600 active:bg-blue-700 cursor-pointer w-full block mb-1">User Details </a></li>
        
        <li className="w-full"><a href="/add-product" className="p-4 bg-blue-800 hover:bg-blue-600 active:bg-blue-700 cursor-pointer w-full block  mb-1">Add Product</a></li>
        <li className="w-full"><a href="/all-products" className="p-4 bg-blue-800 hover:bg-blue-600 active:bg-blue-700 cursor-pointer w-full block  mb-1">All Products</a></li>
      </ul>        

     
    </div>
  );
};

export default Sidebar;
