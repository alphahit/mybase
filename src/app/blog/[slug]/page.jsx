import styles from "./singlePost.module.css";
import { getBlogPost } from "@/lib/actions/blogActions";
import BlogPostContent from "@/components/blog/BlogPostContent";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getBlogPost(slug);

  return {
    title: post?.title,
    description: post?.desc,
  };
};

export default async function SinglePostPage({ params }) {
  const { slug } = params;
  const post = await getBlogPost(slug);

  return (
    <div className={styles.container}>
      <BlogPostContent post={post} />
    </div>
  );
}
