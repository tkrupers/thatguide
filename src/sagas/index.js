import { all } from 'redux-saga/effects'
import author from './author';
import guides from './guides';
import user from './user';

export default function* rootSaga() {
  yield all([
    author(),
    guides(),
    user()
  ]);
}