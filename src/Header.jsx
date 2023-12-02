import React, { useEffect } from "react";

const Header = ({input,setInput}) => {
 
  return (
    <>
      <div>
        <form className="flex justify-center">
          <input
            type="search"
            className="border-2 border-slate-200 w-1/4 rounded-md p-1 my-2.5 outline-transparent px-2.5"
            placeholder="Search.."
          value={input} onChange={(e)=>setInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Header;
