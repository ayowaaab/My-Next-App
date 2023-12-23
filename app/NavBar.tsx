import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" flex gap-5 items-center py-5 ">
      <Link href="/" className="text-5xl mr-5">
        🐺
      </Link>
      <Link href="/users" className="btn btn-sm md:btn-md btn-neutral">
        Users
      </Link>
      <Link href="/products" className="btn btn-sm md:btn-md btn-neutral">
        Products
      </Link>
      <Link href="/admin" className="btn btn-sm md:btn-md btn-neutral">
        Admin
      </Link>
    </nav>
  );
};

export default NavBar;
