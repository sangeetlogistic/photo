/* eslint-disable jsx-a11y/anchor-is-valid */
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
import { GalleryMediumThemeCmp } from '../../../../../features/Gallery/Gallery.component';
import { recordsPerPage } from '../../../../../features/Gallery/Gallery.constants';
import LayoutCmp from '../../../../../components/Layout';
import GalleryServices from '../../../../../services/API/Gallery/Gallery.services';
import { statusCode } from '../../../../../constants/statusCode';
import SEO from '../../../../../services/API/SEO';
import { SITE_URL } from '../../../../../constants/predicates';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const GallerySection = dynamic(() => import('../../../../../features/Gallery/Gallery.Section'));
const GalleryMediumSlider = dynamic(() => import('../../../../../features/Gallery/Medium/GalleryMedium.Slider'));

const GalleryMedium = ({ seoResult, galleryResult }: any) => {
    const param: { mediumId?: string; themeId?: string } | null = useParams();
    const route = useRouter();
    const dispatch = useAppDispatch();
    const sliderData = useAppSelector(selectSliderData);
    const galleryData = useAppSelector(selectGalleryData);
    const filteredOptions = useAppSelector(selectFilteredOptions);
    const totalGalleryRecord = useAppSelector(selectTotalGalleryRecord);

    const [storeSelectedData, setStoreSelectedData] = useState<any>({
        selectedData: null,
        selection: param?.themeId || 'all',
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
                theme_slug: storeSelectedData?.selection === 'all' ? undefined : storeSelectedData?.selection,
                medium_slug: storeSelectedData?.selectedData?.obj?.slug || param?.mediumId,
                pageNumber: storeSelectedData?.pageNumber,
                recordsPerPage,
                clickedFrom: storeSelectedData?.selection === 'all' ? undefined : 'medium',
            };
            if (!isInitial && isContinue) {
                await dispatch(getGalleryAction(payload));
                setIsContinue(false);
            }
            if (!isInitial && !isContinue) {
                route.push(
                    Routes.galleryMedium
                        .replace(':mediumId', storeSelectedData?.selectedData?.obj?.slug || param?.mediumId)
                        .replace(':themeId', storeSelectedData?.selection),
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
                <meta name="twitter:description" content={seoResult?.description || ''} />
                <meta name="twitter:image" content={seoResult?.imageUrl || ''} />
            </Head>
            <LayoutCmp key={null} type="" props={undefined}>
                <GalleryMediumThemeCmp>
                    {!isInitial && sliderData?.length ? (
                        <div className="filter_slider">
                            <GalleryMediumSlider
                                storeSelectedData={storeSelectedData}
                                setStoreSelectedData={setStoreSelectedData}
                                sliderData={sliderData}
                                isInitial={isInitial}
                            />
                        </div>
                    ) : galleryResult?.detail?.sliderData?.length ? (
                        <div className="filter_slider">
                            <GalleryMediumSlider
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
                            placeholder="Filter by theme"
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
                            placeholder="Filter by theme"
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
export default GalleryMedium;

export const getServerSideProps = async (context) => {
    const { themeId, mediumId }: any = context.query;

    let seoResult: any = '';
    try {
        const response = await SEO.getSeoDetail({ slug: `gallery/medium/${mediumId}/theme/${themeId}` });
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
        theme_slug: themeId === 'all' ? undefined : themeId,
        medium_slug: mediumId,
        pageNumber: 1,
        recordsPerPage,
        clickedFrom: themeId === 'all' ? undefined : 'medium',
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
        galleryResult = { detail: err.response.data, error: { message: err.response.data.message, code: err?.response?.data?.code || null } };
    }

    return {
        props: {
            seoResult,
            galleryResult,
        },
    };
};
