import React from 'react'
import styles from "./Coding.module.css"
import { getImageUrl } from '../../utils'

export const Coding = () => {
  return (
    <section className={styles.container}>
        <div className={styles.text}>
            <h1>CODING PROFILES</h1>
        </div>        
        <ul className={styles.links}>
            <li className={styles.link}>
                <div className={styles.linkImageContainer}>
                    <img style={{width: "85px", height: "75px"}} className={styles.linkImage} src={getImageUrl("coding/leetcode.png")}
                        alt="Leetcode Icon" />
                </div>
                <a href="https://leetcode.com/u/arkoprovodatta/" target='_blank'>Leetcode Profile</a>
            </li>
            <li className={styles.link}> 
                <div className={styles.linkImageContainer}>
                    <img style={{width: "70px", height: "70px"}} className={styles.linkImage} src={getImageUrl("coding/codechef.png")}
                        alt="Codechef Icon" />
                </div>
                <a href='https://www.codechef.com/users/arko2001' target='_blank'>Codechef Profile</a>
            </li>
            <li className={styles.link}>
                <div className={styles.linkImageContainer}>
                    <img style={{width: "80px", height: "45px"}} className={styles.linkImage} src={getImageUrl("coding/gfg.png")}
                        alt="GeeksforGeeks Icon" />
                </div>
                <a href='https://www.geeksforgeeks.org/user/arkoprovodatta/' target='_blank'>GeeksforGeeks Profile</a>
            </li>
            <li className={styles.link}>
                <div className={styles.linkImageContainer}>
                    <img style={{width: "80px", height: "80px"}}  className={styles.linkImage} src={getImageUrl("coding/github.png")}
                        alt="Github Icon" />
                </div>
                <a href='https://github.com/Arkoprovo123' target='_blank'>Github Profile</a>
            </li>
        </ul>
    </section>
  )
}
