import React from "react"
import { addReviewCreator, updateReviewCreator } from "../../redux/store";
import Client from "./Client/client";
import style from './clients.module.css'


const Clients = (props) => {

    const clientElement = props.clientsPage.review.map(r => <Client compani={r.compani} message={r.message} id={r.id} />)

    let newReviewText = props.clientsPage.newReviewText

    const onAddReviewClick = () => {
        props.store.dispatch(addReviewCreator())
    }

    const onNewReviewChacnge = (e) => {
        let reviewText = e.target.value;
        props.store.dispatch(updateReviewCreator(reviewText))
    }

    return (
        <div className={style.clients__wrapper}>
            <h1>С кем мы работаем</h1>
            <div className={style.client__item__wrapper}>
                {clientElement}
            </div>
            <div className={style.review}>
                <div>
                    <textarea onChange={onNewReviewChacnge} value={newReviewText} placeholder="Оставьте свой отзыв о работе компании" cols='100' rows='10'></textarea>
                </div>
                <div>
                    <button onClick={onAddReviewClick}>Добавить</button>
                </div>
            </div>
        </div>
    )
}

export default Clients;