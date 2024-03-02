"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { Button } from "@material-tailwind/react";
import { handleGithubLogout } from "@/lib/action";
import { auth } from "@/lib/auth";
export default function Links({ session }) {
  const [open, setOpen] = useState(false);
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

  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleGithubLogout}>
              <Button type="submit" variant="gradient">
                LOGOUT
              </Button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
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
