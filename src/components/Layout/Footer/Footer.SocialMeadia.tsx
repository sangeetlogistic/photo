import React from 'react';

import { Images } from '../../../theme';

const socialMedia = [
    {
        id: 1,
        img: Images.Facebook,
        redirect: 'https://www.facebook.com/photo2painting',
    },
    {
        id: 2,
        img: Images.Instagram,
        redirect: 'https://www.instagram.com/photo2painting/',
    },
    {
        id: 3,
        img: Images.Youtube,
        redirect: 'https://www.youtube.com/photo2painting',
    },
    {
        id: 4,
        img: Images.TikTok,
        redirect: 'https://tiktok.com/photo2painting',
    },
];

const SocialMeadia = () => (
    <div className="footer-social-media-link">
        {socialMedia.map((obj) => (
            <a href={obj.redirect} key={obj.id}>
                <img src={obj.img?.src} alt="" />
            </a>
        ))}
    </div>
);

export default SocialMeadia;
