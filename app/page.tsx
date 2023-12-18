import Link from "next/link";
import ProductCard from "./component/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello world</h1>
      <Link href="/users">Click the link !</Link>
      <ProductCard />
    </main>
  );
}
