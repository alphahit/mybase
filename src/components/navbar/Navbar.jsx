import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/ppac2.png" alt="" height={40} width={80} />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
