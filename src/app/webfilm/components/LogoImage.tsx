import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function LogoImage() {
  const [src, setSrc] = useState("");
  const { resolvedTheme, theme } = useTheme();

  useEffect(() => {
    let value;
    // Get the value from local storage if it exists
    value = localStorage.getItem("theme");
    const check_theme = value === "dark" ? "dark.svg" : "light.svg";
    if (resolvedTheme === "dark") {
      setSrc("/dark.svg");
    } else if (resolvedTheme === "light") {
      setSrc("/light.svg");
    } else {
      setSrc(check_theme);
    }
  }, [resolvedTheme]);

  return <Image src={src} width={30} height={30} alt="Logo" />;
}

export default LogoImage;
