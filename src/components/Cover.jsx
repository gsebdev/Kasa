import '../assets/scss/components/cover.scss';

export default function Cover({ image, altText='', title=null, additionalClass='' }){
    return (
        <div className={'cover ' + additionalClass}>
            <img src={image} alt={altText} />
            { title && <h1>{title}</h1>}
        </div>
        )
}