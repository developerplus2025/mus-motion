import React, { useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton, Tooltip } from "@radix-ui/themes";
import Head from "next/head";
import { Toaster, toast } from "sonner";
export const ThemeToggle = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof IconButton>) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [currentTime, setCurrentTime] = useState(new Date());

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (date: Date) => {
    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate().toString().padStart(2, "0");
    const month = monthsOfYear[date.getMonth()]; // Months are 0-based in JS
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strHours = hours.toString().padStart(2, "0");

    return `${dayOfWeek}, ${day} ${month} ${year} at ${strHours}:${minutes}:${seconds} ${ampm}`;
  };

  const handleThemeToggle = () => {
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    const newThemeMatchesSystem = newTheme === systemTheme;
    const nofi_toat =
      resolvedTheme === "dark"
        ? "You changed theme to light"
        : "You changed theme to dark";

    const now = new Date();
    setCurrentTime(now);

    toast(nofi_toat, {
      description: formatDate(now),
      action: {
        label: "Delete",
        onClick: () => console.log("Undo"),
      },
    });

    setTheme(newThemeMatchesSystem ? "system" : newTheme);
  };

  return (
    <>
      <div
        className="radix-themes-custom-fonts flex items-center"
        content="Toggle theme"
      >
        <IconButton
          className=""
          size="3"
          variant="ghost"
          color="gray"
          onClick={handleThemeToggle}
          {...props}
        >
          <SunIcon
            width="21"
            height="21"
            style={{ display: "var(--theme-toggle-sun-icon-display)" }}
          />
          <MoonIcon
            width="21"
            height="21"
            style={{ display: "var(--theme-toggle-moon-icon-display)" }}
          />
        </IconButton>
      </div>
    </>
  );
};
