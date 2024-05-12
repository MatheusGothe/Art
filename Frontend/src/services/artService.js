const apiUrl = 'https://api.artic.edu/api/v1/artworks'


const getArts = async(page = 1, limit = 20) => {

    try {

        const res = await fetch(`${apiUrl}?page=${page}&limit=${limit}`)
                    .then(res => res.json())

        return res.data
        
    } catch (error) {
        console.log(error)
    }

}

const searchArts = async(search) => {
    try {
        const res = await fetch(`${apiUrl}/search?q=${search}`)
            .then(res => res.json())
        
        if(res.data.length == 0){
            return null
        }
        
        return res.data

      
    } catch (error) {
        console.log(error)
    }
}


const getArt = async(id) => {

    try {
        const res = await fetch(`${apiUrl}/${id}`)
                    .then(res => res.json())

        return res.data
    } catch (error) {
        
    }

}

const updateImageArts = async(data) => {
    console.log(data)
    if(!data){
        console.log('oiiiiiii')
        return null
    }

    const artDetails = await Promise.all(data.map(async item => {
        const response = await fetch(item.api_link);
        return response.json();
    }));

    const artData = artDetails.map(art => art.data)

    return artData;
}

const getArtsFromFavorites = async (data) => {
    try {
        const promises = data.map(id => fetch(`${apiUrl}/${id}`)
            .then(res => res.json())
            .then(json => json.data));
        const res = await Promise.all(promises);
        console.log(res)
        return res;
    } catch (error) {
        console.log(error)
    }
}



export {getArts,searchArts,getArt,updateImageArts,getArtsFromFavorites}

