import React from "react";

interface IPictureRowProps {
  pictureUrl: string;
  firstName: string;
  lastName: string;
}

const PictureRow: React.FC<IPictureRowProps> = props => {
  return (
    <div className="pic-row">
      <div className="pic-row__pic-text-box">
        <img
          className="pic-row__pic-text-box--pic"
          alt="row img"
          src={props.pictureUrl}
        />
        <span className="pic-row__pic-text-box--text">
          {props.firstName} {props.lastName}
        </span>
      </div>
    </div>
  );
};

export default PictureRow;
