import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/lib/auth";
const Navbar = async () => {
  const session = await auth();
  console.log("session ==>", session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/logoac.png" alt="" height={80} width={240} />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};
export default Navbar;
