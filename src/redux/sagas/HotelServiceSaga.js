import { call, put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import { hotelService } from "../../services/HotelService";
import * as actions from "../actions/HotelServiceAction";
import { STATUS_CODE } from "../../util/constant/settingSystem";

function* getAllHotelService(action) {
  console.log("data:");
  try {
    let listService = yield call(() => {
      return hotelService.getAllHotelService();
    });
    console.log(listService);
    if (listService.status === STATUS_CODE.SUCCESS) {
      yield put(actions.getHotelService.getHotelServiceSuccess(listService.data));
    }
  } catch (error) {
    yield put(actions.getHotelService.getHotelServiceFailure(error));
  }
}

export function* followActionGetAllHotelService() {
  yield takeLatest(
    actions.getHotelService.getHotelServiceRequest,
    getAllHotelService
  );
}
