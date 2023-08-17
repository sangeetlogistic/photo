import React from 'react';
import FilledButton from '../../components/FilledButton';
import { HeroSection, PaintingsHeroSectionCmp } from './Paintings.component';

const PaintingsHeroSectionContent = ({ detailPageCoverImage, coverTitle, coverSubTitle, coverButtonTitle, onClick }: any) => (
    <HeroSection detailPageCoverImage={detailPageCoverImage}>
        <PaintingsHeroSectionCmp>
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
        </PaintingsHeroSectionCmp>
    </HeroSection>
);

export default PaintingsHeroSectionContent;
