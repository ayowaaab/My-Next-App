import React from "react";
import ProductCard from "../component/ProductCard";
import styles from "./users.module.css";

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
        <h1 className={styles.title}>- Users -</h1>
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
              <h2 key={user.id}>{user.name}</h2>
              <br />
              <ProductCard />
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
