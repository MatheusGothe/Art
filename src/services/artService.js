const apiUrl = 'https://api.artic.edu/api/v1/artworks'


const getArts = async(page = 1, limit = 20) => {

    try {

        const res = await fetch(`${apiUrl}?page=${page}&limit=${limit}`)
                    .then(res => res.json())
                    console.log(res.data)

        return res.data
        
    } catch (error) {
        console.log(error)
    }

}

const searchArts = async(search) => {
    try {
        const res = await fetch(`${apiUrl}/search?q=${search}`)
            .then(res => res.json())
        console.log(res)
        if(res.data.length == 0){
            return
        }

        // Limite o número de obras de arte para as quais você busca detalhes
        const limitedArts = res.data.slice(0, 6);

        // Mapeie cada obra de arte para uma promessa que busca os detalhes da obra de arte
        const artDetailsPromises = limitedArts.map(art =>
            fetch(art.api_link)
            .then(res => res.json())
        );

        const artDetails = await Promise.all(artDetailsPromises);

        const artData = artDetails.map(art => art.data)

        console.log(artData)
        return artData;
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

export {getArts,searchArts,getArt}

