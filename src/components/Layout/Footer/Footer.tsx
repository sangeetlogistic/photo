import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import CustomerReview from '../../CustomerReview';
import { FooterCmp } from './Footer.component';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getTotalRatingAction, selectLoading, selectTotalRating } from '../../../services/API/GeneralSettings/GeneralSettings.slice';
import { notToShowReviewsPage } from './Footer.constants';
import { roundOff } from '../../../utils/func';
import LoadingCover from '../../LoadingCover';

const Subscribe = dynamic(() => import('./Footer.Subscribe'), { ssr: true });
const SocialMedia = dynamic(() => import('./Footer.SocialMedia'), { ssr: true });
const HelpContent = dynamic(() => import('./Footer.HelpContent'), { ssr: true });
const BlogPosts = dynamic(() => import('./Footer.BlogPosts'), { ssr: true });
const Filters = dynamic(() => import('./Footer.Filters'), { ssr: true });

const Footer = () => {
    const route = useRouter();
    const totalRating = useAppSelector(selectTotalRating);
    const loading = useAppSelector(selectLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!notToShowReviewsPage.includes(route.asPath)) dispatch(getTotalRatingAction());
    }, []);

    return (
        <>
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
                    <SocialMedia />
                    <Filters />
                    <div className="footer-copy-right">
                        Photo2Painting inc. 2022<sup>R</sup>
                    </div>
                </div>
            </FooterCmp>
            <LoadingCover show={loading} />
        </>
    );
};

export default Footer;
