import { sort } from "fast-sort";
import Link from "next/link";

interface AlbumsProps {
  id: number;
  title: string;
}
interface Props{
    sortOrder:string
}

const UserTable = async ( { sortOrder }: Props) => {

  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums: AlbumsProps[] = await res.json();
  const sorted = sort(albums).asc(sortOrder === "title"? u => u.title: u=>u.id)

  return (
    <div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>
              <Link href="/albums?sortOrder=id" className="text-2xl">
                ID
              </Link>
            </th>
            <th>
              <Link href="/albums?sortOrder=title" className="text-2xl">
                Title
              </Link>
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
    </div>
  );
};

export default UserTable;
