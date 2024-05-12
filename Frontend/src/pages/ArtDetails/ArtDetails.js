import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArt } from '../../services/artService';
import styles from './ArtDetails.module.css';
import Loading from '../../Components/Loading';

// Icons
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";

// Message
import toast, { Toaster } from 'react-hot-toast';
const ArtDetails = () => {

    const { id } = useParams();
    const [artwork, setArtwork] = useState('');
    const [saved,setSaved] = useState(false)
    useEffect(() => {
        const fetchArtwork = async () => {
            try {
                const res = await getArt(id);
                setArtwork(res); 
                setSaved(localStorage.getItem(`art-${id}`) !== null)
                console.log(res)
            } catch (error) {
                console.error("Erro ao buscar obra de arte:", error);
            }
        };
        fetchArtwork();
    }, [id]);


    const saveIcon = (id) =>{
        localStorage.setItem(`art-${id}`,id)
        setSaved(true)
        toast.success('Item Saved')
    }

    const deleteIcon = (id) => {
        localStorage.removeItem(`art-${id}`);
        setSaved(false)
        toast.success('Item Removed')
    }

    const isSaved = (id)=> {
        return localStorage.getItem(`art-${id}`) !== null
    }




    if (!artwork) {
        return <Loading />;
    }

    return (
        <div className={styles.artDetailsContainer}>
            <Toaster position='top-right' />
            <div className={styles.divPai} >
              <div className={styles.artHeader} >
            <h1 className={styles.artTitle}>{artwork.title}</h1>
            <div className={styles.centeredImage}>
                {artwork.thumbnail ?  (
                <img className={styles.artImage} src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title} />
                ) : (
                    <p>Imagem não disponível</p>
                )}
            </div>
           
        </div>
            <div className={styles.artInfo}>
                <p style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                    <div>
                    <strong>Artista:</strong> {artwork.artist_display || 'Informação não disponível' } 
                    </div>
                    {saved ? (
                        <FaBookmark onClick={() => deleteIcon(id)} className={styles.iconSave} size={25} />
                    ) : (
                        <FaRegBookmark onClick={() => saveIcon(id)} className={styles.iconSave} size={25} />
                    )}
                    </p>
                <p><strong>Data de criação:</strong> {artwork.date_display  || 'Informação não disponível'}</p>
                <p><strong>Descrição:</strong> {artwork.description  || 'Informação não disponível'}</p>
                <p><strong>Materiais:</strong> {artwork.material_titles.join(', ')  || 'Informação não disponível'}</p>
                <p><strong>Estilo:</strong> {artwork.style_titles.join(', ')  || 'Informação não disponível'}</p>
                <p><strong>Categoria:</strong> {artwork.category_titles.join(', ')  || 'Informação não disponível'}</p>
                <p><strong>Local de origem:</strong> {artwork.place_of_origin  || 'Informação não disponível'}</p>
                <p><strong>Crédito:</strong> {artwork.credit_line  || 'Informação não disponível'}</p>
                <p><strong>Exposições:</strong> {artwork.exhibition_history  || 'Informação não disponível'}</p>
                <p><strong>Proveniência:</strong> {artwork.provenance_text  || 'Informação não disponível'}</p>
                {/* Adicione mais detalhes conforme necessário */}
            </div>
            </div>
        </div>
    );
};

export default ArtDetails;
