import React from 'react'
import './about.css'
import ME from '../../assets/meb.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id= 'about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me"> 
          <div className="about__me-image">
         <img src={ME} alt="About Image" />
        </div>
      </div>

      <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1+ Year Working</small>
          </article>

          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>10+</small>
          </article>

          <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Client</h5>
          <small>50+ Satisfied Client.</small>
          </article>
        </div>
          <p>
            I've always been passionate about computer.
            I've always been passionate about computer.
          </p>         
          <a href="#contact"className='btn btn-primary'>Let's Talk</a>
         </div>
         </div>
         </section>
  )
}

export default About