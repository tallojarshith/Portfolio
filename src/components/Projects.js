import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {

    const ProjectsObjects = [{
        id: 1,
        name: 'Thyroid Disease Detection Project',
        description: 'Thyroid disease is a prevalent health issue in India, affecting over ten million people annually. This project aims to develop a machine learning model that predicts whether an individual has compensated hypothyroid, primary hypothyroid, secondary hypothyroid, or no thyroid disorder (negative). Leveraging various classification algorithms, the project provides an efficient solution to detect thyroid disorders accurately',
        videoUrl: 'videoUrl',
        gitHubLink: 'https://github.com/tallojarshith/Detection_Thyroid',

    }, {
        id: 2,
        name: 'US Visa Approval Prediction',
        description: 'The "US Visa Approval Prediction" project leverages machine learning to predict the approval of US visa applications. By analyzing historical data, the model can help identify patterns and factors that contribute to visa approval, potentially aiding applicants and immigration authorities in making informed decisions. \n The project involves multiple steps, including data collection, preprocessing, feature engineering, model training, evaluation, and deployment. The goal is to build a robust model that can accurately predict whether a visa application will be approved based on various applicant attributes.',
        videoUrl: 'videoUrl',
        gitHubLink: 'https://github.com/tallojarshith/US-visa-Approval-Prediction',

    }, {
        id: 3,
        name: 'Named Entity Recognition (NER)',
        description: 'The "Named Entity Recognition (NER)" project aims to develop a system that can identify and classify named entities in text into predefined categories such as names of persons, organizations, locations, dates, and other entities. This project leverages natural language processing (NLP) techniques and machine learning algorithms to automatically detect and categorize these entities, providing a powerful tool for extracting structured information from unstructured text data.',
        videoUrl: 'videoUrl',
        gitHubLink: 'https://github.com/tallojarshith/Name-Entity-Recognition',
        para: ''

    }, {
        id: 4,
        name: 'Chest Disease Classification from Chest CT Scan Images',
        description: 'The project "Chest Disease Classification from Chest CT Scan Images" employs advanced deep learning techniques to analyze and classify various chest diseases based on CT scan images. This groundbreaking work has the potential to revolutionize medical diagnostics and improve patient care. 💪💻By leveraging the power of deep learning algorithms, the project aims to accurately identify and classify different chest conditions, including pneumonia, lung cancer, tuberculosis, and more.Its innovative approach can assist radiologists and healthcare professionals in making faster and more precise diagnoses, leading to timely interventions and improved treatment outcomes. 🩺⚕️',
        videoUrl: 'videoUrl',
        gitHubLink: 'https://github.com/tallojarshith/Chest-Disease-Classification-from-Chest-CT-Scan-Image',
        para: ''

    }]

    const projectCardObserver = new IntersectionObserver((entries) => {
        console.log('hello')
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry)
                entry.target.classList.add('projectCardAnimation')
            }
        })
    })

    useEffect(() => {
        console.log('dkfj')
        let projectCards = document.querySelectorAll('.projectCard');
        projectCards.forEach((item) => { projectCardObserver.observe(item) })
    }, [])


    return (
        <div id='projects' className='projectsContainer d-flex  justify-content-center pt-5 pb-5'>
            <div className='innerContainer row gy-5 gx-3 row-cols-1 '>
                <h2>Projects</h2>
                {ProjectsObjects.map((project) => (
                    <div key={project.id} className=' projectCard col'>
                        <div className='row p-3 br-2'>
                            <div className={`col-sm-12 col-md-5 ${project.id % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
                            </div>
                            <div className={`col-sm-12 col-md-7 ${project.id % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
                                <h1 className='fs-4'>{project.name}</h1>
                                <div className='spacer'></div>
                                <p className='fs-6 projectCardDes '>{project.description}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button className='blackBtn projectBtn'>
                                        <Link to={`/projects/${project.id}`}>
                                            View More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                            </svg>
                                        </Link>
                                    </button>
                                    <a className='hoverElements' href={project.gitHubLink}>
                                        <svg className='fs-5' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
