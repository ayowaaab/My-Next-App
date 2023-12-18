import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface albumProps {
  id: number;
  title: string;
  searchParams: { sortOrder: string };
}

const Albums = async ({
  id,
  title,
  searchParams: { sortOrder },
}: albumProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums: albumProps[] = await res.json();
  const sorted = sort(albums).asc(
    sortOrder === "title" ? (album) => album.title : (album) => album.id
  );
  return (
    <>
      <table className="table table-zebra my-5">
        <thead>
          <tr>
            <th className="text-xl cursor-pointer">
              <Link href="albums?sortOrder=id">ID</Link>
            </th>
            <th className="text-xl cursor-pointer">
              <Link href="albums?sortOrder=title">Title</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((album) => (
            <tr key={album.id}>
              <td>{album.id}</td>
              <td>{album.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Albums;
