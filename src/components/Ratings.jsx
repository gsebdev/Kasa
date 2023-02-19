import star from '../assets/img/star.svg'
import '../assets/scss/components/ratings.scss';

export default function Ratings({ rating }) {
    
    const stars = []
    
    for( let i = 0; i < 5; i++) { 
        stars.push(<span key={'star-'+i} className={(i + 1) <= rating ? 'ratings__star active': 'ratings__star'}>
                        <svg>
                            <use href={star + '#star'}></use>
                        </svg>
                    </span>)
    }

    return (
        <div className="ratings">
            {stars}
        </div>
    )
}