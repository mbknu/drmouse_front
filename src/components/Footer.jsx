import React from 'react';
import "../App.css";

const Footer = () => {
    return (
        <div className="wrapper-footer">
    <div className="footerDesktopContainer">
            <footer className="footerDesktop">
                <br/>
                <p className="text-footer">Fait avec ❤ par Dr Mouse</p>
            </footer>
        </div>
         <div className="footerMobileContainer">
            <footer className="footerMobile">
                <p className="text-footer">Fait avec ❤ par Dr Mouse</p>
            </footer>
            
     </div>
     </div>


    );
};

export default Footer;