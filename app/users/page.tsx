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
        <h1 className="text-7xl my-10">- Users -</h1>
      </center>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "2rem",
        }}
      >
        {users.map((user) => (
              <ProductCard key={user.id} name={user.name} email={user.email} phone={user.phone} />
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
