import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import OverviewServiceReducers from "./OverviewServiceReducers";
import RoomTypeReducer from "./RoomTypeReducer";
import ServiceCategoryReducer from "./ServiceCategory";
import ServiceCategoryDetailReducer from "./ServiceCategoryDetail";
export default combineReducers({
    OverviewServiceReducers,
    LoadingReducer,
    RoomTypeReducer,
    ServiceCategoryReducer,
    ServiceCategoryDetailReducer
})