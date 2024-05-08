import React from 'react';
import Title from './Title';
import { HoverEffect } from './ui/CardHoverEffect';
import Link from 'next/link';
import styles from '../app/about/about.module.css';
function Milestones() {
    return (
        <div>
            <Title text="Milestones" />
            <div className={`pt-8 flex justify-between ${styles.responsiveContainer}`} style={{marginTop: '10px'}}>
                <div className={styles.box} style={{width: '25%'}}>
                    <h1 className='text-center '>3+</h1>
                    <p className='text-center text-wrap'>Years of Experience</p>
                </div>
                <div className={styles.box} style={{width: '25%'}}>
                    <h1 className='text-center '>10+</h1>
                    <p className='text-center text-wrap'>Projects Delivered</p>
                </div>
                <div className={styles.box} style={{width: '25%'}}>
                    <h1 className='text-center'>6+</h1>
                    <p className='text-center text-wrap'>Professional Certifications</p>
                </div>
            </div>
        </div>
    );
}

export default Milestones;
