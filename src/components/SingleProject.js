import React from 'react'
import { useParams } from 'react-router-dom';

const SingleProject = () => {

    const ProjectDetailsInfo = [
        {
            id: 1,
            title: 'Thyroid Disease Detection Project',
            info1: "Thyroid disease is a prevalent health issue in India, affecting over ten million people annually. This project aims to develop a machine learning model that predicts whether an individual has compensated hypothyroid, primary hypothyroid, secondary hypothyroid, or no thyroid disorder (negative). Leveraging various classification algorithms, the project provides an efficient solution to detect thyroid disorders accurately.",
            videoUrl: "",
            objective: "The primary objective of this project is to predict thyroid conditions using machine learning algorithms, ensuring early detection and effective management of thyroid diseases",
            technicalOverview: `
        <ul>
            <li>Programming Language: Python 3.8 and above</li>
            <li>Key Libraries: scikit-learn, pandas, numpy, matplotlib, seaborn</li>
            <li>Front-end: HTML, CSS</li>
            <li>Back-end: Flask framework</li>
            <li>IDE: Jupyter Notebook, PyCharm, VSCode</li>
            <li>Database: MongoDB, Amazon S3</li>
            <li>Deployment: AWS (EC2, S3)</li>
        </ul>
    `,
            workflow: `
            <ol>
            <li>
            	Data Collection:
                <ul>
                <li>Dataset: Thyroid Disease Data Set from the UCI Machine Learning Repository</li>
                <li>Link to dataset</li>
            </ul>
            </li>
            <li>
        	Data Pre-processing:
            <ul>
            <li>Handling Missing Values: Simple imputation using KNN Imputer</li>
            <li>	Outlier Detection and Removal: Boxplot and percentile methods</li>
            <li>Categorical Feature Handling: Ordinal encoding and label encoding</li>
            <li>Feature Scaling: Standard Scaler method</li>
            <li>Imbalanced Dataset Handling: SMOTE (Synthetic Minority Over-sampling Technique)</li>
            <li>	Dropping Unnecessary Columns: Removal of irrelevant features</li>
            </ul>
            </li>
            <li>
            	Model Creation and Evaluation:
                <ul>
                <li>Algorithms Tested: Random Forest, XGBoost, KNN</li>
                <li>	Final Model: XGBoost, chosen for its superior performance</li>
                <li>	Hyperparameter Tuning: RandomizedSearchCV</li>
                <li>	Performance Metrics: Accuracy, confusion matrix, classification report</li>
            </ul>
            </li>
            </ol>
        `,
            performance: "The XGBoost model, after hyperparameter tuning, achieved an impressive accuracy of 95%. This high level of accuracy was accompanied by robust precision and recall metrics, indicating the model's reliability in predicting thyroid disorders."
        }, {
            id: 2,
            title: 'US Visa Approval Prediction',
            info1: `
        <p>The "US Visa Approval Prediction" project leverages machine learning to predict the approval of US visa applications. By analyzing historical data, the model can help identify patterns and factors that contribute to visa approval, potentially aiding applicants and immigration authorities in making informed decisions.</p>
        <p>The project involves multiple steps, including data collection, preprocessing, feature engineering, model training, evaluation, and deployment. The goal is to build a robust model that can accurately predict whether a visa application will be approved based on various applicant attributes.</p>
        `,
            videoUrl: "",
            objective: "",
            technicalOverview: `
            <ul>
            
            <li> 	Programming Language: Python 3.8 and above</li>
            <li>	Key Libraries: scikit-learn, pandas, numpy, matplotlib, seaborn</li>
            <li>	Framework: Flask for web application</li>
            <li>	Version Control: Git and GitHub</li>
            <li>	CI/CD: GitHub Actions</li>
            <li>	Deployment: AWS (EC2, ECR)</li>
            <li>	Data Storage: MongoDB</li>

            </ul>
        `,
            workflow:
                `
            <ol>
        <li>
            
        	Data Collection:
            <ul>
            <li>Gather historical data on visa applications.</li>
            <li>Data source: Government databases and open-source immigration datasets.</li>
            </ul>
        </li>
        <li>
        	Data Preprocessing:
            <ul>
            <li>Handle missing values, outliers, and data inconsistencies.</li>
            <li>Feature scaling and encoding categorical variables.</li>
        </ul>
        </li>
        <li>
       	Feature Engineering:
           <ul>
           <li>Extract relevant features that impact visa approval.</li>
            <li>Create new features based on domain knowledge.</li>
        </ul>
        </li>
        <li>
        	Model Training and Evaluation:
            <ul>
            <li>Train multiple machine learning models and evaluate their performance.</li>
            <li>Use metrics such as accuracy, precision, recall, and F1-score for evaluation.</li>
        </ul>
        </li>
        <li>
        	Model Deployment:
            <ul>
            <li>Deploy the best-performing model using Flask and Docker.</li>
            <li>Host the application on AWS EC2 for scalability and reliability</li>.
            </ul>
        </li>
        </ol>
        `,
            performance: ""
        }, {
            id: 3,
            title: 'Named Entity Recognition (NER)',
            info1: 'The "Named Entity Recognition (NER)" project aims to develop a system that can identify and classify named entities in text into predefined categories such as names of persons, organizations, locations, dates, and other entities. This project leverages natural language processing (NLP) techniques and machine learning algorithms to automatically detect and categorize these entities, providing a powerful tool for extracting structured information from unstructured text data.',
            videoUrl: "",
            objective: "",
            technicalOverview: `
        <ul>
            <li> Programming Language: Python 3.8 and above</li>
            <li> 	Key Libraries: spaCy, nltk, scikit-learn, pandas, numpy</li>
            <li> 	Framework: Flask for web application</li>
            <li> 	Version Control: Git and GitHub</li>
            <li>	CI/CD: GitHub Actions</li>
            <li>	Deployment: AWS (EC2, ECR)</li>
            <li>	Data Storage: MongoDB</li>
        </ul>
        `,
            workflow: `
        <ol>
        <li>
        	Data Collection:
        <ul> 
        <li>Gather textual data containing named entities from various sources such as news articles, social media, and open datasets.</li>
        <li>Use labeled datasets for training the NER model.</li>
        </ul>
        </li>
            Data Preprocessing:
            <ul>
            <li>Clean and preprocess the text data.</li>
            <li>Tokenize the text and convert it into a format suitable for model training.</li>
            </li>
            </ul>
        </ul>
        <li>
             Feature Engineering:
            <ul>
            <li> Extract features relevant to named entity recognition.</li>
            <li> Use word embeddings and other text representations to capture the semantic meaning of words.</li>
            </ul>
        </li>
        <li>
            Model Training and Evaluation:
            <ul>
            <li>Train multiple NER models and evaluate their performance.</li>
            <li>Use metrics such as precision, recall, and F1-score to assess model accuracy.</li>
            </ul>
        </li>
        <li>
             Model Deployment:
            <ul>
            <li>Deploy the best-performing model using Flask and Docker.</li>
            <li>Host the application on AWS EC2 for scalability and reliability.</li>
            </ul>
        </li>
        </ol>
        `,
            performance: ""
        }, {
            id: 4,
            title: 'Chest Disease Classification from Chest CT Scan Images',
            info1: `
            <p>I'm thrilled to showcase an impressive deep learning project focused on the classification of chest diseases using chest CT scan images! 🏥🖥️</p>
            <p>The project "Chest Disease Classification from Chest CT Scan Images" employs advanced deep learning techniques to analyze and classify various chest diseases based on CT scan images. This groundbreaking work has the potential to revolutionize medical diagnostics and improve patient care. 💪💻</p>
            <p>By leveraging the power of deep learning algorithms, the project aims to accurately identify and classify different chest conditions, including pneumonia, lung cancer, tuberculosis, and more. Its innovative approach can assist radiologists and healthcare professionals in making faster and more precise diagnoses, leading to timely interventions and improved treatment outcomes. 🩺⚕️</p>
            <p>The project utilizes state-of-the-art deep learning frameworks and architectures to train a robust model capable of effectively distinguishing between different chest diseases. Through extensive data preprocessing, feature extraction, and model training, the system achieves remarkable accuracy and reliability in disease classification. 📊🔍</p>
            <p>This project serves as a testament to the potential of deep learning in medical imaging and highlights the transformative impact it can have on healthcare. By automating the analysis of CT scan images, it reduces the burden on medical professionals and enhances the efficiency of disease diagnosis. 🌟💡</p>
            `,
            videoUrl: "",
            objective: `
            <p>
            To ensure seamless integration and continuous delivery of the project, I utilized a robust CI/CD pipeline with the following technologies:</p>
            <ul>
            <li>Jenkins: Automates building, testing, and deployment, ensuring efficiency and reliability.</li>
            <li>GitHub: Provides collaborative features and efficient code management.</li>
            <li>AWS ECR: Stores and manages Docker container images securely.</li>
            <li>AWS ElastiCache: Enhances application performance and scalability by caching frequently accessed data.</li>
            <li>AWS EC2: Provides scalable and reliable computing capacity for deploying and running applications.</li>
            </ul>
            
            `,
            technicalOverview: `
            <ul>
            <li>Programming Language: Python 3.8 and above</li>
            <li>Key Libraries: TensorFlow, Keras, scikit-learn, pandas, numpy, matplotlib, seaborn</li>
            <li>Front-end: HTML, CSS</li>
            <li>	Back-end: Flask framework</li>
            <li>IDE: Jupyter Notebook, Visual Studio Code</li>
            <li>Database: MongoDB, Amazon S3</li>
            <li>Deployment: AWS (EC2, ECR, ElastiCache)</li>
            </ul>
            `,
            workflow: `
            <ol>
            <li>
            	Data Collection:
            <ul>
            <li>Dataset: Chest Disease CT Scan Images</li>
            <li>Data source: Hospital databases and open-source medical repositories</li>
            </ul
            </li>
            <li>
           Data Pre-processing:
            <ul>
            <li>Handling Missing Values: Simple imputation techniques</li>
            <li>Outlier Detection and Removal: Boxplot and percentile methods</li>
            <li>Feature Extraction: Using CNN-based models for robust feature extraction</li>
            <li>Data Augmentation: Techniques such as rotation, zoom, and flip to increase dataset variability</li>
            </ul>
            </li>
            <li>
            Model Creation and Evaluation:
            <ul>
            <li>Algorithms Tested: CNN architectures such as ResNet, VGG, Inception</li>
            <li>Final Model: Custom CNN model with optimized architecture</li>
            <li>Hyperparameter Tuning: RandomizedSearchCV</li>
            <li>Performance Metrics: Accuracy, confusion matrix, classification report</li>
            </ul>
            </li>
            </ol>
            `,
            performance: ""
        }]

    const { id } = useParams();
    console.log(id)

    return (
        <div className='singleProjectContainer d-flex justify-content-center pt-5 pb-5'>
            {ProjectDetailsInfo.map(item => (
                item.id == id && (
                    <div key={item.id} className='innerContainer'>
                        <div className='singleProjectMainHeading'>{item.title}</div>
                        <div className='spacer'></div>
                        {item.videoUrl !== '' && <img />}
                        <div>
                            {item.info1 !== '' &&
                                <div className='singleProjectContent1'>
                                    {React.createElement('div', { dangerouslySetInnerHTML: { __html: item.info1 } })}
                                </div>
                            }
                            {item.objective !== '' &&
                                <div className='singleProjectContent2'>
                                    <h2 className='singleProjectHeading'>Objective</h2>
                                    {React.createElement('div', { dangerouslySetInnerHTML: { __html: item.objective } })}
                                </div>
                            }
                            {item.technicalOverview !== '' &&
                                <div className='singleProjectContent3'>
                                    <h2 className='singleProjectHeading'>Technical Overview</h2>
                                    {React.createElement('div', { dangerouslySetInnerHTML: { __html: item.technicalOverview } })}
                                </div>}
                            {item.workflow !== '' &&
                                <div className='singleProjectContent4'>
                                    <h2 className='singleProjectHeading'>Workflow</h2>
                                    {React.createElement('div', { dangerouslySetInnerHTML: { __html: item.workflow } })}
                                </div>
                            }
                            {item.performance !== '' &&
                                <div className='singleProjectContent5'>
                                    <h2 className='singleProjectHeading'>Performance</h2>
                                    <p>{item.performance}</p>
                                </div>
                            }
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}

export default SingleProject
