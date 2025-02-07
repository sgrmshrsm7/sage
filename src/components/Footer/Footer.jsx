import React from "react";
import {
    FaGithub,
    FaTelegramPlane,
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import footerData from "./footerData.json";
import "./Footer.scss";

const iconComponents = {
    FaGithub: FaGithub,
    GoMail: GoMail,
    FaTelegramPlane: FaTelegramPlane,
    FaFacebook: FaFacebook,
    FaInstagram: FaInstagram,
    FaTwitter: FaTwitter,
};

const Footer = () => {
    return (
        <div className="footer">
            <div className="links">
                {footerData.footer.map((link, index) => {
                    const IconComponent = iconComponents[link.icon];
                    return (
                        <span key={index} className="linkicon">
                            <a href={link.url} target="_blank" rel="noreferrer">
                                <IconComponent className="link" />
                            </a>
                        </span>
                    );
                })}
            </div>
            <a href="https://github.com/sgrmshrsm7" className="createdbylink">
                <div className="createdby">Created by @sgrmshrsm7</div>
            </a>
        </div>
    );
};

export default Footer;
