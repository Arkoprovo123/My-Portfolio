import React from 'react'

import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
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
    </footer>
  )
}
