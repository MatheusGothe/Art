// Footer.js
import React from 'react'
import styles from './Footer.module.css'
const Footer = ({theme}) => {
  return (
    <div className={ theme == 'dark' ? styles.footer_dark : styles.footer}>
      <div>
        <h3>Contato</h3>
        <p>Email: viajens@viajens.com</p>
        <p>Telefone: (12) 3456-7891 </p>
      </div>
      <div>
        <h3>Redes sociais</h3>
        <a href='#'>LinkedIn</a> |
        <a href='#'>GitHub</a> |
        <a href='#'>Instagram</a>
      </div>
    </div>
  )
}

export default Footer
