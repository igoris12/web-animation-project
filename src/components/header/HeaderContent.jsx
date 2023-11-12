import React, { useContext } from 'react';
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
import OptionsContext from '../../reducers/OptionsContext';
import { Link } from 'react-router-dom';

const HeaderContent = ({ active, activeHandler }) => {
  const { optionsDispatch, optionsState } = useContext(OptionsContext);

  return (
    <header className="header">
      <h2>Igoris Ivanovas</h2>
      <div className="hamburger" onClick={activeHandler}>
        <GiHamburgerMenu />
      </div>
      <div className={active ? 'navigation active' : 'navigation'}>
        <div className="image">
          <img src={avatar} alt="My foto" />
          <span style={{ backgroundColor: optionsState.color }}></span>
          <p>Igoris Ivanovas</p>
        </div>
        <nav className="butList">
          <Link to="/web-animation-project/" className="butList-item active">
            <BsHouse />
            <p>Home</p>
          </Link>
          <Link to="/web-animation-project/aboutMe" className="butList-item">
            <BsPerson />
            <p>About me</p>
          </Link>
          <Link to="/web-animation-project/resume" className="butList-item">
            <BsNewspaper />
            <p>Resume</p>
          </Link>
          <Link to="/web-animation-project/portfolio" className="butList-item">
            <BsBriefcase />
            <p>Portfolio</p>
          </Link>
          <Link to="/web-animation-project/blogSection" className="butList-item">
            <BsLayoutTextWindowReverse />
            <p>Blog</p>
          </Link>
          <Link to="/web-animation-project/contact" className="butList-item">
            <AiOutlineMail />
            <p>Contact</p>
          </Link>
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
