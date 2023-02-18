import React, { useEffect, useState } from "react"
import { redirect, useNavigate, useParams } from "react-router-dom"
import api from "../api/api"
import Collapse from "../components/Collapse"
import Ratings from "../components/Ratings"
import Slideshow from "../components/Slideshow"

export default function Details() {
    const [loading, setLoading] = useState(true)
    const [ error, setError ] = useState(false)
    const [details, setDetails ] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const getDetails = async () => {
            try {
                const accomodation = await api.getOneById(id)
                setDetails(accomodation)
            }
            catch(error) {
                if(error.cause === 404){
                    navigate('not-found')
                }
                setError(true)
                console.log(error)
            }
            finally {
                setLoading(false)
            }
            
        }
        getDetails()
    }, [id])


    if(loading) {
        return <span>Loading...</span>
    }else if(error) {
        return <span>Oups! Il y a eu une erreur</span>
    }
    return (
        <React.Fragment>
           <Slideshow images={details.pictures} alt={details.title} />
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