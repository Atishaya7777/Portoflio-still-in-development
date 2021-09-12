import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export const SubMenuItem = (props, { toLink, item }) => {
  return (
    <li className="subitem">
      <Link to={toLink}>
        {props.item} <FontAwesomeIcon icon={faAngleRight} />
      </Link>
    </li>
  );
};
