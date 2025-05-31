"use client";
import Image from "next/image";
import styles from "./home.module.css";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/Sparkles";

// What is Server-Side Rendering (SSR)?
// Server-side rendering means that the HTML for your web page is generated on the server—not in the user's browser. 
// When a user (or a search engine crawler) requests a page:

// The request goes to your server (for example, a Node.js server running your Next.js app).
// The server runs your React components (or any framework logic), “builds” the page, and generates the complete HTML code for that page.
// The server sends this finished HTML back to the user’s browser, which displays it instantly.
// After the initial page loads, React takes over (hydrates the page) so any further interaction can still use React’s fast client-side updates.
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className="h-[10rem] lg:h-[20rem] lg:mt-0 mt-10  flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
            Alpha Codes.
          </h1>
          <div className="w-[40rem] h-40  relative ">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" style={{backgroundColor:'#0d0c22'}}></div>
          </div>
        </div>
      

        <p className="lg:text-2xl text-lg">
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

      
      </div>
    </div>
  );
}

// The transition from client-side rendering to server-side rendering improves performance and SEO,
// allowing search engines to index content more effectively. This shift addresses limitations faced by traditional React applications.


// SEO Basics:

// SEO is critical for websites to rank on Google and other search engines.
// Google and other search engines crawl the HTML of your page to index your content.

// React and SEO Problems:

// React (Client-Side Rendering):

// By default, React renders content on the client-side (in the browser) after the initial JavaScript loads.
// This means when a search engine crawler visits your site, it often sees a blank or very minimal HTML file, with content populated later by JS.
// Some search engines (and even Google, sometimes) may not properly execute the JS, or may delay crawling/indexing, leading to poor SEO.
// Result: Your dynamic content isn’t visible to crawlers immediately, which hurts discoverability.

// Next.js and SEO Improvements:

// Next.js (Server-Side Rendering & Static Generation):

// Next.js allows rendering content on the server before sending it to the browser.
// The initial HTML sent to the user (and to crawlers) already contains the fully rendered page content.
// Benefit: Search engine bots see the actual content instantly, making it easy to crawl and index.

// Key SEO Advantages of Next.js:

// a. Server-Side Rendering (SSR): Delivers pre-rendered HTML for each request. Great for dynamic content that changes per user or request.
// b. Static Site Generation (SSG): Generates HTML at build time for each page. Perfect for pages where content doesn’t change frequently.
// c. Hybrid Approach: You can use SSR for some pages and SSG for others, optimizing performance and SEO as needed.
// d. Better Meta Tag Management: Next.js (via next/head) allows easy management of meta tags, titles, descriptions, Open Graph tags, etc., at the page level.
// e. Faster Page Load: Because the initial content is rendered on the server, users see content faster, which is also a ranking factor for SEO.
// f. Sitemap and Robots.txt: Easy to configure and generate.
// g. Dynamic Routing: Clean URLs, dynamic parameters, and catch-all routes help with better site structure.