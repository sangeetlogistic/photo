import React from 'react';

import FilledButton from '../../components/FilledButton';
import { DraWingHeroSection, DrawingPortraitsHeroSectionCmp } from './DrawingPortrait.component';

const DrawingPortraitsHeroSectionContent = ({ detailPageCoverImage, handImage, coverTitle, coverSubTitle, coverButtonTitle, onClick }: any) => (
    <DraWingHeroSection detailPageCoverImage={detailPageCoverImage}>
        <div className="hero__container">
            <DrawingPortraitsHeroSectionCmp className="page-hero-content">
                <div className="hero-content-wrapp">
                    <div className="hero-texts-block">
                        <h1 className="text-uppercase">{coverTitle || ''}</h1>
                        <p className="hero-sub-text">{coverSubTitle || ''}</p>
                    </div>
                    <div className="btn-row">
                        <FilledButton className="text-uppercase" size="large" color="primaryGRD" onClick={onClick}>
                            {coverButtonTitle || ''}
                        </FilledButton>
                    </div>
                </div>
            </DrawingPortraitsHeroSectionCmp>
            <figure className="hnd-image-outer">
                <img src={handImage} alt="" className="" />
            </figure>
        </div>
    </DraWingHeroSection>
);

export default DrawingPortraitsHeroSectionContent;
