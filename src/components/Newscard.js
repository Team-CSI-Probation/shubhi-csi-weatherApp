import React from 'react'
import { news } from './News'

export default function Newscard({newsData}) {
    // console.log(newsData);
    return (
        <>
        {newsData.map((curElem)=>{
            return(
                <>
                <div className='card-container' key={curElem.id}>
                    <div className="card mx-6" style={{ width: "25rem"}}>
                        <img src={curElem.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{curElem.text}</h5>
                        <p className="card-text">{curElem.description}</p>
                        <a href="/" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
            )
        })}

            
        </>
    )
}
