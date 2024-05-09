import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { createClient } from 'pexels';
import { getPhotos } from '../../utils/config';
import TravelTips from '../../Components/TravelTips';
import { getArts, searchArts } from '../../services/artService';
import { Link, Navigate } from 'react-router-dom';

const Home = ({theme}) => {
  
  const [search,setSearch] = useState('')
  const [photos, setPhotos] = useState([])
  const [arts,setArts] = useState([])
  const [numItemsDisplayed, setNumItemsDisplayed] = useState(6)

  useEffect(() => {
    const fetchArts = async() => {
      const data = await getArts()
      console.log('oi')
      setArts(data)
    }

    const getArt = async(search) => {
      const data = await searchArts(search)
      setArts(data)
    }

    if(search !== ''){
      // buscar a api por filtros
      getArt(search)
    } else {
      fetchArts()
    }
    
  

  },[search])


  const handleViewMore = () => {
    setNumItemsDisplayed(numItemsDisplayed + 6)
  }
  const handleViewLess = () => {
    setNumItemsDisplayed(numItemsDisplayed - 6)
  }

  const handleNavigate = (id) =>{
  //  Navigate({to:`/${id}`})
  }

  return (
    <div style={{with:'100%'}}>
    <div className={theme == "dark" ? styles.divHome_dark : ""}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
        <h1>Local de Destino:</h1>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          style={{borderRadius:'2px'}}
        />
      </div>
      <div className={styles.divPhotoPai}>

        {arts && arts.slice(0, numItemsDisplayed).map((art) => (
          <Link to={`/art/${art.id}`} key={art.id} className={styles.photo_container}>
            <p  > {art.title} </p>
            <img src={art?.thumbnail.lqip} alt={art.photographer} />
          </Link>
        ))}
      </div>
        <div className={styles.div_button}>
          <button
            disabled={numItemsDisplayed > arts.length}
            className={theme == "dark" ? styles.dark_mode : styles.verMais}
            onClick={handleViewMore}
          >
            Ver mais
          </button>
          <button
            disabled={numItemsDisplayed <= 6}
            className={theme == "dark" ? styles.dark_mode : styles.verMais}
            onClick={handleViewLess}
          >
            Ver menos
          </button>
        </div>
    </div>
    <TravelTips theme={theme} />
    </div>
  );
}

export default Home
