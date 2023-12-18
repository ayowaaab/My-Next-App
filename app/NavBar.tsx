import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className=" flex gap-5 items-center py-5 ">
      <Link href="/" className="text-5xl mr-5">🐺</Link>
      <Link href="/users" className="hover:underline">Users</Link>
      <Link href="/albums" className="hover:underline">Albums</Link>
      <Link href="/admin" className="hover:underline">Admin</Link>
    </nav>
  );
};

export default NavBar;
