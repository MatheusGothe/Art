import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import { createClient } from 'pexels';
import { getPhotos } from '../../utils/config';
import TravelTips from '../../Components/TravelTips';
import { getArts } from '../../services/artService';

const Home = ({theme}) => {
  
  const [search,setSearch] = useState('')
  const [photos, setPhotos] = useState([])
  const [arts,setArts] = useState([])
  const [numPhotosDisplayed, setNumPhotosDisplayed] = useState(6)

  useEffect(() => {
    const fetchPhotos = async () => {
      const data = await getPhotos(search)
      setPhotos(data.photos)
    }
    fetchPhotos()
    
    const fetchArts = async() => {
      const data = await getArts()
      console.log(data)
      setArts(data)
    }
    fetchArts()
  },[search])


  const handleViewMore = () => {
    setNumPhotosDisplayed(numPhotosDisplayed + 6)
  }
  const handleViewLess = () => {
    setNumPhotosDisplayed(numPhotosDisplayed - 6)
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
        {arts.slice(0, numPhotosDisplayed).map((art) => (
          <div key={art.id} className={styles.photo_container}>
            {console.log(art.id)}
            <p> {art.title} </p>
            <img src={art.thumbnail.lqip} alt={art.photographer} />
          </div>
        ))}
      </div>

      {numPhotosDisplayed < photos.length && (
        <div className={styles.div_button}>
          <button
            className={theme == "dark" ? styles.dark_mode : styles.verMais}
            onClick={handleViewMore}
          >
            Ver mais
          </button>
          <button
            disabled={numPhotosDisplayed <= 6}
            className={theme == "dark" ? styles.dark_mode : styles.verMais}
            onClick={handleViewLess}
          >
            Ver menos
          </button>
        </div>
      )}
    </div>
    <TravelTips theme={theme} />
    </div>
  );
}

export default Home
