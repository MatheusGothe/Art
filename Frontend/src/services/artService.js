const apiUrl = 'https://api.artic.edu/api/v1/artworks'


const getArts = async(search) => {


    const page = 1
    const limit = 20

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
    
    console.log(search)
    try {
        const res = await fetch(`${apiUrl}/search?q=${search}`)
            .then(res => res.json())
        console.log(res)
        if(res.data.length == 0){
            return
        }
        return res.data
    } catch (error) {

        console.log(error)
        
    }

}

export {getArts,searchArts}

