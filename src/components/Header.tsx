import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__icon-row">
        <FontAwesomeIcon icon={faChevronLeft} />
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="header__text-row">Meet the team</div>
    </div>
  );
};

export default Header;
