import React from "react"
import style from './client.module.css'

const Client = (props) => {

    return (
        <div className={style.client__item}>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/ru/c/c3/%D0%9B%D0%BE%D0%B3%D0%BE_%D0%90%D0%9A%D0%A1%D0%98%D0%9E%D0%9D_%D1%85%D0%BE%D0%BB%D0%B4%D0%B8%D0%BD%D0%B3.jpg" alt="#" />
                <div>
                    {props.compani}
                </div>
            </div>
            <div>
                {props.message}
            </div>
        </div>

    )
}

export default Client;