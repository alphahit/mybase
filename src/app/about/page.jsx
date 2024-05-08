import Image from 'next/image';
import styles from './about.module.css';
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from '@/components/ui/TextReveal';

import { FaLinkedin } from 'react-icons/fa6';

import {
    FaGithubSquare,
    FaInstagramSquare,
    FaNode,
    FaReact,
} from 'react-icons/fa';
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from 'react-icons/tb';
import { IoIosMail } from 'react-icons/io';
import { SiTypescript, SiExpress, SiGraphql } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import Link from 'next/link';
import Skills from '@/components/Skills';
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
            link: 'https://www.linkedin.com/in/prateek-pi/',
            label: 'LinkedIn',
            Icon: <FaLinkedin />,
        },
        {
            link: 'https://github.com/alphahit',
            label: 'GitHub',
            Icon: <FaGithubSquare />,
        },
        {
            link: 'https://www.instagram.com/sage_hit?igsh=MWF0NzByMGp5bTlhMg==',
            label: 'Instagram',
            Icon: <FaInstagramSquare />,
        },
    ];
    const skills = [
        {
            label: 'React Native',
            Icon: <TbBrandReactNative />,
        },
        {
            label: 'Next.js',
            Icon: <TbBrandNextjs />,
        },
        {
            label: 'React',
            Icon: <FaReact />,
        },
        {
            label: 'TypeScript',
            Icon: <SiTypescript />,
        },
        {
            label: 'Node.js',
            Icon: <FaNode />,
        },
        {
            label: 'Express.js',
            Icon: <SiExpress />,
        },
        {
            label: 'GraphQL',
            Icon: <SiGraphql />,
        },
        {
            label: 'MongoDB',
            Icon: <DiMongodb />,
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
                    {socials.map((social, index) => {
                        return (
                            <Link
                                href={social.link}
                                key={index}
                                className={styles.box}
                                aria-label={social.label}
                            >
                                <div className="pt-1 rounded flex items-center gap-2 cursor-pointer">
                                    <div className="flex justify-center">
                                        {social.Icon}
                                    </div>
                                    <div>{social.label}</div>
                                    {/* <div>{social.link}</div> */}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={`${styles.imgContainer} flex  justify-center `}>
                <Skills item={skills} />
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
