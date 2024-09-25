import { all } from 'redux-saga/effects';
// import { watchFetchProducts } from './productSaga';

export default function* rootSagas() {
    yield all([
        // fork(watchFetchProducts),
        // Add all other sagas here
    ]);
}
