import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   //const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  //FETCH DATA WITH AN API
  // const post = await getData(slug);

  const post = await getPost(slug);
  console.log("post===>", post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
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
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {/* {post && (
            <Suspense fallback={<div>...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )} */}
          <div className={styles.detailText}>
            {/* <span className={styles.detailTitle}>Published</span> */}
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
