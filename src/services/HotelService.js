import { BaseServices } from "./BaseService";

class HotelService extends BaseServices {
  getAllHotelService = () => {
    return this.get(`v1/overview/getOverviewServices`)
  };
}

export const hotelService = new HotelService();