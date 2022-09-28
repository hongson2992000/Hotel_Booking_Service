import { all } from "redux-saga/effects";
import * as hotelServiceSaga from "./HotelServiceSaga";
import * as roomTypeSaga from "./RoomTypeSaga";
export default function* rootSaga() {
  yield all([
    hotelServiceSaga.followActionGetAllHotelService(),
    roomTypeSaga.followActionGetAllRoomType(),
  ]);
}
