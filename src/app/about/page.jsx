import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Prateek</h2>
        <h1 className={styles.title}>
          Crafting Innovative Solutions Through Code.
        </h1>
        <p className={styles.desc}>
          With a vibrant journey from a React Native Developer intern to a
          Software Developer at Squbix Digital, I, Prateek Priyadarshi, have
          shaped digital experiences that resonate. My toolkit spans React
          Native, Next.js, and a blend of modern technologies, driving me to
          create seamless, user-centric applications. From ideation to
          deployment, my projects—ranging from social media apps to e-commerce
          platforms—reflect a dedication to excellence and a passion for pushing
          boundaries in web and software development.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>3+</h1>
            <p>Years of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Projects Delivered</p>
          </div>
          <div className={styles.box}>
            <h1>5+</h1>
            <p>Tech Stacks Mastered</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;

{
  /* For URL : First Add Images in next.config.js */
}
{
  /* <Image
          src="https://images.pexels.com/photos/11123245/pexels-photo-11123245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about"
          width={500}
          height={500}
        /> */
}
