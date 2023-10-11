import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import CustomerReview from '../../CustomerReview';
import BlogPosts from './Footer.BlogPosts';
import { FooterCmp } from './Footer.component';
import Filters from './Footer.Filters';
import HelpContent from './Footer.HelpContent';
import SocialMeadia from './Footer.SocialMeadia';
import Subscribe from './Footer.Subscribe';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getTotalRatingAction, selectTotalRating } from '../../../services/API/GeneralSettings/GeneralSettings.slice';
import { notToShowReviewsPage } from './Footer.constants';
import { roundOff } from '../../../utils/func';

const Footer = () => {
    const pathname = usePathname();

    const totalRating = useAppSelector(selectTotalRating);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!notToShowReviewsPage.includes(pathname)) dispatch(getTotalRatingAction());
    }, []);

    return (
        <FooterCmp>
            <Subscribe />
            <div className="footer-mid">
                <HelpContent />
                <div className="footer-review-section">
                    <CustomerReview className="footer-review-block" title="Excellent Customer Reviews" rate={roundOff(totalRating)} footerLogo />
                </div>
                <BlogPosts />
            </div>
            <div className="footer-btm-block">
                <SocialMeadia />
                <Filters />
                <div className="footer-copy-right">
                    Photo2Painting inc. 2022<sup>R</sup>
                </div>
            </div>
        </FooterCmp>
    );
};

export default Footer;
