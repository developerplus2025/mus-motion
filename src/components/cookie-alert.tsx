"use client";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedBar from "./animation-bar";

const getCookie = (name: string): string | null => {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return match ? match.split("=")[1] : null;
};

const setCookie = (name: string, value: string, days: number): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
};

const ParentComponentCookieAlert = () => {
  const [showComponent, setShowComponent] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    setIsAccepted(getCookie("cookieAccepted") === "true");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showComponent && !isAccepted ? (
        <CookieAlert isAccepted={isAccepted} setIsAccepted={setIsAccepted} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ParentComponentCookieAlert;

const CookieAlert = ({
  isAccepted,
  setIsAccepted,
}: {
  isAccepted: boolean;
  setIsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleAccept = () => {
    setCookie("cookieAccepted", "true", 365);
    setIsAccepted(true);
  };

  return (
    <div
    // transition={{ duration: 0 }}
    // initial={"hidden"}
    // animate={isAccepted ? "hidden" : "visible"}
    // variants={{
    //   hidden: { opacity: 0, transition: { duration: 0.5 } },
    //   visible: {
    //     opacity: 1,
    //     transition: { duration: 0.5 },
    //   },
    // }}
    >
      <AnimatePresence initial={false}>
        {!isAccepted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <Alert className="fixed left-[2rem] top-[32rem] z-[2] flex w-[480px] flex-col gap-4">
              <AlertTitle className="flex items-center justify-between">
                <p className="text-[1.1rem]">Cookies Settings</p>

                <svg
                  onClick={() => setIsAccepted(true)}
                  className="cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </AlertTitle>
              <AlertDescription>
                We use cookies and similar technologies to help personalize
                content, tailor and measure ads, and provide a better
                experience. By clicking accept, you agree to this, as outlined
                in our Cookie Policy.
              </AlertDescription>
              <div className="flex justify-between gap-[3rem]">
                <Button className="w-full" onClick={handleAccept}>
                  Accept
                </Button>
                <Button className="w-full" variant={"outline"}>
                  Decline
                </Button>
              </div>
            </Alert>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
