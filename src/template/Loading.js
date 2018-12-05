import React from 'react'

const Loading = () => {
    let content = <div className="loading-screen">
                    <div className="container loader1">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                    <div className="wrapper">
                        <h2>Por onde anda...</h2>
                    </div>
                </div>
                
    return content
}

export default Loading