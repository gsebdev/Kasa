import { useEffect, useRef, useState } from 'react'
import arrow from '../assets/img/arrow-navigation.svg'
import '../assets/scss/components/collapse.scss';


export default function Collapse({ title, body, className='' }) {
    const [ open, setOpen ] = useState(false)
    const [ height, setHeight ] = useState(0)

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true)    
    }
    const bodyText = useRef()
    
    let formattedBody = <span ref={bodyText}>{body}</span>
    if( typeof body === 'object' ) {
        const list = body.map((item, index) => <li key={`${item}-${index}`}>{ item }</li>)
        formattedBody = <ul ref={bodyText}>{list}</ul>
    }
    useEffect(() => {
        if(open) {
            setHeight(bodyText.current.offsetHeight)
            console.log(height)
        }
    }, [open])
    
    return (
        <div className={open ? 'collapse open ' + className  : 'collapse ' + className}>
            <div 
                className='collapse__header'
                onClick = {handleClick}
                >
                <span className='collapse__title'>{title}</span>
                <span className='collapse__icon'>
                    <img src={arrow} alt="" />
                </span>
            </div>
            <div 
                className='collapse__body'
                style={ open ? {height: height} : null}
            >{ formattedBody }</div>
        </div>
    )
}