import React from 'react'
import styles from './Contact.module.css'

const Contact = ({ theme }) => {
  return (
    <div className={theme == 'dark' ? styles.divContact_dark : styles.divContact}>
      <h2>Contato</h2>
      <form onSubmit={(e) => e.preventDefault()} >
        <div >
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} className={styles.div_label} >
        <label >Nome:</label>
        <input className={styles.input_contact} placeholder='Digite o seu nome' type="text" id="name" name="name" />
        <br />
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} className={styles.div_label}>
        <label >Email:</label>
        <input className={styles.input_contact} placeholder='Informe o seu e-mail' type="email" id="email" name="email" />
        <br />
          </div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}} className={styles.div_label}>
        <label >Mensagem:</label>
        <textarea className={styles.textarea} id="message" name="message"></textarea>
        <br />
          </div>
        <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  )
}

export default Contact
