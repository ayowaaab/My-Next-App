import React, { Suspense } from "react";
import ProductCard from "../component/ProductCard";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UsersPage = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const users: User[] = await res.json();
  
  return (
    <>
      <h1 className="text-center text-2xl md:text-5xl 2xl:text-7xl my-10">
        - Users -
      </h1>
      <Link href="users/new" className="btn btn-primary my-5 uppercase">
        Add User
      </Link>
    
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5">
          {users.map((user) => (
            <ProductCard
              key={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </ul>
    </>
  );
};

export default UsersPage;
