"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Alpha Codes.</h1>
     
        <p className={styles.desc}>
          Welcome to Alpha Codes, your daily dose of Data Structures and
          Algorithms (DSA) challenges, and a treasure trove of projects in React
          Native, React, and backend development. Dive into my journey of
          coding, where I unravel complex problems and share insights from my
          personal learning path. Whether you're here to explore DSA solutions,
          get inspired by React and React Native projects, or delve into backend
          architectures, Alpha Codes is your gateway to enhancing your coding
          skills and igniting your passion for software development.
        </p>

        <Button color="amber"><Link href="/contact" key={"Contact"} >
            Contact
          </Link></Button>
          
   
        {/* <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div> */}
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
