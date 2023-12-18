import React from "react";

const ProductCard = () => {
  return (
    <>
      <div className="py-14 px-5 my-5 bg-zinc-800 text-white text-xl flex flex-col gap-5 rounded-xl drop-shadow-lg">
        <h1 className="text-3xl">My card</h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eos
          nisi voluptatibus facere et ab enim expedita, nemo tempore veniam.
        </p>
        <button className="text-sm bg-white text-black rounded-lg py-2 hover:text-white hover:bg-slate-500 w-1/2 m-auto duration-300">
          View More
        </button>
      </div>
    </>
  );
};

export default ProductCard;
