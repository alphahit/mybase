import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/CardHoverEffect'
import Link from 'next/link';
import styles from '../app/about/about.module.css';
function Socials({socials}) {
  return (
    <div>
            <Title text='Socials'/>
            <div className={`pt-8 flex justify-between ${styles.responsiveContainer}`}>
            {socials.map((social, index) => (
                <Link href={social.link} key={index} className={styles.box} aria-label={social.label}>
                    <div className="pt-1 rounded flex items-center gap-2 cursor-pointer">
                        {social.Icon}
                        <div>{social.label}</div>
                    </div>
                </Link>
            ))}
        </div>
            
    </div>

  )
}

export default Socials