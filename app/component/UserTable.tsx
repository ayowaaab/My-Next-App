import { sort } from "fast-sort";
import Link from "next/link";
import TableButton from "./TableButton";

interface ProductsProps {
  id: number;
  name: string;
  price: number;
}
interface Props{
    sortOrder:string
}

const UserTable = async ( { sortOrder }: Props) => {

  const res = await fetch("http://localhost:3000/api/products");
  const products: ProductsProps[] = await res.json();
  const sorted = sort(products).asc(sortOrder === "name"? u => u.name: u=>u.id)

  return (
    <div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>
              <Link href="/products?sortOrder=id" className="text-2xl">
                ID
              </Link>
            </th>
            <th>
              <Link href="/products?sortOrder=name" className="text-2xl">
                Name
              </Link>
            </th>
            <th>
              <Link href="/products?sortOrder=price" className="text-2xl">
                Price
              </Link>
            </th>
            <th colSpan={2}  className="text-2xl ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price} DT</td>
              <td><TableButton id={product.id} name="Delete" type="secondary" /></td>
              <td><TableButton id={product.id} name="Update" type="accent" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
