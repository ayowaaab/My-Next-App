import React from "react";

interface Props {
  name: string;
  email: string;
  phone: string;
}

const ProductCard = ({ name, email, phone }: Props) => {
  return (
    <>
      <div className=" p-5 h-full text-center w-full bg-zinc-800 text-white flex flex-col  gap-5 rounded-xl drop-shadow-lg">
        <h1 className="text-3xl ">{name}</h1>
        <p className="text-lg flex-grow">{phone}</p>
        <p className="text-sm flex-grow">{email}</p>
        <button className="btn btn-outline whitespace-nowrap w-1/2 m-auto">
          View More
        </button>
      </div>
    </>
  );
};

export default ProductCard;
