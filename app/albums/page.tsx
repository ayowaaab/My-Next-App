import React from "react";
interface AlbumsProps {
  id: number;
  title: string;
  searchParams: { sortedOrder: string };
}

const Albums = async ({ searchParams: { sortedOrder } }: AlbumsProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums: AlbumsProps[] = await res.json();

  return (
    <>
    <input type="text" placeholder="Search" className="input input-bordered w-full my-5" />
      <table className="table table-zebra">
        <thead>
          <tr>
            <th className="text-2xl">ID</th>
            <th className="text-2xl">Title</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
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
