/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import GalleryMediumSlider from './GalleryMedium.Slider';
import { GalleryMediumThemeCmp } from '../Gallery.component';
import GallerySection from '../Gallery.Section';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { clearGalleryData, getGalleryAction, selectSliderData, setLoading } from '../Gallery.slice';
import { recordsPerPage } from '../Gallery.constants';
import { Routes } from '../../../navigation/Routes';
import { useRouter } from 'next/router';

const GalleryMedium = () => {
    // const param: { mediumId?: string; themeId?: string } = useParams();
    const param: any = {};

    const history = useRouter();
    const dispatch = useAppDispatch();
    const sliderData = useAppSelector(selectSliderData);

    const [storeSelectedData, setStoreSelectedData] = useState<any>({
        selectedData: null,
        selection: param?.themeId || 'all',
        pageNumber: 1,
        currentSlide: 0,
    });

    useEffect(() => {
        (async () => {
            const payload = {
                theme_slug: storeSelectedData?.selection === 'all' ? undefined : storeSelectedData?.selection,
                medium_slug: storeSelectedData?.selectedData?.obj?.slug || param?.mediumId,
                pageNumber: storeSelectedData?.pageNumber,
                recordsPerPage,
                clickedFrom: storeSelectedData?.selection === 'all' ? undefined : 'medium',
            };
            dispatch(setLoading(true));
            await dispatch(getGalleryAction(payload));
            dispatch(setLoading(false));
            history.push(
                Routes.galleryMedium
                    .replace(':mediumId', storeSelectedData?.selectedData?.obj?.slug || param?.mediumId)
                    .replace(':themeId', storeSelectedData?.selection),
            );
        })();
    }, [storeSelectedData]);

    useEffect(
        () => () => {
            dispatch(clearGalleryData());
        },
        [],
    );

    return (
        <GalleryMediumThemeCmp>
            <Helmet>
                <title>Gallery Medium</title>
            </Helmet>
            {sliderData?.length > 0 ? (
                <div className="filter_slider">
                    <GalleryMediumSlider storeSelectedData={storeSelectedData} setStoreSelectedData={setStoreSelectedData} />
                </div>
            ) : null}
            <GallerySection handleSelectData={setStoreSelectedData} placeholder="Filter by theme" storeSelectedData={storeSelectedData} />
        </GalleryMediumThemeCmp>
    );
};
export default GalleryMedium;
