import React, { useEffect } from 'react'

const Skills = () => {


    const observerSkillItems = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const dataLabel = entry.target.getAttribute('data-label');
                if (dataLabel === '80') {
                    entry.target.classList.add('w80');
                } else if (dataLabel === '70') {
                    entry.target.classList.add('w70');
                } else {
                    entry.target.classList.add('w90');
                }
            } else {

            }
        })
    })


    useEffect(() => {
        let skillItems = document.querySelectorAll('.innerSkillShell')
        skillItems.forEach((item) => observerSkillItems.observe(item))

    }, [])



    return (
        <div className='skillsContainer'>
            <div className="skill">
                <p>Python </p>
                <div className='outerSkillShell'><div data-label='90' className='innerSkillShell'></div></div>
            </div>
            <div className="skill">
                <p>Power BI</p>
                <div className='outerSkillShell'><div data-label="80" className='innerSkillShell'></div></div>
            </div>
            <div className="skill">
                <p>MySQL</p>
                <div className='outerSkillShell'><div data-label='90' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Machine Learning </p>
                <div className='outerSkillShell'><div data-label='90' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Deep Learning</p>
                <div className='outerSkillShell'><div data-label='80' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Constructing Predictive Models</p>
                <div className='outerSkillShell'><div data-label='70' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Data Analysis</p>
                <div className='outerSkillShell'><div data-label='90' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Data Science</p>
                <div className='outerSkillShell'><div data-label='80' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Data Visualization</p>
                <div className='outerSkillShell'><div data-label='90' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Data Manipulation</p>
                <div className='outerSkillShell'><div data-label='80' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Data Wrangling </p>
                <div className='outerSkillShell'><div data-label='90' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p> Data Mining</p>
                <div className='outerSkillShell'><div data-label='80' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Data Interpretation</p>
                <div className='outerSkillShell'><div data-label='80' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Natural Language Processing</p>
                <div className='outerSkillShell'><div data-label='70' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Artificial Intelligence (AI)</p>
                <div className='outerSkillShell'><div data-label='80' className=' innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>CI/CD</p>
                <div className='outerSkillShell'><div data-label='70' className='innerSkillShell '></div></div>
            </div>
            <div className="skill">
                <p>Jenkins</p>
                <div className='outerSkillShell'><div data-label='90' className='innerSkillShell '></div></div>
            </div>
        </div>
    )
}

export default Skills
