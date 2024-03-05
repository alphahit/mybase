"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Toast = dynamic(() => import("react-toastify").then((mod) => mod.toast), {
  ssr: false,
});
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { Button } from "@material-tailwind/react";
import { signIn } from "next-auth/react";
import { handleGithubLogin, handleGithubLogout } from "@/lib/action";
export default function Links({ session }) {
  const [open, setOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    // {
    //   title: "Contact",
    //   path: "/contact",
    // },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  useEffect(() => {
    // Check if user has admin rights
    if (
      session?.user?.name === "Prateek Priyadarshi" &&
      session?.user?.email === "prateekpriyadarshi1328@gmail.com"
    ) {
      // User is an admin
      setIsAdmin(true);
    } else if (session?.user) {
      // User is logged in but not an admin
      Toast.warn("You do not have the permission yet.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [session]);

  return (
    <div className={styles.container}>
      <ToastContainer />
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {process.env.NEXT_PUBLIC_API_BASE_URL !==
          "https://alpha-codes.vercel.app/" && session?.user ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <div className="flex items-center">
              <form
                action={() => {
                  handleGithubLogout();
                }}
                className="mr-4"
              >
                <Button type="submit" variant="gradient">
                  LOGOUT
                </Button>
              </form>
              <div className="relative h-10 w-10">
                <Image
                  src={
                    session?.user?.image ||
                    "https://avatars.githubusercontent.com/u/67732012?v=4"
                  }
                  alt="User Avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full" // This will make the image rounded
                />
              </div>
            </div>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
          // <Button
          //   onClick={() => handleGithubLogin()} // Directly call signIn with "github" provider
          //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-150 ease-in-out transform hover:scale-110 shadow-lg"
          // >
          //   Login with Github
          // </Button>
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
