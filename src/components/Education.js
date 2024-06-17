import React from 'react'
import { Link } from 'react-router-dom';

const Education = () => {

    const showEducationItem = (target, event) => {
        console.log(event.target, 'event')
        let allExpInfoListItems = document.querySelectorAll('.expInfo-list-item');
        let allExpHeadingListItems = document.querySelectorAll('.ExpList-group-item');
        allExpInfoListItems.forEach(item => {
            item.classList.add('removeExpInfoItem');
            item.classList.remove('addExpInfoItem');
        });

        allExpHeadingListItems.forEach(item => {
            item.classList.remove('expActive');
        });

        event.target.classList.add('expActive')

        let targetItem = document.querySelector(`[data-label="${target}"]`);
        if (targetItem) {
            targetItem.classList.remove('removeExpInfoItem');
            targetItem.classList.add('addExpInfoItem');
        }
    };

    return (
        <div id='education' className='educationContainer d-flex  justify-content-center pb-5 pt-5'>
            <div className='innerContainer row row-cols-md-2'>
                <div>
                    <h2>Education</h2>
                    <div className='spacer'></div>
                    <ul>
                        <li>Btech-computer science and engineering(python,statistics,Artificial Intelligence,Mathematics)</li>
                        <li>Intermediate-Narayana Juniour college-97%</li>
                        <li>10th-Brillaint grammar high school-9.8(CGPA)</li>
                    </ul>
                </div>
                <div>
                    <h2>Certificates</h2>
                    <div className='spacer'></div>
                    <div className='certificate'>
                        <h5>Python for Data Science-Intellipaat</h5>
                        <Link className=""
                            to="/files/intellipaat-certificate.pdf"
                            target="_blank"
                            download>View Certificate</Link>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Education
