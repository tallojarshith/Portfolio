import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Skills from './Skills'


const About = () => {

    const observerAbout = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('innerParaAnimation')
            } else {

            }
        })
    })

    useEffect(() => {
        let aboutParaElement = document.querySelectorAll('.innerAboutPara')
        aboutParaElement.forEach((element) => { observerAbout.observe(element); })

        let resumeContElement = document.querySelector('.resumeCont')
        observerAbout.observe(resumeContElement);
    }, [])


    return (
        <div id='about' className='aboutContainer d-flex  justify-content-center pt-5 pb-5'>
            <div className='innerContainer row '>
                <h2>About</h2>
                <div className='aboutInfoInnerCont col-sm-12 col-md-6 '>

                    <p className='para  innerAboutPara'>An avid technocrat with 2.5 years of demonstrated excellence in rendering techno-functional support. Highly skilled in managing end-to-end data science and machine learning projects. Proficient in data research and analysis, automating systems, integrating services, and creating a variety of reports while deploying innovative tools to steer efficient operations and delivery. Great team player and quick learner with excellent communication and interpersonal skills. Capable of working collaboratively in challenging environments.</p>
                    <hr />
                    <p className='para  innerAboutPara'>Research & Analytics | Descriptive/ Inferential Statistics | Problem Solving | Logical Thinking | Creativity & Innovation | Data Management | Data Modelling | Client Servicing | Teamwork | Communication | Interpersonal Relationship | Leadership</p>
                    <div className='resumeCont d-flex gap-5'>
                        <button className='whiteBtn resumeBtn resumeDownload'>
                            <Link className=""
                                to="/files/Resume.pdf"
                                target="_blank"
                                download>Download Resume</Link>
                        </button>
                    </div>
                </div>
                <div className='aboutSkillsInnerCont col-sm-12 col-md-6'>
                    <Skills />
                </div>
            </div>
        </div>
    )
}

export default About
