import { Link } from "react-router-dom";

export default function AccomodationCard({ title, image, id, loadedCallback }) {
    const handleLoaded = () => { loadedCallback(id) }
    
    return (
        <Link to={ 'accomodation/' + id }>
            <article>
                    <h2>{ title }</h2>
                    <img
                    src={ image } 
                    alt={ title }
                    onLoad={ handleLoaded }/>
            </article>
        </Link>
    )
}