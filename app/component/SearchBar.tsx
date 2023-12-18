"use client";
import React from "react";

const SearchBar = () => {


  return (
    <>
      <input
        onChange={(e)=>console.log(e.target.value)}
        type="text"
        placeholder="Search"
        className="input input-bordered w-full my-5"
      />
    </>
  );
};

export default SearchBar;
