import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { CardContainer } from "@/components/ui/ThreeDCard";
import { getPosts, getUsers } from "@/lib/data";
// import { getPosts } from "@/lib/data";

//FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };
export const metadata = {
  title: "Blogs",
  description: "Blog Page",
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  //const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  //const users = await getUsers();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
