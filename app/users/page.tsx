import React from "react";
import ProductCard from "../component/ProductCard";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <>
      <center>
        <h1 className="text-2xl md:text-5xl 2xl:text-7xl my-10">- Users -</h1>
      </center>
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
