import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Arkoprovo.</h1>
            <p className={styles.description}>
               I'm a Full-stack developer with 1 year of experience with Java.
               Reach out if you'd like  to learn more.
            </p>
            <a href='https://www.linkedin.com/in/arkoprovo-datta/' target='_blank' className={styles.contactBtn}>
              Contact Me
            </a>            
        </div>
        <img 
          src={getImageUrl("hero/heroImage.png")} 
          alt="Hero image of me"
          className={styles.heroImg} 
        />        
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}


