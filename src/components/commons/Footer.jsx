import React from 'react';
import styles from "./footer.module.css";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles._}>
            <div className={styles.block}>
                <div>{currentYear} &copy; All Right Reserved.</div>
                <div className={styles.links}>
                    <a href="#" target='_blank'>
                        <BiLogoFacebookCircle size={36} />
                    </a>
                    <a href="#" target='_blank'>
                        <BiLogoInstagram size={36} />
                    </a>
                    <a href="#" target='_blank'>
                        <BiLogoYoutube size={36} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;