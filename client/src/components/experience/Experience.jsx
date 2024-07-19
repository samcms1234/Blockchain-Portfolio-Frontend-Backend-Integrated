import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"

import axios from 'axios';


const Experience = ({state}) => {
    const [education,setEducation]=useState("");
    const [experience,setExperience]=useState("");
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    useEffect(()=>{
        axios.get(BASE_URL+'/getallexperience')
        .then(response => {
            setExperience(response.data.experience)
        })
        .catch(error => {
            console.log(error.message);
        })
    },[])

    useEffect(()=>{
        axios.get(BASE_URL+'/getalleducation')
        .then(response => {
            setEducation(response.data.education)
        })
        .catch(error => {
            console.log(error.message);
        })
    },[])

    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.startingYear} - {edu.endYear}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text4">
                        {edu.collegeName}
                        </p>
                        <p className="card-text3">
                            {
                                edu.skillsAcquired.map((skill) => {
                                    return (
                                        <div className="pills">{skill}</div>
                                    )
                                })
                            }
                        </p>
                        <p className="description">
                        {edu.description}
                        </p>
                        
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-title">Experience</h1>
                    {experience !== "" && experience.map((experience) => {
                        return (
                            <div className="edu-card">
                                <p className="card-text1">
                                    <SlCalender className='icon' /> {experience.startingTime} - {experience.endTime}
                                </p>
                                <h3 className="card-text2">{experience.companyName}</h3>
                                <p className="card-text4">
                                    {experience.position}
                                </p>
                                <div className="card-text3">
                                {
                                    experience.knowledgeAcquired.map((exp) => {
                                        return (
                                            <div className="pills">{exp}</div>
                                        )
                                    })
                                }
                                </div>
                                <p className="description" style={{marginTop: '20px'}}>{experience.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience
