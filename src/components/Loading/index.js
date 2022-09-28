import React from "react";
import styleLoading from "./style.module.css";
import { useSelector } from "react-redux";
import { loadingState$ } from "../../redux/selectors/LoadingSelector";
export default function Loading() {
  let isLoading = useSelector(loadingState$);
  if (isLoading) {
    return (
      <div className={styleLoading.bgLoading}>
        <img src="../../assets/img/loading8.gif" />
      </div>
    );
  } else {
    return "";
  }
}
