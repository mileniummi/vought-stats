import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Switch from "react-switch";
import { MdDarkMode, MdLightMode } from "react-icons/all";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Switch
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      checked={theme === "dark"}
      offColor={"#ded2d2"}
      onColor={"#fff"}
      offHandleColor={"#222"}
      onHandleColor={"#ded2d2"}
      uncheckedIcon={<MdDarkMode style={{ margin: "3px 0 0 3px" }} size={20} />}
      checkedIcon={<MdLightMode style={{ margin: "4px 0 0 4px" }} size={20} />}
    />
  );
};

export default ThemeChanger;
