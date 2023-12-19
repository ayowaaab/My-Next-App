import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 h-[80vh]">
        <div className="text-center flex items-center">
          <h1 className="error">404</h1>
          <p className="text-5xl">| Page Not Found</p>
        </div>
        <Link href="/" className="btn btn-success uppercase">
          Go Back to Home Page
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
