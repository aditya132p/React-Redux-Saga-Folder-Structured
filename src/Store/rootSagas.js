import { all } from 'redux-saga/effects';
import { decrementCounterSaga, incrementCounterSaga } from './Counter/counterSaga';
// import { watchFetchProducts } from './productSaga';

export default function* rootSagas() {
    yield all([
        incrementCounterSaga(),
        decrementCounterSaga()
        // fork(watchFetchProducts),
        // Add all other sagas here
    ]);
}
