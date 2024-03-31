import React from 'react'
import "./About.css";
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';
const About = ({setPlay}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>setPlay(true)}/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Character development is as important as academic achievement in our college. We strive to cultivate leaders who possess not only intellectual prowess but also integrity, compassion, and a sense of social responsibility.</p>
        <p>Empowerment through education is at the core of our college's mission. We are dedicated to providing all students with the tools and opportunities they need to take control of their futures and make meaningful contributions to society.</p>
        <p>Diversity, inclusivity, and innovation are at the heart of our college's mission. We strive to create a supportive learning environment where students from all backgrounds can thrive and pursue their passions.</p>
      </div>
    </div>
  )
}

export default About
