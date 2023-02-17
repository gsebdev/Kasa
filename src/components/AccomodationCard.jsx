import { useState } from "react";
import { Link } from "react-router-dom";

export default function AccomodationCard({ title, image, id }) {
    const [ loaded, setLoaded ] = useState(false)

    return (
        <Link to={ 'accomodation/' + id }>
            <article className={ loaded ? '' : 'loading' }>
                    <h2>{ title }</h2>
                    <img
                    src={ image } 
                    alt={ title }
                    onLoad={ () => {setLoaded(true)} }/>
            </article>
        </Link>
    )
}