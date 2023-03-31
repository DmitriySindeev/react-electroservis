const ADD_REVIEW = 'ADD_REVIEW';

const UPDATE_NEW_REVIEW = 'UPDATE_NEW_REVIEW';

let store = {
    _state : {
        clientsPage : {
            review : [
                {id:1, compani : 'АО «Ижевский мотозавод «Аксион-холдинг»', message : 'Лучшая компания с которой мы сотрудничали'},
                {id:2, compani : 'Ижевский Механический Завод', message : 'Я буду платить им столько сколько они попросят'}
            ],
            newClientText: '',
            newReviewText: ''
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State change')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_REVIEW) {
            let newReview = {
                id:3,
                compani: 'New Compani',
                message: this._state.clientsPage.newReviewText
            }
            this._state.clientsPage.review.push(newReview)
            this._state.clientsPage.newReviewText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_REVIEW) {
            this._state.clientsPage.newReviewText = action.reviewText
            this._callSubscriber(this._state)
        }
    }
}

export const addReviewCreator = () => ({ type: ADD_REVIEW }) 

export const updateReviewCreator = (reviewText) => ({ type: UPDATE_NEW_REVIEW, reviewText: reviewText} ) 

export default store;