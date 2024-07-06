import { useState, useEffect } from "react";
import './Contact.css';

import axios from 'axios';


const Contact = () => {
    const [resume, setResume] = useState("");
    const [description, setDescription] = useState("");
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    useEffect(() => {
        axios.get(BASE_URL + '/fetchprofile')
            .then(response => {
                setDescription(response.data.profile);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        axios.get(BASE_URL + '/resume')
            .then(response => {
                setResume(`${import.meta.env.VITE_IPFS_GATEWAY_URL}/` + response.data.cid);
                console.log(resume);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <section className="contact-section">
            <h1 className="title">
                Ready to Connect? Reach Out Now!
            </h1>

            <div className="description-wrapper">
                <p className="description">
                    {description}
                </p>
            </div>
            <a href={resume} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    View Resume
                </button>
            </a>
        </section>
    )
}

export default Contact;
