import React from 'react'
import styles from './TravelTips.module.css'

const TravelTips = ({theme}) => {

  const tips = [
    'Providencie seu passaporte',
    'Veja documentos necessários',
    'Verifique a necessidade de visto de permanência',
    'Providencie um seguro para a viagem',
    'Tome as vacinas necessárias',
    'Confira o Câmbio',
    'Confira o fuso horário do seu destino',
    'Monte um roteiro turístico com antecedência',
    'Leve um kit primeiros socorros para a viagem internacional'
  ]

  return (
    <div className={ theme == 'dark' ? styles.container_dark : styles.container}>
        <div className={styles.container_filho} >
      <h2 className={ theme == 'dark' ? styles.title_dark : styles.title}>Dicas para a viagens internacionais:</h2>
      <ul className={styles.list}>
        {tips.map((tip, index) => (
            <li key={index} className={ theme == 'dark' ? styles.item_dark : styles.item}>{tip}</li>
            ))}
      </ul>
    </div>
</div>
  )
}

export default TravelTips
