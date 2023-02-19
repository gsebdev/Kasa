import React, { useRef, useState } from "react"
import AccomodationCard from "../components/AccomodationCard"
import homeCover from '../assets/img/home-cover.jpg'
import Cover from "../components/Cover"
import Loading from "../components/Loading"
import { useLoaderData } from "react-router-dom"

function Home() {
    const [ loading, setLoading ] = useState(true)
    const accomodations = useLoaderData()
    const cardLoadedList = useRef({})

    const handleLoadedCard = (id) => {
        cardLoadedList.current[id] = true
        if(Object.keys(cardLoadedList.current).length >= accomodations.length){
            setLoading(false)
        }
    }

    const accomodationCards = accomodations.map((accomodation) => {
        return <AccomodationCard
                    key={accomodation.id}
                    title={accomodation.title}
                    image={accomodation.cover}
                    id={accomodation.id}
                    loadedCallback={handleLoadedCard} />
        })
   
    const cover = <Cover
                    title='Chez vous, partout et ailleurs'
                    image={homeCover}
                    altText='paysage bord de côte océan'
                    additionalClass='home__cover'/>  

    return (
        <React.Fragment>
            {loading && <Loading />}     
            {cover}
            <div className="home__row" style={
                loading ? {height: 0} : null
            }>
                    { accomodationCards }
            </div>
        </React.Fragment>       
    )
}
export default Home