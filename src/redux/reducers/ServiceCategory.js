import { getServiceCategory, getType } from "../actions/ServiceCategoryAction";

const inittialState = {
    arrServiceCategory: [],
  };
  
  export default function ServiceCategoryReducer(state = inittialState, action) {
    switch (action.type) {
      case getType(getServiceCategory.getServiceCategoryRequest):
        return {
          ...state,
        };
      case getType(getServiceCategory.getServiceCategorySuccess):
        return {
          ...state,
          arrServiceCategory: action.payload,
        };
        case getType(getServiceCategory.getServiceCategoryFailure):
        return {
          ...state,
        };
      default:
        return state;
    }
  }
  