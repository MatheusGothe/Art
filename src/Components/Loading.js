import React from 'react'
import './Loading.css'
const Loading = () => {
    return (
        <div className="loading">
              <div className="ring"></div>
              <span className='load'>loading...</span>
        </div>
      );
}

export default Loading