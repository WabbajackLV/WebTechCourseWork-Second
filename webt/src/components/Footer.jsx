import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();

    return (<div className="footer">
        <p className="footerText">&copy; Copyright {currentYear} Arvis Krafts</p>
    </div>);
}

export default Footer;