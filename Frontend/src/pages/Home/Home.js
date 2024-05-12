import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { getArts, searchArts, updateImageArts } from '../../services/artService';
import { Link } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { FaSearch } from "react-icons/fa";
import Lottie from "react-lottie-player";
import LoadingAnimationImage from '../../assets/loadAnimationImage.json';

const ITEMS_PER_PAGE = 6;

const Home = () => {
  const [search, setSearch] = useState('');
  const [arts, setArts] = useState([]);
  const [numItemsDisplayed, setNumItemsDisplayed] = useState(6);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingSearch, setLoadingSearch] = useState(false);

  useEffect(() => {
    if(search !== ''){
      setNumItemsDisplayed(ITEMS_PER_PAGE);
    } else {
      setLoading(true);
      fetchArts();
      setLoading(false)
    }


  }, [search]);

  const fetchArts = async () => {
    const data = await getArts();
    setArts(data);
  };

  const handleSearchImages = (search) => {
    if(search.trim() === ''){
      return;
    }

    setLoadingSearch(true);
    searchArts(search).then(res => {
      if(res == null){
        setLoadingSearch(false);
      }

      updateImageArts(res).then(updatedArts => {
        setArts(updatedArts);
      });
    });
  };

  const handleViewMore = () => {
    setNumItemsDisplayed(numItemsDisplayed + ITEMS_PER_PAGE);
  };

  const handleViewLess = () => {
    setNumItemsDisplayed(numItemsDisplayed - ITEMS_PER_PAGE);
  };

  const loadMoreArts = async () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    const newArts = await getArts(nextPage);
    setArts([...arts, ...newArts]);
    setCurrentPage(nextPage);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    handleSearchImages(search)
  }

  return (
    <div style={{ width: "100%" }}>
      {loading && <Loading />}
      <div >
        <form
          className={styles.searchContainer}
          onSubmit={handleSubmit}
        >
          <FaSearch onClick={handleSubmit}  className={styles.iconSearch} size={20} />
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className={styles.searchInput}
            placeholder="Search"
          />
        </form>

        {loadingSearch && (
          <Lottie
            className="lottie"
            style={{
              width: 80,
              height: 80,
              margin: "0 auto",
            }}
            loop
            animationData={LoadingAnimationImage}
            play
            speed={5}
          />
        )}
        {arts === null && <p>Sem fotos para exibir</p>}
        <div className={styles.divPhotoPai}>
          {arts &&
            arts.slice(0, numItemsDisplayed).map((art) => (
              <Link
                to={`/art/${art.id}`}
                key={art.id}
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
              </Link>
            ))}
        </div>
        {arts && (
          <div className={styles.div_button}>
            {numItemsDisplayed > arts.length ? (
              <button
                className={styles.verMais}
                onClick={loadMoreArts}
                style={search !== "" ? { display: "none" } : {}}
                disabled={loading}
              >
                {loading ? 'Carregando' : 'Carregar Mais'}
              </button>
            ) : (
              <button
                className={styles.verMais}
                onClick={handleViewMore}
              >
                Ver mais
              </button>
            )}
            <button
              disabled={numItemsDisplayed <= ITEMS_PER_PAGE}
              className={styles.verMais}
              onClick={handleViewLess}
            >
              Ver menos
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
