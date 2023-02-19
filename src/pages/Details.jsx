import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
import Collapse from "../components/Collapse"
import Loading from "../components/Loading"
import Ratings from "../components/Ratings"
import Slideshow from "../components/Slideshow"

export default function Details() {
    const [loading, setLoading] = useState(true)
    const details = useLoaderData()

    return (
        <React.Fragment>
            {loading && <Loading />}

                <Slideshow 
                    images={details.pictures} 
                    alt={details.title}
                    loadedCallback={() => {setLoading(false)}} 
                />
                <div className="accomodation__flex-container">
                        <div>
                            <h1 className="accomodation__title">{details.title}</h1>
                            <p className="accomodation__location">{details.location}</p>
                        </div>
                        <div className="accomodation__host">
                            <p>{details.host.name.split(' ')[0]}<br />{details.host.name.split(' ')[1]}</p>
                            <img src={details.host.picture} alt={details.host.name} />
                        </div>
                </div>
                <div className="accomodation__flex-container">
                        <div className="accomodation__tags-container">
                                { details.tags.map(tag => <span key={tag} className="accomodation__tag">{tag}</span>) }
                        </div>
                        <Ratings rating={+details.rating}/>
                </div>
                <div className="accomodation__collapse-container">
                        <Collapse title="Description" body={details.description}/>
                        <Collapse title='Équipements' body={details.equipments} />
                </div>

        </React.Fragment>
        )
    }