import React from "react";
import "../Css/Footer.css" // Use 2 dots

const Footer = () => {
    const name = "RKCoding"
    return(
        <footer>
            <p>
                Copyright &copy; {name}
            </p>
        </footer>
    )
}

export default Footer