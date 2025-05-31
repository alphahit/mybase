"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CopyToClipboardButton from "@/components/CopyToClipboardButton";
import styles from "@/app/blog/[slug]/singlePost.module.css";

export default function BlogPostContent({ post }) {
  return (
    <div className={styles.textContainer}>
      <div className={styles.title}>{post.title}</div>
      <span
        className="text-sm rounded py-1 w-28 text-center border-white border"
        style={{ backgroundColor: "rgb(28, 4, 36)" }}
      >
        {post.createdAt.toString().slice(0, 16).split("T")[0]}
      </span>

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
  );
} 