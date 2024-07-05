import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { SiCodechef } from "react-icons/si";
import { FaGithubSquare, FaHackerrank } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/saumya-srivastava-a33535201/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://x.com/SaumyaS29592008" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/samcms1234" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' /></a>
      <a href="https://www.codechef.com/users/samsrivastav18" target='_blank' rel="noopener noreferrer"><SiCodechef className='icon' /></a>
      <a href="https://www.hackerrank.com/profile/20bsm050" target='_blank' rel="noopener noreferrer"><FaHackerrank className='icon' /></a>


    </section>
  )
}

export default Handles
