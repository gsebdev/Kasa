import React, { useEffect, useState } from 'react'
import api from '../api/api'
import aboutCover from '../assets/img/about-cover.jpg'
import Collapse from '../components/Collapse'
import Cover from '../components/Cover'

export default function About() {
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ sections, setSections ] = useState([])

    useEffect(() => {
        async function getSections() {
            setLoading(true)
            try {
                const sectionsList = await api.getAllAbout()
                setSections(sectionsList)
            }
            catch(err) {
                setError(err)
                console.log(err)
            }
            finally {
                setLoading(false)
            }
        }
        getSections()
    }, [])


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