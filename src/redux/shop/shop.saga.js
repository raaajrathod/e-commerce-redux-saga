import {takeEvery, call, put} from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import {fetchCollectionsSuccess, fetchCollectionError} from "./shop.actions";

export function* fetchCollectionAsync() {
  yield console.log("I am Fired!");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionError(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(ShopActionTypes.FETCH_COLLECTION, fetchCollectionAsync);
}
    