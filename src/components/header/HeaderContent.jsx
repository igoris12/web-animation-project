import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  BsHouse,
  BsPerson,
  BsNewspaper,
  BsBriefcase,
  BsLayoutTextWindowReverse,
  BsLinkedin,
  BsGithub,
} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import avatar from '../../images/navigation/avatar.png';

const HeaderContent = ({ active, activeHandler }) => {
  return (
    <header className="header">
      <h2>Igoris Ivanovas</h2>
      <div className="hamburger" onClick={activeHandler}>
        <GiHamburgerMenu />
      </div>
      <div className={active ? 'navigation active' : 'navigation'}>
        <div className="image">
          <img src={avatar} alt="My foto" />
          <span>Igoris Ivanovas</span>
        </div>
        <nav className="butList">
          <a href="#" className="butList-item active">
            <BsHouse />
            <p>Home</p>
          </a>
          <a href="#" className="butList-item">
            <BsPerson />
            <p>About me</p>
          </a>
          <a href="#" className="butList-item">
            <BsNewspaper />
            <p>Resume</p>
          </a>
          <a href="#" className="butList-item">
            <BsBriefcase />
            <p>Portfolio</p>
          </a>
          <a href="#" className="butList-item">
            <BsLayoutTextWindowReverse />
            <p>Blog</p>
          </a>
          <a href="#" className="butList-item">
            <AiOutlineMail />
            <p>Contact</p>
          </a>
        </nav>
        <ul className="socialsList">
          <div className="links">
            <a
              href="https://www.linkedin.com/in/igoris-ivanovas-839645194/"
              target="_blank"
              className="socialsList-item"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/igoris12"
              target="_blank"
              className="socialsList-item"
            >
              <BsGithub />
            </a>
          </div>
          <p>2022/04/01 start</p>
        </ul>
      </div>
    </header>
  );
};

export default HeaderContent;
