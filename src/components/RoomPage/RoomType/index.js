import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { roomTypeState$ } from "../../../redux/selectors/RoomTypeSelector";
import "./style.css";
import * as actions from "../../../redux/actions/RoomTypeAction";
// import '../../../../public/assets/img/standardRoom.jpg'
export default function RoomType() {
  const dispatch = useDispatch;
  // React.useEffect(() => {
  //   dispatch(actions.getRoomType.getRoomTypeRequest());
  // }, [dispatch]);
  // let arrRoomType = useSelector(roomTypeState$);
  return (
    <div className="roomType">
      <div className="row">
        <div className="col-4 roomType_item">
          <div className="roomType_item_header">
            <p className="roomType_item_text">Standard Room</p>
            <hr className="hr1" />
            <img
              className="roomType_item_image"
              src="https://i.ibb.co/c6hcy1D/standard-room.jpg"
            />
          </div>
          <div className="roomType_item_body row">
            <div className="col-6 roomType_item_body_description">
              <p>
                <i class="fa-solid fa-bed"></i>Giường Đôi
              </p>
              <p>
                <i class="fa-solid fa-text-width"></i>19m2
              </p>
              <a href="#">Đặt Phòng +</a>
            </div>
            <div className="col-6 roomType_item_body_description">
              <p>
                <i class="fa-solid fa-users"></i>2 Người
              </p>
              <p>
                <i class="fa-regular fa-compass"></i>Hướng Phố
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 roomType_item">
          <div className="roomType_item_header">
            <p className="roomType_item_text">Superior Room</p>
            <hr className="hr1" />
            <img
              className="roomType_item_image"
              src="https://i.ibb.co/c6hcy1D/standard-room.jpg"
            />
          </div>
          <div className="roomType_item_body row">
            <div className="col-6 roomType_item_body_description">
              <p>
                <i class="fa-solid fa-bed"></i>Giường Đôi
              </p>
              <p>
                <i class="fa-solid fa-text-width"></i>19m2
              </p>
              <a href="#">Đặt Phòng +</a>
            </div>
            <div className="col-6 roomType_item_body_description">
              <p>
                <i class="fa-solid fa-users"></i>2 Người
              </p>
              <p>
                <i class="fa-regular fa-compass"></i>Hướng Phố
              </p>
            </div>
          </div>
        </div>
        <div className="col-4 roomType_item">
          <div className="roomType_item_header">
            <p className="roomType_item_text">Deluxe Room</p>
            <hr className="hr1" />
            <img
              className="roomType_item_image"
              src="https://i.ibb.co/c6hcy1D/standard-room.jpg"
            />
          </div>
          <div className="roomType_item_body row">
            <div className="col-6 roomType_item_body_description">
              <p>
                <i class="fa-solid fa-bed"></i>Giường Đôi
              </p>
              <p>
                <i class="fa-solid fa-text-width"></i>19m2
              </p>
              <a href="#">Đặt Phòng +</a>
            </div>
            <div className="col-6 roomType_item_body_description">
              <p>
                <i class="fa-solid fa-users"></i>2 Người
              </p>
              <p>
                <i class="fa-regular fa-compass"></i>Hướng Phố
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
