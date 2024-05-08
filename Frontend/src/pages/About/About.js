import React from 'react'
import styles from './About.module.css'

const About = ({theme}) => {
  return (
    <div className={theme == "dark" ? styles.divAbout_dark : styles.divAbout}>
      <h1>About</h1>
      <p className={styles.p_about} >
        Nossa empresa de viagens foi fundada com o objetivo de proporcionar
        experiências únicas e inesquecíveis para nossos clientes. Com anos de
        experiência no setor de turismo, nossa equipe dedicada trabalha
        incansavelmente para criar pacotes personalizados que atendam às
        necessidades e desejos de cada viajante. Desde o planejamento até a
        execução, cuidamos de todos os detalhes para que nossos clientes possam
        desfrutar de suas férias sem preocupações. Oferecemos uma ampla
        variedade de destinos e atividades, desde aventuras emocionantes até
        relaxamento tranquilo em praias paradisíacas. Nossa paixão é viajar e
        estamos comprometidos em compartilhar essa paixão com nossos clientes.
        Acreditamos que viajar enriquece a vida e expande nossos horizontes, e é
        por isso que nos esforçamos para oferecer as melhores experiências de
        viagem possíveis. Obrigado por considerar nossa empresa para suas
        próximas férias. Estamos ansiosos para ajudá-lo a criar memórias
        inesquecíveis! 😊
      </p>
    </div>
  );
}

export default About