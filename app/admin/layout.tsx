import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <div className="mt-5 flex gap-5 h-96 ">
        <aside className="flex flex-col justify-between px-5  gap-5 h-full ">
          <div className="flex gap-5 hover:bg-blue-400 p-5 duration-300 cursor-pointer hover:text-black">
            <Image
              className="w-8"
              width={0}
              height={0}
              src="🦆 icon _home_.svg"
              alt="home"
            
            />
            <h2>HomePage</h2>
          </div>
          <div className="flex gap-5 hover:bg-blue-400 p-5 duration-300 cursor-pointer hover:text-black">
            <Image
              className="w-8"
              width={0}
              height={0}
              src="🦆 icon _inbox_.svg"
              alt="inbox"
            />
            <h2>Inbox</h2>
          </div>
          <div className="flex gap-5 hover:bg-blue-400 p-5 duration-300 cursor-pointer hover:text-black">
            <Image
              width={0}
              height={0}
              src="🦆 icon _Bar Chart_.svg"
              className="w-8"
              alt="chart"
            />
            <h2>Analytics</h2>
          </div>
          <div className="flex gap-5 hover:bg-blue-400 p-5 duration-300 cursor-pointer hover:text-black">
            <Image
              className="w-8"
              width={0}
              height={0}
              src="🦆 icon _setting_.svg"
              alt="settings"
            />
            <h2>Settings</h2>
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </>
  );
};

export default AdminLayout;
