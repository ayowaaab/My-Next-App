import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="flex gap-5 text-black-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Admin</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-5 flex gap-5 ">
        <aside className="flex flex-col gap-5 ">
            <div className="flex gap-5 text-black">

            <Image width={30} height={30} src="🦆 icon _home_.svg" alt="home" />
            <h2>HomePage</h2>
            </div>
            <div className="flex gap-5 text-black">

            <Image width={30} height={30} src="🦆 icon _inbox_.svg" alt="inbox" />
            <h2>Inbox</h2>
            </div>
            <div className="flex gap-5 text-black">

            <Image width={30} height={30} src="🦆 icon _Bar Chart_.svg" alt="chart" />
            <h2>Analytics</h2>
            </div>
            <div className="flex gap-5 text-black">

            <Image width={30} height={30} src="🦆 icon _setting_.svg" alt="settings" />
            <h2>Settings</h2>
            </div>
        </aside>
        <div>{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
