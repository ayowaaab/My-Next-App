import React, { Suspense } from "react";
import SearchBar from "../component/SearchBar";
import UserTable from "../component/UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const Products = ({searchParams:{sortOrder}}:Props) => {
 
  return (
    <>  
      <SearchBar />
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default Products;
