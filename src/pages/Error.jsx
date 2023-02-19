import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function Error({ status }){
    const error = useRouteError()
    return (
        <React.Fragment>
            { status === 404 ||(error && error.status === 404) ? 
                <div className="not-found">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link to='/'>Retourner sur la page d'accueil</Link>
                </div> :
                <div className="not-found">
                    <h1>500</h1>
                    <p>Oups! Une erreur interne s'est produite.</p>
                    <Link to='/'>Retourner sur la page d'accueil</Link>
                </div>
            }
        </React.Fragment>
        
    )
}