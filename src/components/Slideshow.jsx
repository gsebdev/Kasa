import React, { useEffect, useMemo, useRef, useState } from "react"
import arrow from '../assets/img/arrow-navigation.svg'
import '../assets/scss/components/slideshow.scss';


export default function Slideshow({ images, alt="", slideDuration=300, loadedCallback }){

    const [position, setPosition] = useState(1)
    const [ transitionDuration, setTransitionDuration ] = useState(slideDuration)
    const preventSlide = useRef(false)
    const slideCounter = useRef(1)

    const imagesToDisplay = useMemo(() => [images[images.length - 1], ...images, images[0]], [images])
    const slideshowImages = useMemo(() => imagesToDisplay.map((image, index) => {
        return (
            <img
                key={index + image} 
                className='slideshow__image' 
                src={image} 
                alt={alt}
            />
        )
    }), [imagesToDisplay, alt])

    

    useEffect(() => {
        const resetNavigation = setTimeout(() => {
            if(position === images.length + 1){
                setTransitionDuration(0)
                setPosition(1) 
            }
            if(position === 0) {
                setTransitionDuration(0)
                setPosition(images.length)
            }
            preventSlide.current = false 
            }, slideDuration)

        return () => {
            clearTimeout(resetNavigation)
        }


    }, [position, slideDuration, images.length])

    const handleClick = (direction) => { 
        if(preventSlide.current){
            return false 
        }
        if(transitionDuration !== slideDuration) {
            setTransitionDuration(slideDuration)
        }
        preventSlide.current = true

        const newPosition = direction === 'next' ? position + 1 : position - 1
        
        if(newPosition === 0){
            slideCounter.current = images.length
        }else if(newPosition === images.length + 1){
            slideCounter.current = 1
        }else{
            slideCounter.current = newPosition
        }

        setPosition(newPosition)
    }

    return (
        <div className="slideshow__container">

            {images.length > 1 && <React.Fragment>
                <div className="slideshow__next slideshow__navigation" onClick={() => {handleClick('next')}}>
                    <img src={arrow} alt="" />
                </div>
                <div className="slideshow__previous slideshow__navigation" onClick={() => {handleClick('previous')}}>
                    <img src={arrow} alt="" />
                </div>
                <div className="slideshow__counter">{slideCounter.current}/{images.length}</div>
             </React.Fragment>}
             
             <div 
                className="slideshow__images-container"
                onLoad={() => { console.log('loade') 
                loadedCallback()}
            }
                style= { {
                    gridTemplateColumns: `repeat(${images.length + 2}, 100%)`,
                    transform: `translateX(-${position * 100}%)`,
                    transitionDuration: `${transitionDuration}ms`
                        } }
                >
                {slideshowImages}
             </div>
        </div>
    )
}