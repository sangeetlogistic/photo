import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../navigation/Routes';

const helpContent = [
    { id: 1, path: Routes.aboutUs, name: 'About Us' },
    { id: 2, path: Routes.privacy, name: 'Privacy Policy' },
    { id: 3, path: Routes.drawingsPictures, name: 'Drawings of Pictures' },
    { id: 4, path: Routes.ccpa, name: 'CCPA Privacy Notice' },
    { id: 5, path: Routes.cookiePolicy, name: 'Cookies Policy' },
    { id: 6, path: Routes.blog.replace(':id', ''), name: 'Blog' },
    { id: 7, path: Routes.termsCondition, name: 'Terms & Conditions' },
];

const HelpContent = () => (
    <div className="footer-menu-block">
        <div className="footer-menu-wrap">
            <h3 className="f-title">Help</h3>
            <ul className="footer-link-list">
                {helpContent.map((obj) => (
                    <li key={obj.id}>
                        <Link className="footer-link" to={obj.path}>
                            {obj.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default HelpContent;
