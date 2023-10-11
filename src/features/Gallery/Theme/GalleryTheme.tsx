import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import { GalleryMediumThemeCmp } from '../Gallery.component';
import GalleryThemeSlider from './GalleryTheme.Slider';
import GallerySection from '../Gallery.Section';
import { Routes } from '../../../navigation/Routes';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { clearGalleryData, getGalleryAction, selectSliderData, setLoading } from '../Gallery.slice';
import { recordsPerPage } from '../Gallery.constants';
import { useRouter } from 'next/router';

const GalleryTheme = () => {
    // const param: { mediumId?: string; themeId?: string } = useParams();
    const param: any = {};
    const history = useRouter();
    const dispatch = useAppDispatch();
    const sliderData = useAppSelector(selectSliderData);

    const [storeSelectedData, setStoreSelectedData] = useState<any>({
        selectedData: null,
        selection: param?.mediumId || 'all',
        pageNumber: 1,
        currentSlide: 0,
    });

    useEffect(() => {
        (async () => {
            const payload = {
                theme_slug: storeSelectedData?.selectedData?.obj?.slug || param?.themeId,
                medium_slug: storeSelectedData?.selection === 'all' ? undefined : storeSelectedData?.selection,
                pageNumber: storeSelectedData?.pageNumber,
                recordsPerPage,
                clickedFrom: storeSelectedData?.selection === 'all' ? undefined : 'theme',
            };
            dispatch(setLoading(true));
            await dispatch(getGalleryAction(payload));
            dispatch(setLoading(false));
            history.push(
                Routes.galleryTheme
                    .replace(':themeId', storeSelectedData?.selectedData?.obj?.slug || param?.themeId)
                    .replace(':mediumId', storeSelectedData?.selection),
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
                <title>Gallery Theme</title>
            </Helmet>
            {sliderData?.length ? (
                <div className="filter_slider">
                    <GalleryThemeSlider storeSelectedData={storeSelectedData} setStoreSelectedData={setStoreSelectedData} />
                </div>
            ) : null}
            <GallerySection handleSelectData={setStoreSelectedData} placeholder="Filter by medium" storeSelectedData={storeSelectedData} />
        </GalleryMediumThemeCmp>
    );
};

export default GalleryTheme;
