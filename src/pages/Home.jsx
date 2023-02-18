import React, { useEffect, useState } from "react"
import api from "../api/api"
import AccomodationCard from "../components/AccomodationCard"
import homeCover from '../assets/img/home-cover.jpg'
import Cover from "../components/Cover"

function Home() {
    const [ accomodations, setAccomodations ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    
    useEffect(() => {
        async function getAccomodationsList() {
            setLoading(true)
            try {
                const accomodationsList = await api.getAll()
                setAccomodations(accomodationsList)
            }
            catch(err) {
                setError(err)
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }
        getAccomodationsList()
    }, [])
        
    const accomodationCards = accomodations.map((accomodation) => {
        return <AccomodationCard
                    key={accomodation.id}
                    title={accomodation.title}
                    image={accomodation.cover}
                    id={accomodation.id} />
        })
   
    const loader = <span>Loading...</span>

    return (
        <React.Fragment>
            <Cover
                title='Chez vous, partout et ailleurs'
                image={homeCover}
                altText='paysage bord de côte océan'
                additionalClass='home__cover'
            />           
            {error ? <span>Oups! Il y a eu une erreur</span> :
            <div className="home__row">
            { loading ? loader : accomodationCards }
            </div>}
        </React.Fragment>
        
    )
}
export default Home