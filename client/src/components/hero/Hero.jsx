import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

import axios from 'axios'

const Hero = () => {
    const [modal, setModal] = useState(false);
    const [description,setDescription]=useState("");
    const [cid,setCid]=useState("");
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    useEffect(()=>{
      axios.get(BASE_URL+'/fetchprofile')
      .then(response => {
        setDescription(response.data.profile);
      })
      .catch(error => {
        console.log(error);
      })
    },[])
    useEffect(()=>{
        axios.get(BASE_URL+'/imagecid')
        .then(response => {
            setCid(response.data.imagecid);
        })
        .catch(error => {
            console.log(error);
        })
      },[])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
            <img className='typing-image' src="https://readme-typing-svg.demolab.com?font=Open+Sans&pause=1000&color=00FFFF&random=false&width=600&height=40&lines=Hi%2C+I'm+Saumya%2C+a+Full-Stack+Blockchain+Developer." alt="Typing SVG" />
            <h1>Building the future of the decentralized web, one innovative blockchain solution at a time.</h1>
            
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - samdevpro99@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={`${import.meta.env.VITE_IPFS_GATEWAY_URL}/${cid}`} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
