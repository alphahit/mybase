"use client";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import Link from "next/link";

// export default function NavLink({ item }) {
//   const pathName = usePathname();

//   return (
//     <Link
//       href={item.path}
//       key={item.title}
//       className={`${styles.container} ${
//         pathName === item.path && styles.active
//       }`}
//     >
//     {console.log("item.path ========>",item.path)}
//     {console.log("pathName ========>",pathName)}
//       {item.title}
//     </Link>
//   );
// }

export default function NavLink({ item }) {
  const pathName = usePathname();
  {
    console.log("item.path ========>", item.path);
  }
  {
    console.log("pathName ========>", pathName);
  }
  return (
    <Link href={item.path} passHref>
      <div
        className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
          pathName === item.path ? "border-2 border-solid" : ""
        }`}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {item.title}
        </span>
      </div>
    </Link>
  );
}
