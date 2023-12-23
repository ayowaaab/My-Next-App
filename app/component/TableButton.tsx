"use client";
import { User } from "@prisma/client";
import React from "react";

interface Props {
  name: string;
  type: string;
  id:number
}
const TableButton = ({ name, type }: Props) => {
  const handleDeleteUser = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/users`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const deletedUser: User = await res.json();
  }
  return (
    <button className={"btn btn-"+type} onClick={() => handleDeleteUser}>
      {name}
    </button>
  );
};

export default TableButton;
