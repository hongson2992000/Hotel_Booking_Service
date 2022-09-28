import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import OverviewServiceReducers from "./OverviewServiceReducers";
import RoomTypeReducer from "./RoomTypeReducer";
export default combineReducers({
    OverviewServiceReducers,
    LoadingReducer,
    RoomTypeReducer
})