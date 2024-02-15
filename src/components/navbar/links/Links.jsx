"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { Button } from "@material-tailwind/react";
export default function Links() {
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
  //TEMPORARY
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {/* {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <Button variant="gradient">LOGOUT</Button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )} */}
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
