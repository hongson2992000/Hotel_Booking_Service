import { all } from "redux-saga/effects";
import * as hotelServiceSaga from "./HotelServiceSaga";
import * as roomTypeSaga from "./RoomTypeSaga";
import * as serviceCategorySaga from "./ServiceCategorySaga";
export default function* rootSaga() {
  yield all([
    hotelServiceSaga.followActionGetAllHotelService(),
    roomTypeSaga.followActionGetAllRoomType(),
    serviceCategorySaga.followActionGetAllHotelService(),
    serviceCategorySaga.followActionGetAllHotelService(),
    serviceCategorySaga.followActionGetServiceDetail(),
  ]);
}
