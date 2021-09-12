import { BrowserRouter as Router, Link } from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className="navbar">
            <Router>
                <ul className="navbar-menu">{props.children}</ul>
            </Router>
        </div>)
}

export default Navbar
