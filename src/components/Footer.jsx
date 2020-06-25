import React from 'react';
import "../App.css";
import StickyFooter from 'react-sticky-footer';

const Footer = () => {
    return (
        <div>
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