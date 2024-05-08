const apiUrl = 'https://api.artic.edu/api/v1/artworks'


const getArts = async(page = 1,limit = 20) => {


    try {

        const res = await fetch(`${apiUrl}?page=${page}&limit=${limit}`)
                    .then(res => res.json())
                    

        return res.data
        
    } catch (error) {
        console.log(error)
    }


}

export {getArts}

