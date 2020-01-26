import React from "react";

const HiglightedBtn: React.FC<{ message: string }> = props => {
  return (
    <div className="underline-btn-wrap">
      <div className="underline-btn-wrap__btn">{props.message}</div>
    </div>
  );
};

export default HiglightedBtn;
