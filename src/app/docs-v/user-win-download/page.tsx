"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Dpage() {
  const pathname = usePathname();
  useEffect(() => {
    // Chờ 5 giây sau khi trang tải xong và thực hiện tải file
    const timer = setTimeout(() => {
      // URL của file cần tải
      const fileUrl =
        "https://github.com/devplus2024/music-app/releases/download/2.3.5/FloraSetup.2.5.3.exe";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", "FloraSetup.2.5.3.exe"); // Tên file sẽ tải xuống
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);

    return () => clearTimeout(timer); // Dọn dẹp timer nếu component bị unmount
  }, [pathname]);

  return <div></div>;
}
