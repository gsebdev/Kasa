import '../assets/scss/components/ratings.scss';

export default function Ratings({ rating }) {
    
    const stars = []
    
    for( let i = 0; i < 5; i++) { 
        stars.push(
            <div key={'star-'+i} className={(i + 1) <= rating ? 'ratings__star active': 'ratings__star'}>

            </div>)
    }
    return (
        <div className="ratings">
            {stars}
        </div>
    )
}