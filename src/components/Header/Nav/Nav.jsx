import React from "react"
import { NavLink } from "react-router-dom";
import style from './Nav.module.css'

const Nav = (props) => {
    return (
        <nav className={style.nav}>
            <div className={style.nav__item}>
               <NavLink to='/about' className={navData => navData.isActive ? style.active : style.nav__item}>О компании</NavLink> 
            </div>
            <div className={style.nav__item}>
            <NavLink to='/services' className={navData => navData.isActive ? style.active : style.nav__item}>Наши услуги</NavLink> 
            </div>
            <div className={style.nav__item}>
               <NavLink to='/clients' className={navData => navData.isActive ? style.active : style.nav__item}>Наши клиенты</NavLink> 
            </div>
            <div className={style.nav__item}>
            <NavLink to='/contacts' className={navData => navData.isActive ? style.active : style.nav__item}>Контакты</NavLink>  
            </div>
        </nav>
    )
}

export default Nav;