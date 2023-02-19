import { Link } from "react-router-dom";
import '../assets/scss/components/accomodation-card.scss';

export default function AccomodationCard({ title, image, id, loadedCallback }) {
    
    return (
        <Link to={ 'accomodation/' + id }>
            <article className="accomodation-card">
                    <h2>{ title }</h2>
                    <img
                    src={ image } 
                    alt={ title }
                    onLoad={ () => {loadedCallback(id)} }/>
            </article>
        </Link>
    )
}