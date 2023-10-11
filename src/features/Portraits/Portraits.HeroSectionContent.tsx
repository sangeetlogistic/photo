import React from 'react';
import FilledButton from '../../components/FilledButton';
import { HeroSection, PortraitsHeroSectionCmp } from './Portraits.component';
import Image from 'next/image';

const PortraitsHeroSectionContent = ({ detailPageCoverImage, handImage, coverTitle, coverSubTitle, coverButtonTitle, onClick }: any) => (
    <HeroSection detailPageCoverImage={detailPageCoverImage}>
        <div className="hero__container">
            <PortraitsHeroSectionCmp className="page-hero-content">
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
            </PortraitsHeroSectionCmp>
            <figure className="hnd-image-outer ">
                <Image fill src={handImage} alt="" className=''/>
            </figure>
        </div>
    </HeroSection>
);

export default PortraitsHeroSectionContent;
