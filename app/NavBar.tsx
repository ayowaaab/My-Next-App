import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" flex gap-5 items-center py-5 ">
      <Link href="/" className="text-5xl mr-5">
        🐺
      </Link>
      <Link href="/users">
        <button className="btn btn-sm md:btn-md   btn-neutral">Users</button>
      </Link>
      <Link href="/albums">
        <button className="btn btn-sm md:btn-md  btn-neutral">Albums</button>
      </Link>
      <Link href="/admin">
        <button className="btn btn-sm md:btn-md  btn-neutral">Admin</button>
      </Link>
    </nav>
  );
};

export default NavBar;
