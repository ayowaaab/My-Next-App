import React from "react";
import ProductCard from "../component/ProductCard";

interface User {
  id: number;
  name: string;
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
          gap: "1rem",
        }}
      >
        {users.map((user) => (
          <>
            <div style={{ justifySelf: "center", textAlign: "center" }}>
              <h1 className="text-3xl" key={user.id}>{user.name}</h1>
              <ProductCard />
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
