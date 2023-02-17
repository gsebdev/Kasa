import { useState } from 'react'
import arrow from '../assets/img/arrow-navigation.svg'

export default function Collapse({ title, body, className='' }) {
    const [ open, setOpen ] = useState(false)

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true)    
    }

    
    let formattedBody = <span >{body}</span>
    if( typeof body === 'object' ) {
        const list = body.map((item, index) => <li key={`${item}-${index}`}>{ item }</li>)
        formattedBody = <ul >{list}</ul>
    }

    return (
        <div className={open ? 'collapse open ' + className  : 'collapse' + className}>
            <div 
                className='collapse__header'
                onClick = {handleClick}
                >
                <span className='collapse__title'>{title}</span>
                <span className='collapse__icon'>
                    <img src={arrow} alt="" />
                </span>
            </div>
            <div className='collapse__body'>{ formattedBody }</div>
        </div>
    )
}