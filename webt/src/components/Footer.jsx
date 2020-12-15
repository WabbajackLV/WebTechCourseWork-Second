import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();

    return (<footer>
        <p>Copyright &copy; {currentYear} Arvis Krafts</p>
    </footer>);
}

export default Footer;