import React from 'react'

import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'
import { Reach } from '../Reach/Reach'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <h2 className={styles.title}>Contact</h2>        
        <div className={styles.includingReach}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h2>Reach out</h2>
                    <p>Feel free to reach out if you have any queries or want to work together!</p>
                </div>        
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")}
                            alt="Email Icon" />
                        <a href="mailto:arkoprovodatta@gmail.com" target='_blank'>arkoprovodatta@gmail.com</a>
                    </li>
                    <li className={styles.link}> 
                        <img src={getImageUrl("contact/linkedinIcon.png")}
                            alt="LinkedIn Icon" />
                        <a href='https://www.linkedin.com/in/arkoprovo-datta/' target='_blank'>linkedin.com/Arkoprovo</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")}
                            alt="Github Icon" />
                        <a href='https://github.com/Arkoprovo123' target='_blank'>github.com/Arkoprovo</a>
                    </li>
                </ul>
            </div>
            <Reach />
        </div>
    </footer>
  )
}
