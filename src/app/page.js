"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/Sparkles";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className="h-[20rem]  flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            Alpha Codes.
          </h1>
          <div className="w-[40rem] h-40 relative ">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" style={{backgroundColor:'#0d0c22'}}></div>
          </div>
        </div>
      

        <p className={styles.desc}>
          Welcome to Alpha Codes, your daily dose of Data Structures and
          Algorithms (DSA) challenges, and a treasure trove of projects in React
          Native, Next.js, MERN and fullstack development. Dive into my journey of
          coding, where I unravel complex problems and share insights from my
          personal learning path. Whether you are here to explore DSA solutions,
          get inspired by projects, Alpha Codes is your gateway to enhancing your coding
          skills in JavaScript and igniting your passion for software development.
        </p>
        <Link href="/contact" key={"Contact"}>
          <Button color="amber">Contact</Button>
        </Link>

        {/* <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div> */}
      </div>
      {/* <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div> */}
    </div>
  );
}
