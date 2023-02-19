import React from 'react'
import { useLoaderData } from 'react-router-dom'
import aboutCover from '../assets/img/about-cover.jpg'
import Collapse from '../components/Collapse'
import Cover from '../components/Cover'


export default function About() {
    const sections = useLoaderData()
    return (
        <React.Fragment>
            <Cover
                    altText='paysage de montagne'
                    image={aboutCover}
                    additionalClass='about__cover'
            />
            <div>
            {
                sections.map((section, index) => {
                    return (
                        <Collapse
                            key={index + section.section}
                            title={section.section}
                            body={section.body}
                            className="about__collapse"
                        />
                    )
                })
            }  
            </div>
       </React.Fragment>
        
    )
}