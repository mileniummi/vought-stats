import React, { ReactNode, useState } from "react";
import Navbar from "../Navbar";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="root" data-theme={theme}>
      <Navbar setTheme={setTheme} theme={theme} />
      <main className="container">{children}</main>
    </div>
  );
};

export default Layout;
