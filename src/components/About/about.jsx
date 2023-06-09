import React from "react"
import style from './about.module.css'

const About = (props) => {
    return (
        <div className={style.about__wrapper}>
            <h1>ООО "Электросервис"</h1>
            <p>Компания, которая занимается поиском мест повреждения кабельных линий, является специализированным провайдером услуг в области
                электротехники и электроэнергетики. Она предоставляет услуги по поиску мест повреждения кабельных линий различных напряжений,
                от малых до высоковольтных, используя современное оборудование и технологии.</p>
            <p>Компания имеет высококвалифицированных специалистов, которые обладают необходимыми знаниями и опытом в области электротехники,
                электроизмерений и диагностики электрических систем. Они готовы быстро и эффективно решать задачи по поиску мест повреждения
                кабельных линий, а также проводить диагностику и обслуживание электротехнических систем.</p>
            <p> Компания предлагает свои услуги для различных отраслей, таких как электроэнергетика, нефтегазовая промышленность, транспорт,
                промышленность и другие. Она готова работать как с крупными, так и с малыми предприятиями, а также с частными заказчиками.</p>
            <p>Кроме того, компания может предоставлять свои услуги не только в городе Ижевске, но и по всей Удмуртской республике, в зависимости от требований
                и потребностей клиентов. На сайте компании можно найти подробную информацию о услугах, ценах, контактных данных и отзывах
                клиентов.</p>
        </div>
    )
}

export default About;