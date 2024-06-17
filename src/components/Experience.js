import React, { useEffect } from 'react'

const Experience = () => {

    const showExperienceItem = (target, event) => {
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
        <div id='experience' className='experienceContainer d-flex  justify-content-center'>
            <div className='innerContainer containerForNonMobile d-none d-md-block'>
                <h2>Experience</h2>
                <div className='spacer'></div>
                <div class="row ">
                    <div class="col-4">
                        <div id="list-example" class="expListGroup d-flex flex-column">
                            <a class="ExpList-group-item expActive" href="#list-item-1" onClick={(e) => { showExperienceItem(1, e) }}>The Math Company | Data Analyst (Dec 2021 - Aug 2023)</a>
                            <a class="ExpList-group-item " href="#list-item-2" onClick={(e) => { showExperienceItem(2, e) }}>The Math Company | Intern</a>
                            <a class="ExpList-group-item " href="#list-item-3" onClick={(e) => { showExperienceItem(3, e) }}>AI Intern at iNeuron (Dec 2023 - Present)</a>
                        </div>
                    </div>
                    <div class="col-8 expInfoContainer">
                        <div className='expInfoInnerContainer'>
                            <div id="expInfo-list-item-1" className='expInfo-list-item' data-label='1' >
                                <div>
                                    <h4>HomeDepot Portfolio:</h4>
                                    <ul>
                                        <li>
                                            Interactive Dashboards Development:
                                            <ul>
                                                <li>Developed and maintained interactive dashboards using Tableau for Home Depot's active campaigns.</li>
                                                <li>Created a dashboard to track weekly active campaigns and identify delayed campaigns from previous weeks.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Data Preprocessing & Automation:
                                            <ul>
                                                <li>Performed data preprocessing and automated insights delivery to streamline client reporting.</li>
                                                <li>Automated insights generation to enable clients to quickly identify issues and take necessary actions, reducing company costs by 15%.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Pipeline Automation & Deployment:
                                            <ul>
                                                <li>Worked on pipeline automation and deployed solutions on GCP Cloud.</li>
                                                <li>Streamlined Ad operations, reducing daily labor hours by 2 through process automation, Tableau dashboards, and automated email alerts.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Customer Segmentation Enhancement:
                                            <ul>
                                                <li>Enhanced customer segmentation with a production-ready engine, achieving a 1.3% increase in targeted campaign conversions.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <h4>Key Achievements:</h4>
                                    <ul>
                                        <li>
                                            Cost Reduction:
                                            <ul>
                                                <li>Automated insights generation led to a 15% reduction in company costs.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Operational Efficiency:
                                            <ul>
                                                <li>Streamlined Ad operations, saving 2 labor hours daily through automation.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            Increased Conversions:
                                            <ul>
                                                <li>Improved targeted campaign conversions by 1.3% through enhanced customer segmentation.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="expInfo-list-item-2" className='expInfo-list-item removeExpInfoItem' data-label='2'>
                                <h5 >Project : Demand Forecasting for Ariat</h5>
                                <h5>Problem Statement</h5>
                                <ul>
                                    <li>Develop a demand forecasting solution for Ariat to optimize inventory management and reduce costs using historical data.</li>
                                </ul>
                                <h5>Project Description:</h5>
                                <ul>
                                    <li>
                                        Implemented and compared multiple forecasting models to predict demand based on previous quarters' data for improved inventory management.
                                        <ul>
                                            <li>
                                                Models Used:
                                                <ul>
                                                    <li>ARIMA (AutoRegressive Integrated Moving Average)</li>
                                                    <li>SARIMA (Seasonal ARIMA)</li>
                                                    <li>FBProphet (Forecasting procedure)</li>
                                                    <li>SARIMAX (Seasonal ARIMA with eXogenous regressors)</li>
                                                    <li>LSTM (Long Short-Term Memory neural network)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                <h5>Key Contributions</h5>
                                <ul>
                                    <li>
                                        Model Implementation:
                                        <ul>
                                            <li>Developed and implemented ARIMA, SARIMA, FBProphet, SARIMAX, and LSTM models.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Model Comparison:
                                        <ul>
                                            <li>Conducted a comparative analysis of different forecasting models to identify the best-performing model for demand prediction.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Inventory Optimization:
                                        <ul>
                                            <li>Improved inventory management by providing accurate demand forecasts, leading to cost reduction.</li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Enhanced Inventory Management:
                                        <ul>
                                            <li>Provided actionable insights for optimizing inventory levels, reducing overstock and stockouts.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Cost Reduction:
                                        <ul>
                                            <li>Helped in reducing operational costs by minimizing inventory holding costs through accurate demand forecasting.</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div id="expInfo-list-item-3" className='expInfo-list-item removeExpInfoItem' data-label='3'>
                                <h5>Key Contribution</h5>
                                <ul>
                                    <li>End-to-end machine learning model deployments.</li>
                                    <li>Implementation of CI/CD pipelines using Jenkins.</li>
                                    <li>Deployment and management of models on Azure, GCP, and AWS</li>
                                    <li>Data version control using DVC.</li>
                                    <li>Creation of visualizations and dashboards with Power BI and Tableau.</li>
                                    <li>Application of statistical analysis for model improvement.</li>
                                </ul>
                                <h5>Tools and Technologies</h5>
                                <ul>
                                    <li>•	Jenkins, Azure, GCP, AWS (EC2, ECR instance), DVC, Power BI, Tableau, statistical analysis.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='innerContainer containerForMobile d-md-none'>
                <h2>Experience</h2>
                <details>
                    <summary>The Math Company | Data Analyst (Dec 2021 - Aug 2023)</summary>
                    <div>
                        <h4>HomeDepot Portfolio:</h4>
                        <ul>
                            <li>
                                Interactive Dashboards Development:
                                <ul>
                                    <li>Developed and maintained interactive dashboards using Tableau for Home Depot's active campaigns.</li>
                                    <li>Created a dashboard to track weekly active campaigns and identify delayed campaigns from previous weeks.</li>
                                </ul>
                            </li>
                            <li>
                                Data Preprocessing & Automation:
                                <ul>
                                    <li>Performed data preprocessing and automated insights delivery to streamline client reporting.</li>
                                    <li>Automated insights generation to enable clients to quickly identify issues and take necessary actions, reducing company costs by 15%.</li>
                                </ul>
                            </li>
                            <li>
                                Pipeline Automation & Deployment:
                                <ul>
                                    <li>Worked on pipeline automation and deployed solutions on GCP Cloud.</li>
                                    <li>Streamlined Ad operations, reducing daily labor hours by 2 through process automation, Tableau dashboards, and automated email alerts.</li>
                                </ul>
                            </li>
                            <li>
                                Customer Segmentation Enhancement:
                                <ul>
                                    <li>Enhanced customer segmentation with a production-ready engine, achieving a 1.3% increase in targeted campaign conversions.</li>
                                </ul>
                            </li>
                        </ul>
                        <h4>Key Achievements:</h4>
                        <ul>
                            <li>
                                Cost Reduction:
                                <ul>
                                    <li>Automated insights generation led to a 15% reduction in company costs.</li>
                                </ul>
                            </li>
                            <li>
                                Operational Efficiency:
                                <ul>
                                    <li>Streamlined Ad operations, saving 2 labor hours daily through automation.</li>
                                </ul>
                            </li>
                            <li>
                                Increased Conversions:
                                <ul>
                                    <li>Improved targeted campaign conversions by 1.3% through enhanced customer segmentation.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </details>
                <details>
                    <summary>The Math Company | Intern</summary>
                    <h5 >Project : Demand Forecasting for Ariat</h5>
                    <h5>Problem Statement</h5>
                    <ul>
                        <li>Develop a demand forecasting solution for Ariat to optimize inventory management and reduce costs using historical data.</li>
                    </ul>
                    <h5>Project Description:</h5>
                    <ul>
                        <li>
                            Implemented and compared multiple forecasting models to predict demand based on previous quarters' data for improved inventory management.
                            <ul>
                                <li>
                                    Models Used:
                                    <ul>
                                        <li>ARIMA (AutoRegressive Integrated Moving Average)</li>
                                        <li>SARIMA (Seasonal ARIMA)</li>
                                        <li>FBProphet (Forecasting procedure)</li>
                                        <li>SARIMAX (Seasonal ARIMA with eXogenous regressors)</li>
                                        <li>LSTM (Long Short-Term Memory neural network)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h5>Key Contributions</h5>
                    <ul>
                        <li>
                            Model Implementation:
                            <ul>
                                <li>Developed and implemented ARIMA, SARIMA, FBProphet, SARIMAX, and LSTM models.</li>
                            </ul>
                        </li>
                        <li>
                            Model Comparison:
                            <ul>
                                <li>Conducted a comparative analysis of different forecasting models to identify the best-performing model for demand prediction.</li>
                            </ul>
                        </li>
                        <li>
                            Inventory Optimization:
                            <ul>
                                <li>Improved inventory management by providing accurate demand forecasts, leading to cost reduction.</li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Enhanced Inventory Management:
                            <ul>
                                <li>Provided actionable insights for optimizing inventory levels, reducing overstock and stockouts.</li>
                            </ul>
                        </li>
                        <li>
                            Cost Reduction:
                            <ul>
                                <li>Helped in reducing operational costs by minimizing inventory holding costs through accurate demand forecasting.</li>
                            </ul>
                        </li>
                    </ul>
                </details>
                <details>
                    <summary >AI Intern at iNeuron (Dec 2023 - Present)</summary>
                    <h5>Key Contribution</h5>
                    <ul>
                        <li>End-to-end machine learning model deployments.</li>
                        <li>Implementation of CI/CD pipelines using Jenkins.</li>
                        <li>Deployment and management of models on Azure, GCP, and AWS</li>
                        <li>Data version control using DVC.</li>
                        <li>Creation of visualizations and dashboards with Power BI and Tableau.</li>
                        <li>Application of statistical analysis for model improvement.</li>
                    </ul>
                    <h5>Tools and Technologies</h5>
                    <ul>
                        <li>•	Jenkins, Azure, GCP, AWS (EC2, ECR instance), DVC, Power BI, Tableau, statistical analysis.</li>
                    </ul>
                </details>

            </div >
        </div >
    )
}

export default Experience
