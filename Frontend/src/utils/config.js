

 const requestConfig = (method, data, token = null) => {
  let config;

    config = {
      method,
      body: null,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : '4uxxSszlVYnliAy5GHhUezHFCK5RYuX8zRtbg9CxdE5sOrAoueCe0KTN'
      },
    };
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const getPhotos = async(value) => {

  if(value == ''){
    value = 'places'
  }

  try {
    const config = requestConfig('GET',null)
  
    const res = await fetch('https://api.pexels.com/v1/search?query=' + value +'&per_page=80',config)
    .then(res => res.json())

    return res
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  requestConfig,
  getPhotos
}