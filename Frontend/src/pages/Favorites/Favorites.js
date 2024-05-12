import React, { useEffect, useState } from 'react'
import styles from './Favorites.module.css'
import { Link } from 'react-router-dom'
import { getArtsFromFavorites } from '../../services/artService'
const Favorites = () => {

    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(false)
    const [loadingSearch,setLoadingSearch] = useState(false)

    useEffect(() => {

        const res = getSavedArts()
        getArtsFromFavorites(res)
        .then(res => {
            setItems(res)
        })

        

    },[])

    const getSavedArts = () => {
        const arts = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            arts.push(localStorage.getItem(key));
        }
        return arts;
    }

  return (
    <div className={styles.container} >
    {items && items.map((art) => (
    <div key={art.id} className={styles.divPhotoPai}>
              <Link
                to={`/art/${art.id}`}
                className={styles.photo_container}
              >
                <p> {art.title} </p>
                {art.image_id ? (
                  <img
                    src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                    onLoad={() => {
                      setLoading(false);
                      setLoadingSearch(false);
                    }}
                  />
                ) : (
                  " "
                )}

                <div
                  style={{ border: "1px solid red", marginLeft: "0px" }}
                ></div>
              </Link>
        </div>
    ) )}
    </div>
  )
}

export default Favorites