import React from 'react'
import Spinner from '../icons/spinner.png';

const Loading = () => {
    let content = <div className="loading-screen">
                    <div className="container spinner">
                        <img src={Spinner} alt="Spinner"></img>
                    </div>
                    <div className="text">
                        <h2>Carregando</h2>
                    </div>
                </div>
                
    return content
}

export default Loading