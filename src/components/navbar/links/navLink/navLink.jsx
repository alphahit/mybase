"use client";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

export default function NavLink({ item }) {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    > 
    {console.log("item.path ========>",item.path)}
    {console.log("pathName ========>",pathName)}
      {item.title}
    </Link>
  );
}
