import React, { ReactNode } from "react";
import Navbar from "../Navbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
