import React from 'react';

import FilledButton from '../../components/FilledButton';
import { HomeHeroSection, HomeHeroSectionCmp } from './Home.component';
import { useRedirectOrder } from '../../hooks';

const HeroSectionContent = () => {
    const redirect = useRedirectOrder();

    return (
        <HomeHeroSection>
            <HomeHeroSectionCmp>
                <div className="hero-content-wrapp">
                    <div className="hero-texts-block">
                        <h1>CAPTURE THE MOST MEMORABLE AND SPECIAL MOMENTS</h1>
                        <p className="hero-sub-text">Photo to painting service by real hand-drawing artists</p>
                    </div>
                    <div className="btn-row">
                        <FilledButton className="text-uppercase" size="large" color="primaryGRD" onClick={() => redirect.redirectTo()}>
                            Get Started and Paint my Photo
                        </FilledButton>
                    </div>
                </div>
            </HomeHeroSectionCmp>
        </HomeHeroSection>
    );
};

export default HeroSectionContent;
