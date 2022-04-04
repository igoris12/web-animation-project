import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  BsHouse,
  BsPerson,
  BsNewspaper,
  BsBriefcase,
  BsLayoutTextWindowReverse,
} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="header">
      <h2>Igoris Ivanovas</h2>
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>
      <div className="navigation">
        <div className="image">
          <img src="@" alt="My foto" />
        </div>
        <ul className="butList">
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
        </ul>
        <ul className="socialsList">
          <a href="#" className="socialsList-item">
            icon
          </a>

          <a href="#" className="socialsList-item">
            icon
          </a>
          <a href="#" className="socialsList-item">
            icon
          </a>
          <a href="#" className="socialsList-item">
            icon
          </a>
          <a href="#" className="socialsList-item">
            icon
          </a>
          <p>2022/04/01 start</p>
        </ul>
      </div>
    </header>
  );
};

export default Header;
