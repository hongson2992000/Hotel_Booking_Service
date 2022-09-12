import { getType, getHotelService } from "../actions/HotelServiceAction";

const initialState = {
  arrService: [],
  isLoading: true,
};

export default function OverviewServiceReducers(state = initialState, action) {
  switch (action.type) {
    case getType(getHotelService.getHotelServiceRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getHotelService.getHotelServiceSuccess):
      return {
        ...state,
        isLoading: false,
        arrService: action.payload
      };
    case getType(getHotelService.getHotelServiceFailure):
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
