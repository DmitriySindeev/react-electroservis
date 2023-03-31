import React from "react"
import style from './Header.module.css'
import Nav from "./Nav/Nav";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.img__container}>
                <img src="https://sun9-47.userapi.com/impg/0yhSAmYwb3HVEkL5SH6sHfjdEFqsc42CvPfk7Q/SMzPljGOjZI.jpg?size=496x425&quality=95&sign=b8a91fada41268a1fee194899dcc0446&type=album" alt="logo" />
            </div>
            <Nav />
        </header>
    )
}

export default Header;