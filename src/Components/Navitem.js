import { BrowserRouter as Router, Link } from "react-router-dom"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navitem = (props, { item, type }) => {

    let theClass = "";
    const [open, setOpen] = useState(false);

    // This part still needs working. Rework this so that when the user clicks outside the box when the submenu is active, the submenu also retracts.
    // useEffect(() => {
    //     window.addEventListener("click", (event) => {
          
    //     })
    //     return () => {
          
    //     }
    //   }, [])

    if(open){
        theClass = "item active has-submenu"
    }else{
        theClass = "item has-submenu"
    }

    if(props.type === "hasSubMenu"){
        return (
            <li><Link to={"/"} onClick={() => setOpen(!open)} className={theClass}>{props.item}<FontAwesomeIcon icon={faAngleDown}/></Link>
            {open && <ul className="submenu">
                        {props.children}
                </ul>} 
            </li>
        )
    }else if(props.type === "text"){
        return (<li className="item"><Link to={"/"}>{props.item}</Link></li>)
    }else if(props.type === "logo"){
        return (<li className="logo"><Link to={"/"}>{props.item}</Link></li>)
    }else if(props.type === "toggle"){
        return (<li className="toggle"><Link to={"/"}>{props.item}</Link></li>)
    }
    console.log(item, type);
}

export default Navitem
