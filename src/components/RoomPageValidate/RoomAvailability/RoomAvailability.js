import classNames from "classnames";
import React from "react";
import Styles from "../RoomAvailability/RoomAvailability.module.scss";
export default function RoomAvailability({ data }) {
  return (
    <div className={classNames("col-10",Styles.RoomAvailability)}>
      {data &&
        data.map((item, index) => {
          return (
            <div className={classNames("hs-bg-dark-9 hs-mt-32")}>
              <div
                className={classNames(
                  "hs-text-white hs-py-8 hs-pl-8 text-lg",
                  Styles.ImageOfRoomAvailability
                )}
              >
                {item.title}
              </div>
              <div
                className={classNames(
                  "hs-text-white",
                  Styles.ImageOfRoomAvailability
                )}
              >
                <img src={item.image} alt="" />
              </div>
            </div>
          );
        })}
    </div>
  );
}
