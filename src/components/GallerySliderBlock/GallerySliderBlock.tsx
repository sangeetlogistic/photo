import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { portraitsGallery, sketchGallery } from '../../constants/general';
import { Routes } from '../../navigation/Routes';
import { Colors, Fonts, MediaBreakpoints } from '../../theme';
import PhotosIntoPaintingsMedium from '../PhotosIntoPaintingsMedium';
import PicturesIntoPaintingsTheme from '../PicturesIntoPaintingsTheme';
import { IGallerySliderBlock } from './GallerySliderBlock.type';

export const HomeGalleryBlock = styled.div`
    padding: 40px 0;
    margin: 0 -25px;
    @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
        padding: 5.208vw 0 3vw;
        padding-bottom: 0;
        margin: 0;
    }
    .section-title-block {
        margin-bottom: 27px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            margin-bottom: 1.563vw;
        }
        h2 {
            margin-bottom: 14px;
            line-height: 35px;
            font-family: ${Fonts.titleFont};
            @media (max-width: ${`${MediaBreakpoints.upLg}px`}) {
                font-size: 32px;
            }
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                margin-bottom: 0.729vw;
            }
        }
        p {
            max-width: 270px;
            margin: 0 auto;
            color: ${Colors.gray40};
            @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
                max-width: unset;
                margin: 0;
            }
        }
    }
    .sub-title-1,
    .sub-title-2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 16px;
        margin-top: 20px;
        line-height: 22px;
        @media (min-width: ${`${MediaBreakpoints.upMd1}px`}) {
            text-align: left;
            margin-bottom: 0.416vw;
            font-size: 1.25vw;
            margin-top: 0;
            line-height: 1.823vw;
        }
    }
`;

const GallerySliderBlock = (props: IGallerySliderBlock) => {
    const { heading, subHeading, themedTitle, mediumsTitle, themeDetail, mediumDetail, className } = props;

    const route = useRouter();

    return (
        <HomeGalleryBlock className={className}>
            <div className="section-title-block text-center">
                <h2 className="text-uppercase">{heading}</h2>
                <p className="mb-0">{subHeading}</p>
            </div>

            {(Routes.home === route.asPath || sketchGallery.includes(route.asPath)) && (
                <>
                    <h3 className="sec-sub-title sub-title-1">{themedTitle}</h3>
                    {themeDetail && <PicturesIntoPaintingsTheme detail={themeDetail || []} />}
                </>
            )}

            {(Routes.home === route.asPath || portraitsGallery.includes(route.asPath)) && (
                <>
                    <h3 className="sec-sub-title sub-title-2">{mediumsTitle}</h3>
                    {mediumDetail && <PhotosIntoPaintingsMedium detail={mediumDetail || []} />}
                </>
            )}
        </HomeGalleryBlock>
    );
};

export default GallerySliderBlock;
