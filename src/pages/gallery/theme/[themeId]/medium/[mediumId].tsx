import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import {
    clearGalleryData,
    getGalleryAction,
    selectFilteredOptions,
    selectGalleryData,
    selectSliderData,
    selectTotalGalleryRecord,
    setGalleryDetail,
} from '../../../../../features/Gallery/Gallery.slice';
import { Routes } from '../../../../../navigation/Routes';
import { recordsPerPage } from '../../../../../features/Gallery/Gallery.constants';
import { GalleryMediumThemeCmp } from '../../../../../features/Gallery/Gallery.component';
import LayoutCmp from '../../../../../components/Layout';
import GalleryServices from '../../../../../services/API/Gallery/Gallery.services';
import { statusCode } from '../../../../../constants/statusCode';
import SEO from '../../../../../services/API/SEO';
import { SITE_URL } from '../../../../../constants/predicates';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const GallerySection = dynamic(() => import('../../../../../features/Gallery/Gallery.Section'));
const GalleryThemeSlider = dynamic(() => import('../../../../../features/Gallery/Theme/GalleryTheme.Slider'));

const GalleryTheme = ({ seoResult, galleryResult }: any) => {
    const param: { mediumId?: string; themeId?: string } | null = useParams();
    const route = useRouter();
    const dispatch = useAppDispatch();

    const sliderData = useAppSelector(selectSliderData);
    const galleryData = useAppSelector(selectGalleryData);
    const filteredOptions = useAppSelector(selectFilteredOptions);
    const totalGalleryRecord = useAppSelector(selectTotalGalleryRecord);

    const [storeSelectedData, setStoreSelectedData] = useState<any>({
        selectedData: null,
        selection: param?.mediumId || 'all',
        pageNumber: 1,
        currentSlide: 0,
    });
    const [isInitial, setIsInitial] = useState<boolean>(true);
    const [isContinue, setIsContinue] = useState<boolean>(false);

    useEffect(() => {
        setIsInitial(false);
    }, []);

    useEffect(() => {
        dispatch(setGalleryDetail(galleryResult));
    }, [galleryResult]);

    useEffect(() => {
        (async () => {
            const payload = {
                theme_slug: storeSelectedData?.selectedData?.obj?.slug || param?.themeId,
                medium_slug: storeSelectedData?.selection === 'all' ? undefined : storeSelectedData?.selection,
                pageNumber: storeSelectedData?.pageNumber,
                recordsPerPage,
                clickedFrom: storeSelectedData?.selection === 'all' ? undefined : 'theme',
            };

            if (!isInitial && isContinue) {
                await dispatch(getGalleryAction(payload));
                setIsContinue(false);
            }

            if (!isInitial && !isContinue) {
                route.push(
                    Routes.galleryTheme
                        .replace(':themeId', storeSelectedData?.selectedData?.obj?.slug || param?.themeId)
                        .replace(':mediumId', storeSelectedData?.selection),
                );
            }
        })();
    }, [storeSelectedData]);

    useEffect(
        () => () => {
            dispatch(clearGalleryData());
        },
        [],
    );

    return (
        <>
            <Head>
                <link rel="canonical" href={`${SITE_URL}${route.asPath}`} key="canonical" />
                <title>{seoResult?.title}</title>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${SITE_URL}${route.asPath}`} />
                <meta property="og:site_name" content={SITE_URL} />
                <meta property="og:updated_time" content={seoResult?.updatedAt} />
                <meta property="og:title" content={seoResult?.title} />
                <meta property="og:description" content={seoResult?.description || ''} />
                <meta name="description" content={seoResult?.description || ''} />
                <meta property="og:image" content={seoResult?.imageUrl || ''} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoResult?.title} />
                <meta name="twitter:description" content={seoResult?.imageUrl} />
                <meta name="twitter:image" content={seoResult?.description || ''} />
            </Head>
            <LayoutCmp key={null} type="" props={undefined}>
                <GalleryMediumThemeCmp>
                    <Head>
                        <title>Gallery Theme</title>
                    </Head>
                    {!isInitial && sliderData?.length ? (
                        <div className="filter_slider">
                            <GalleryThemeSlider
                                storeSelectedData={storeSelectedData}
                                setStoreSelectedData={setStoreSelectedData}
                                sliderData={sliderData}
                                isInitial={isInitial}
                            />
                        </div>
                    ) : galleryResult?.detail?.sliderData?.length ? (
                        <div className="filter_slider">
                            <GalleryThemeSlider
                                storeSelectedData={storeSelectedData}
                                setStoreSelectedData={setStoreSelectedData}
                                sliderData={galleryResult?.detail?.sliderData}
                                isInitial={isInitial}
                            />
                        </div>
                    ) : null}
                    {!isInitial ? (
                        <GallerySection
                            handleSelectData={setStoreSelectedData}
                            placeholder="Filter by medium"
                            storeSelectedData={storeSelectedData}
                            isInitial={isInitial}
                            galleryData={galleryData}
                            filteredOptions={filteredOptions}
                            totalGalleryRecord={totalGalleryRecord}
                            setIsContinue={setIsContinue}
                        />
                    ) : (
                        <GallerySection
                            handleSelectData={setStoreSelectedData}
                            placeholder="Filter by medium"
                            storeSelectedData={storeSelectedData}
                            isInitial={isInitial}
                            galleryData={galleryResult?.detail?.Gallery}
                            filteredOptions={galleryResult?.detail?.FilteredOptions}
                            totalGalleryRecord={galleryResult?.detail?.totalGalleryRecord}
                            setIsContinue={setIsContinue}
                        />
                    )}
                </GalleryMediumThemeCmp>
            </LayoutCmp>
        </>
    );
};

export default GalleryTheme;

export const getServerSideProps = async (context) => {
    const { themeId, mediumId }: any = context.query;
    let seoResult: any = '';
    try {
        const response = await SEO.getSeoDetail({ slug: `gallery/theme/${themeId}/medium/${mediumId}` });
        if (response.status === statusCode.success) {
            seoResult = response?.data?.data;
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        seoResult = null;
    }

    let galleryResult: any = {};
    const payload = {
        theme_slug: themeId,
        medium_slug: mediumId === 'all' ? undefined : mediumId,
        pageNumber: 1,
        recordsPerPage,
        clickedFrom: mediumId === 'all' ? undefined : 'theme',
    };

    try {
        const response: any = await GalleryServices.getBlogDetail(payload);
        if (response.status === statusCode.success) {
            galleryResult = {
                detail: response.data,
            };
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        galleryResult = { detail: err.response.data, error: { message: err.response.data.message || null, code: err?.response?.data?.code || null } };
    }

    return {
        props: {
            seoResult,
            galleryResult,
        },
    };
};
