import React from "react"
import style from './about.module.css'

const About = (props) => {
    return (
       <div className={style.about__wrapper}>
        <h1>ООО "Электросервис"</h1>
        <p>О компании</p>
       </div>
    )
}

export default About;