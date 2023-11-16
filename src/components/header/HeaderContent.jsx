import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  BsHouse,
  BsPerson,
  BsNewspaper,
  BsBriefcase,
  BsLayoutTextWindowReverse,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import avatar from "../../images/navigation/avatar.png";
import OptionsContext from "../../reducers/OptionsContext";
import { Link } from "react-router-dom";

const HeaderContent = ({ active, activeHandler }) => {
  const { optionsDispatch, optionsState } = useContext(OptionsContext);
  const [activeLink, setActiveLink] = useState(0);
  return (
    <header className="header">
      <h2>Igoris Ivanovas</h2>
      <div className="hamburger" onClick={activeHandler}>
        <GiHamburgerMenu />
      </div>
      <div className={active ? "navigation active" : "navigation"}>
        <div className="image">
          <img src={avatar} alt="My foto" />
          <span style={{ backgroundColor: optionsState.color }}></span>
          <p>Igoris Ivanovas</p>
        </div>
        <nav className="butList">
          <Link
            to="/web-animation-project/"
            className={
              activeLink === 0 ? "butList-item active" : "butList-item"
            }
            onClick={() => setActiveLink(0)}
          >
            <BsHouse />
            <p>Home</p>
          </Link>
          <Link
            to="/web-animation-project/aboutMe"
            className={
              activeLink === 1 ? "butList-item active" : "butList-item"
            }
            onClick={() => setActiveLink(1)}
          >
            <BsPerson />
            <p>About me</p>
          </Link>
          <Link
            to="/web-animation-project/resume"
            className={
              activeLink === 2 ? "butList-item active" : "butList-item"
            }
            onClick={() => setActiveLink(2)}
          >
            <BsNewspaper />
            <p>Resume</p>
          </Link>
          <Link
            to="/web-animation-project/portfolio"
            reloadDocument
            className={
              activeLink === 3 ? "butList-item active" : "butList-item"
            }
            onClick={() => {
              setActiveLink(3);
            }}
          >
            <BsBriefcase />
            <p>Portfolio</p>
          </Link>
          <Link
            to="/web-animation-project/blogSection"
            className={
              activeLink === 4 ? "butList-item active" : "butList-item"
            }
            onClick={() => setActiveLink(4)}
          >
            <BsLayoutTextWindowReverse />
            <p>Blog</p>
          </Link>
          <Link
            to="/web-animation-project/contact"
            className={
              activeLink === 5 ? "butList-item active" : "butList-item"
            }
            onClick={() => setActiveLink(5)}
          >
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
