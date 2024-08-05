import React from 'react'
import styles from "./Reach.module.css";
import Swal from 'sweetalert2';

export const Reach = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1598a3c9-6811-4cc9-a5fb-c8a180e31e92");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };
    
    return (
    <section className={styles.container}>
        <form onSubmit={onSubmit} className={styles.formbox}>
            <h2>Get in touch</h2>
            <div className={styles.inputbox}>
                <label>Full Name</label>
                <input type='text' className={styles.inputfield} placeholder='Enter your name' name='name' required />
            </div>
            <div className={styles.inputbox}>
                <label>Email</label>
                <input type='email' className={styles.inputfield} placeholder='Enter your email' name='email' required />
            </div>
            <div className={styles.inputbox}>
                <label>Write a message</label>
                <textarea name='message' className={styles.textfield} placeholder='Enter your message'></textarea>
            </div>
            <button type='submit' className={styles.submitBtn}>Send</button>
        </form>
    </section>
    
  )
}
