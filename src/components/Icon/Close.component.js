import React from "react";

import style from "../index.module.scss";


const CloseIcon = () => {
  const svgStyle = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2px"
  }

  return (
    <span className={style.master_detail_detail_close}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g id="cross">
          <path d="M7 7L25 25" {...svgStyle} />
          <path d="M7 25L25 7" {...svgStyle} />
        </g>
      </svg>
    </span>
  );
}

export default CloseIcon;
