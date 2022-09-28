import { getRoomType } from "../actions/RoomTypeAction";
import { getType } from "../actions/HotelServiceAction";
const inittialState = {
  arrRoomType: [],
};

export default function RoomTypeReducer(state = inittialState, action) {
  switch (action.type) {
    case getType(getRoomType.getRoomTypeRequest):
      return {
        ...state,
      };
    case getType(getRoomType.getRoomTypeSuccess):
      return {
        ...state,
        arrRoomType: action.payload,
      };
      case getType(getRoomType.getRoomTypeFailure):
      return {
        ...state,
      };
    default:
      return state;
  }
}
