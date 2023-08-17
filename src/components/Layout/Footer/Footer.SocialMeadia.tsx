import React from 'react';

import { Images } from '../../../theme';
import LazyImage from '../../LazyImage';

const socialMedaia = [
    {
        id: 1,
        img: Images.Facebook,
        redireact: 'https://www.facebook.com/photo2painting',
    },
    {
        id: 2,
        img: Images.Instagram,
        redireact: 'https://www.instagram.com/photo2painting/',
    },
    {
        id: 3,
        img: Images.Youtube,
        redireact: 'https://www.youtube.com/photo2painting',
    },
    {
        id: 4,
        img: Images.TikTok,
        redireact: 'https://tiktok.com/photo2painting',
    },
];

const SocialMeadia = () => (
    <div className="footer-social-media-link">
        {socialMedaia.map((obj) => (
            <a href={obj.redireact} key={obj.id}>
                <LazyImage effect="opacity" src={obj.img} alt="" />
            </a>
        ))}
    </div>
);

export default SocialMeadia;
