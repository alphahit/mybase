import Image from 'next/image';
import styles from './about.module.css';
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from '@/components/ui/TextReveal';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';
export const metadata = {
    title: 'About Page',
    description: 'About description',
};

const content = ` With a vibrant journey from a React Native Developer intern to a
Senior Software Developer, I, Prateek Priyadarshi, have shaped
digital experiences that resonate. My toolkit spans MERN Stack,
React Native, Next.js, and a blend of modern technologies, driving
me to create seamless, user-centric applications. From ideation to
deployment, the projects that i have worked on - range from Hyperlocal Market Delivery
apps, E-Commerce and HealthCare domains.`;
const AboutPage = () => {
    // console.log("lets check where it works")

    const socials = [
        {
            link: 'https://www.linkedin.com/in/prateekpriyadarshi/',
            label: 'LinkedIn',
            Icon: <FaLinkedin />,
        },
        {
            link: 'https://www.linkedin.com/in/prateekpriyadarshi/',
            label: 'GitHub',
            Icon: <FaGithubSquare />,
        },
        {
          link: 'https://www.linkedin.com/in/prateekpriyadarshi/',
          label: 'Gmail',
          Icon: <IoIosMail />,
      },
        {
            link: 'https://www.linkedin.com/in/prateekpriyadarshi/',
            label: 'Instagram',
            Icon: <FaInstagramSquare />,
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div
                    className={styles.mobileOnly}
                    // style={{ backgroundColor: "rgb(28, 4, 36)" }}
                >
                    <p className="text-2xl font-extrabold tracking-wide">
                        Prateek Priyadarshi
                    </p>
                    <p className="mt-6">{content}</p>
                </div>
                <TextRevealCard
                    className={`${styles.description} ${styles.hideOnMobile}`}
                    text="You know the business."
                    revealText="I know the code."
                >
                    <p className={styles.title}>Prateek Priyadarshi</p>

                    <TextRevealCardDescription>
                        {content}
                    </TextRevealCardDescription>
                </TextRevealCard>
                

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
                        <h1>6+</h1>
                        <p>Professional Certifications</p>
                    </div>
                </div>
                <div className={styles.boxes}>
                  {socials.map((social) => {
                    return (
                      <Link href={social.link} key={index} className={styles.box} aria-label={social.label}>
                        
                       </Link>
                    )
                  })}
                   
                    
                </div>
            </div>
            <div
                className={`${styles.imgContainer} flex items-center justify-center`}
            >
                {/* <Image src="/about.png" alt="About Image" fill className={styles.img} /> */}
                <h1>Projects Gallore Coming Soon ... </h1>
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
