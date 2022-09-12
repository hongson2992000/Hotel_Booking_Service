import { all } from "redux-saga/effects";
import * as hotelServiceSaga from "./HotelServiceSaga";

export default function* rootSaga() {
  yield all([hotelServiceSaga.followActionGetAllHotelService()]);
}
