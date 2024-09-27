import { put, takeLatest } from "redux-saga/effects";

function * incrementCounter(){
    yield put({
        type: "CLICK_TO_INCREMENT"
    })
   
}

function * incrementCounterSaga (){
    yield takeLatest("SAGA_CLICK_TO_INCREMENT",incrementCounter)
}

function * decrementCounter(){
    
    yield put({
        type: "CLICK_TO_DECREMENT"
    })
}

function * decrementCounterSaga (){
    yield takeLatest("SAGA_CLICK_TO_DECREMENT",decrementCounter)
}


export {decrementCounterSaga , incrementCounterSaga}