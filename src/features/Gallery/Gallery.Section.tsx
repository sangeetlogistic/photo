import React, { useEffect, useMemo, useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Select } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import FilledButton from '../../components/FilledButton';
import { Images } from '../../theme';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    clearGalleryData,
    selectAdministratorDisabled,
    selectError,
    selectFilteredOptions,
    selectGalleryData,
    selectGalleryDataLength,
    selectLoading,
    selectResult,
    selectTotalGalleryRecord,
    setResult,
} from './Gallery.slice';
import BannerVideo from '../../components/BannerVideo';
import CustomerReview from '../../components/CustomerReview';
// import LoadingCover from '../../components/LoadingCover';
import { Routes } from '../../navigation/Routes';
import Toast from '../../components/Toast';
import { selectTotalRating } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import { roundOff } from '../../utils/func';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const GallerySectionImgContent = ({ grid }: any) => {
    const [viewOriginalPainting, setViewOriginalPainting] = useState(false);
    const handlePainting = () => setViewOriginalPainting(!viewOriginalPainting);

    const data = useMemo(
        () => (
            <div className="gallery_image_box">
                <img
                    src={grid?.originalImage}
                    alt={grid?.originalImageAlt}
                    className={`galleryItem_imageOriginal ${viewOriginalPainting ? '' : 'image_visible'}`}
                />
                <img
                    src={grid?.paintedImage}
                    alt={grid?.paintedImageAlt}
                    className={`galleryItem_imageOriginal ${grid?.originalImage && grid?.paintedImage ? 'img_painting' : ''} ${
                        viewOriginalPainting ? 'image_visible' : ''
                    }`}
                />

                {grid?.originalImage && (
                    <>
                        <div className={`img_btn_bottom ${viewOriginalPainting ? 'btn_left' : ''}`}>
                            <FilledButton className="btn_view_photo" onClick={handlePainting}>
                                {viewOriginalPainting ? 'View Painting' : 'View Original Photo'}
                                <img src={Images.EyeIcon} alt="eyeIcon" />
                            </FilledButton>
                        </div>
                    </>
                )}
            </div>
        ),
        [viewOriginalPainting, grid],
    );

    return <>{data}</>;
};

const GallerySectionVideoContent = ({ grid }: any) => {
    const videoRef: any = useRef();
    const [videoRecord, setVideoRecord] = useState({ isPlay: false, desc: true });

    useEffect(() => {
        const { operation } = videoRef?.current?.getState();
        if (operation?.operation?.action === 'play') {
            setVideoRecord((prev) => ({ ...prev, desc: false }));
        }
    }, [videoRecord.isPlay]);

    return (
        <div
            className="gallery_video_box"
            onClick={() => setVideoRecord((prev) => ({ ...prev, isPlay: !videoRecord?.isPlay }))}
            tabIndex={0}
            role="button"
        >
            <BannerVideo bannerVideo={grid?.video} poster={grid?.videoThumbnail || ''} isVideoContent ref={videoRef} />
            {videoRecord.desc && (
                <div className="galleryItem_video">
                    <p className="content_video">{grid?.videoDesc}</p>
                </div>
            )}
        </div>
    );
};

const StaticContent = () => {
    const history = useRouter();
    const totalRating = useAppSelector(selectTotalRating);

    return (
        <div className="blog_content_box">
            <div className="inner_content">
                <div className="summary_content">
                    <div className="top-content">
                        <div className="left_content">
                            <h6>Only 20% deposit due now</h6>
                            <p>Remaining balance to be paid after painting approval</p>
                        </div>
                        <div className="right_content">
                            <h6 className="price">$68</h6>
                        </div>
                    </div>
                    <div className="summary_list">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Total</td>
                                    <td className="font-bold">$339</td>
                                </tr>
                                <tr>
                                    <td>Painting size</td>
                                    <td className="font-bold">16” x 20”</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="button_bottom" onClick={() => history.push(Routes.orderStep.replace(':id', '1'))} tabIndex={0} role="button">
                        <FilledButton className="button_get_start">Get Started</FilledButton>
                    </div>
                </div>
                <CustomerReview className="customer-single-review-block" title="Excellent Customer Reviews" rate={roundOff(totalRating)} />
            </div>
        </div>
    );
};

const GallerySection = ({ storeSelectedData, handleSelectData, placeholder }: any) => {
    // const param: { mediumId?: string; themeId?: string } = useParams();
    const param: any = {};
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const galleryData = useAppSelector(selectGalleryData);
    const path = pathname === Routes.galleryTheme.replace(':themeId', param?.themeId || '').replace(':mediumId', param?.mediumId || '');
    const filteredOptions = useAppSelector(selectFilteredOptions);

    const totalGalleryRecord = useAppSelector(selectTotalGalleryRecord);
    const error = useAppSelector(selectError);
    const loading = useAppSelector(selectLoading);
    const administratorDisabled = useAppSelector(selectAdministratorDisabled);
    const galleryDataLength = useAppSelector(selectGalleryDataLength);
    const result = useAppSelector(selectResult);

    const [showContinueBtn, setShowContinueBtn] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [initial, setInitial] = useState(false);

    useEffect(() => {
        // Scroll to top
        window.scrollTo(0, 0);
        setTimeout(() => {
            setInitial(true);
        }, 2000);
    }, []);

    useEffect(() => {
        if (administratorDisabled) setShow(true);
    }, [administratorDisabled]);

    useEffect(() => {
        const myObject = { static: true };

        if (galleryData?.length > 0) {
            const newArray = [...galleryData.slice(0, 8), myObject, ...galleryData.slice(8)];

            if (initial) {
                const totalData = galleryDataLength?.length <= totalGalleryRecord ? [...result, ...newArray] : galleryData;
                dispatch(setResult(totalData));
            }
        }
    }, [galleryData, initial, galleryDataLength]);

    useEffect(() => {
        (async () => {
            if (error) {
                dispatch(clearGalleryData());
            }
            setShowContinueBtn(!loading && (!error?.message || galleryDataLength?.length ? galleryDataLength?.length !== totalGalleryRecord : false));
        })();
    }, [error, loading, galleryDataLength?.length]);

    const handleMore = () => {
        handleSelectData?.((prev: any) => ({ ...prev, pageNumber: prev?.pageNumber + 1 }));
    };

    const handleChange = async (value: string) => {
        await dispatch(clearGalleryData());
        handleSelectData?.((prev: any) => ({ ...prev, selection: value, pageNumber: 1 }));
    };

    return (
        <>
            <div className="gallery_section">
                <div className="gallery_container">
                    <div className="gallery_top_header">
                        <h1 className="gallery_title">GALLERY</h1>
                        <div className="select_filter">
                            <Select
                                value={
                                    (storeSelectedData?.selection === 'all' ? undefined : storeSelectedData?.selection) ||
                                    filteredOptions?.find((filter: any) => filter.slug === param?.mediumId)?.name
                                }
                                suffixIcon={<FontAwesomeIcon icon={faAngleDown} size="lg" color="#E23473" />}
                                onChange={handleChange}
                                placeholder={placeholder}
                            >
                                <Select.Option value="all">All</Select.Option>
                                {filteredOptions?.map((opt: any) => (
                                    <Select.Option key={opt?.id} value={opt?.slug}>
                                        {opt?.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="gallery_masonry">
                        {result?.length ? (
                            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                                <Masonry columnsCount={3} gutter="54px">
                                    {result?.map((grid: any, index: any) => (
                                        <div className="custom-oil-paintings" key={index}>
                                            <div className="gallery_image_video_box">
                                                {!grid?.static || grid?.static === undefined ? (
                                                    <>
                                                        {!grid?.isVideo ? (
                                                            <GallerySectionImgContent grid={grid} />
                                                        ) : (
                                                            <GallerySectionVideoContent grid={grid} />
                                                        )}

                                                        <div className="galleryItem_info">
                                                            <h6 className="galleryItem_name">Painted for {grid?.userName || ''}</h6>
                                                            <p className="galleryItem_size">Size: {grid?.size}</p>
                                                            <div className="galleryItem_meta">
                                                                <div className="galleryItem_author">
                                                                    <img src={grid?.painterImage} alt="profile" />
                                                                    <span>By {grid?.painterFullName || ''}</span>
                                                                </div>
                                                                <div className="galleryItem_taxonomy">
                                                                    {path ? grid?.mediumName?.split(',')[0] : grid?.themeName?.split(',')[0]}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <StaticContent />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        ) : null}
                        {error?.message && <div className="no_record">No Records Found.</div>}
                        {showContinueBtn && (
                            <div className="p2p_loadMore" onClick={handleMore} tabIndex={0} role="button">
                                <FilledButton className="p2p_loadMore_button">Load More...</FilledButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {show && <Toast show={show} setShow={setShow} message={administratorDisabled?.message} type="error" showIcon />}
            {/* <LoadingCover show={loading} /> */}
        </>
    );
};

export default GallerySection;
