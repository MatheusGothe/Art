// Footer.js
import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  
  
  return (
    <div className={styles.footer_dark}>
      <div>
        <h3>Contact </h3>
        <p> <strong>Email:</strong> api.artic.edu@gmail.com </p>
        <p> <strong>Tel: </strong> (12) 3456-7891 </p>
      </div>
      <div  >
        <h3>Social media</h3>
        <div className={styles.social_Media} >
        <a href='#'>LinkedIn</a> |
        <a href='#'>GitHub</a> |
        <a href='#'>Instagram</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
