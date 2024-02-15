import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { CardContainer } from "@/components/ui/ThreeDCard";
// import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };
const posts = [
  {
    id: "4a114867-ed8c-4e4b-b535-9a57f182ad55",
    title: "The Future of Web Development",
    body: "Best practices for back-end development, covering databases, server architecture, and API design.",
    img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: "2024-02-10",
    slug: "3338abed",
  },
  {
    id: "6c61f76e-0531-4afd-bf7f-efd392dfabc3",
    title: "Front-end Frameworks: A Comparison",
    body: "Best practices for back-end development, covering databases, server architecture, and API design.",
    img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: "2024-02-10",
    slug: "17d97903",
  },
  {
    id: "25008799-939b-444e-98d1-68525ef33fe4",
    title: "Back-end Best Practices",
    body: "An exploration of React Native for building cross-platform mobile applications, including best practices and tips for getting started.",
    img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: "2024-02-10",
    slug: "8db1f9d1",
  },
  {
    id: "4e765960-2f22-44c7-8a89-ab8dd59c337c",
    title: "Front-end Frameworks: A Comparison",
    body: "Comparing popular front-end frameworks like React, Vue, and Angular, discussing their strengths and ideal use cases.",
    img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: "2024-02-10",
    slug: "ac68cf50",
  },
  {
    id: "da9bcec9-99de-4ed9-bf35-b81c1a8019c4",
    title: "Exploring Data Structures",
    body: "Comparing popular front-end frameworks like React, Vue, and Angular, discussing their strengths and ideal use cases.",
    img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    createdAt: "2024-02-10",
    slug: "b1625e3e",
  },
];

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  //const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

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
