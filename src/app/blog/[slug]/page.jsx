import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import dynamic from "next/dynamic";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboardButton from "@/components/CopyToClipboardButton";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post?.title,
    description: post?.desc,
  };
};

//FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  console.log("params====>", params);
  const { slug } = params;

  //Fetch DATA with an API
  const post = await getData(slug);

  //Fetch DATA without an API
  //const post = await getPost(slug);
  console.log("SinglePostPage post===>", post);
  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(str);
    }
    return Promise.reject("The Clipboard API is not available.");
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgContainer}>
        <Image
            src={
              post.img
                ? post.img
                : "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="Descriptive alt text"
            fill
            className={styles.img}
          />
      </div> */}

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.detail}>
          {/* {post && (
            <Suspense fallback={<div>...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )} */}
          <div className={styles.detailText}>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 16).split("T")[0]}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
        {post?.type === "dsa" && post?.subDesc && (
          <div className={`${styles.codeContainer} ${styles.glow}`}>
            <CopyToClipboardButton textToCopy={post.subDesc} />
            <SyntaxHighlighter
              language="javascript"
              style={docco}
              showLineNumbers
            >
              {post.subDesc}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePostPage;
