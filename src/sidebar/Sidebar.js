import React from "react";
import './Sidebar.css'
import logo from '../assets/icons/logo-spotify.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faPlus, faBook } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
  return(
    <div className="sidebar">
    <nav className="sidebar_navigation">
      <div className="logo">
        <a href="">
          <img src= {logo} alt="logo"/>
        </a>
      </div>

      <ul>
        <li>
          <a href="" > 
            <img className="fa-home"/>
            <span><FontAwesomeIcon icon={faHome} /> Início</span>
          </a>
        </li>
        <li>
          <a href="">
            <span  className="fa fa-search"></span>
            <span><FontAwesomeIcon icon={faSearch}/> Buscar</span>
          </a>
        </li>
      </ul>
    </nav>

    <div className="library">
      <div className="library__content">
        <button className="library__button">
          <span className="fa fas fa-book"></span>
          <span><FontAwesomeIcon icon={faBook}/> Sua biblioteca</span>
        </button>
        <span className="fa fa-plus"> <FontAwesomeIcon icon={faPlus}/></span>
      </div>

      <section className="section-playlist">
        <div className="section-playlist__content">
          <span className="text title">Crie sua primeira Playlist</span>
          <span className="text subtitle"> é facil, vamos te ajudar</span>
          <button className="section-playslit__button">
            <span>Criar Playlist</span>
          </button>
        </div>
      </section>

      <div className="cookies">
        <a href="">Cookies</a>
      </div>

      <div className="languages">
        <button className="languages__button">
          <span className="fa fa-globe"></span>
          <span><FontAwesomeIcon icon={faGlobe}/> Portugês do Brasil</span>
        </button>
      </div>
    </div>
  </div>
  )
};

export default Sidebar