import React from "react"
import style from './Footer.module.css'

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <div>2023 ООО "Электросервис" - электротехническая лаборатория </div>
            <div>
                <div>+7(982)790-28-08</div>
                <div>+7(912)876-97-21</div>
                <div>+7(964)184-17-54</div>
            </div>
            <div>Email: osa26@bk.ru</div>
        </footer>
    )
}

export default Footer;