import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import dynamic from "next/dynamic";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog/${slug}`,
    {
      next: { revalidate: 3600 },
    }
  );

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
  function formatApiText(text) {
    let formattedText = text.split("|>*<|").join("\n");
    return formattedText;
  }

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
        <div className={styles.title}>{post.title}</div>
        <span className="text-sm bg-blue-600 rounded py-1 w-28 text-center">
          {post.createdAt.toString().slice(0, 16).split("T")[0]}
        </span>

        {/* <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 16).split("T")[0]}
            </span>
          </div>
        </div> */}
        {console.log("formatApiText(post.desc)===?", formatApiText(post.desc))}
        <div className={styles.content}>
          {post.desc.split("|>*<|").map((item, index) => (
            <div className="mt-4" key={index}>
              <div className="font-semibold mb-1">{item.split(":")[0]}:</div>
              <div>{item.split(":")[1]}</div>
            </div>
          ))}
        </div>
        {post?.type === "dsa" && post?.subDesc && (
          <div className={`${styles.codeContainer} ${styles.glow}`}>
            <CopyToClipboardButton textToCopy={post.subDesc} />
            <SyntaxHighlighter
              language="javascript"
              style={stackoverflowDark}
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
