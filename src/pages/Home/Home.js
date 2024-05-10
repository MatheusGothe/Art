import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import TravelTips from '../../Components/TravelTips';
import { getArts, searchArts } from '../../services/artService';
import { Link, Navigate } from 'react-router-dom';
import Loading from '../../Components/Loading';


const Home = ({theme}) => {
  
  const [search,setSearch] = useState('')
  const [photos, setPhotos] = useState([])
  const [arts,setArts] = useState([])
  const [numItemsDisplayed, setNumItemsDisplayed] = useState(6)
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)


  useEffect(() => {

    const fetchArts = async() => {
      const data = await getArts()

      setArts(data)
    }

    const getArt = async(search) => {
      const data = await searchArts(search)
      setArts(data)
    }
    
    if(search !== ''){
      console.log('caiu')
      // buscar a api por filtros
      setNumItemsDisplayed(6)
      getArt(search)
      
    } else {
      setLoading(true)
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

  const loadMoreArts = async() => {
    setLoading(true)

    console.log(loading)
    const nextPage = currentPage + 1;
    const newArts = await getArts(nextPage)
    setArts([...arts,...newArts])
    setCurrentPage(nextPage)
  }
  

  return (
    <div style={{ with: "100%" }}>
      {loading && <Loading />}
      <div className={theme == "dark" ? styles.divHome_dark : ""}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className={styles.searchInput}
            placeholder="Search"
          />
        </div>
        <div className={styles.divPhotoPai}>
          {arts && arts.slice(0, numItemsDisplayed).map((art) => (
          <Link to={`/art/${art.id}`} key={art.id} className={styles.photo_container}>
            <p > {art.title} </p>
            {art.thumbnail && (
              <img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} onLoad={() => setLoading(false)} /> 
            )}
            <div style={{border:'1px solid red',marginLeft:'0px'}}>
            </div>
          </Link>
        ))}
        </div>
        {arts && (
          <div className={styles.div_button}>
            {numItemsDisplayed > arts.length ?  (
                        <button
                        className={theme == "dark" ? styles.dark_mode : styles.verMais}
                        onClick={loadMoreArts}
                      >
                        Carregar Mais
                      </button>
            ) : (
            <button
              className={theme == "dark" ? styles.dark_mode : styles.verMais}
              onClick={handleViewMore}
            >
              Ver mais
            </button>
            )}
            
            <button
              disabled={numItemsDisplayed <= 6}
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
