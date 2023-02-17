import { useEffect, useState } from "react"
import api from "../api/api"
import AccomodationCard from "../components/AccomodationCard"

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
        error ? <span>Oups! Il y a eu une erreur</span> :
        <div className="row">
            { loading ? loader : accomodationCards }
        </div>
    )
}
export default Home