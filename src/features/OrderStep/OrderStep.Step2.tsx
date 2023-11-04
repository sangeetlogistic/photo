/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import { Checkbox, Col, Collapse, Input, Popover, Progress, Row } from 'antd';
import { useDropzone } from 'react-dropzone';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import { allowedFileExtensionsForSystemExtensions, validType } from '../../constants/fileTypeValidation';
import CustomerReview from '../../components/CustomerReview';
import { ImgStepUplaodCmp, OrderStep1InfoBlockCmp, OrderStep2Cmp } from './OrderPage.component';
import { Images } from '../../theme';
import { maxLengthForComments, multipleCombinePhotosPrice, OrderSteps } from './OrderStep.constants';
import { clearCreateFiles, clearError, OrderStep } from './OrderStep.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ModalCloseIcon } from '../../assets/customSVG';
import { awsImagePath, countingForMb, uploadDocumentSizeLimit } from '../../constants/general';
import { IStep2 } from './OrderStep.types';
import { s3ImageUpload } from '../../utils/s3Operations';
import { AWS_UPLOAD_URL, PUBLIC_URL } from '../../constants/predicates';
import { convertBrToN, isLocalStorageValid, roundOff } from '../../utils/func';
import { LocalStorageKeys } from '../../constants/keys';
import { useDeviceDetect, useLocalStorage } from '../../hooks';
import SavedCardPopup from './OrderPage.SavedCardPopup';
import MobileFooter from './OrderStep.MobileFooter';
import MobileStep2 from './OrderStep.MobileStep2';
import { MobileOrderPageMainCmp } from './OrderPage.MobileComponent';
import MobileHeader from './OrderStep.MobileHeader';
import Toast from '../../components/Toast';
import { selectTotalRating } from '../../services/API/GeneralSettings/GeneralSettings.slice';

const { Panel } = Collapse;
const { TextArea } = Input;

interface IFilesArray {
    isValid: boolean;
    files: Array<File> | undefined;
}

const contentCombinePhotos = (
    <>
        Please upload at least one photo of each subject you would like us to include in the painting. If you have special instructions, please write
        them at the text box when you upload your photos. We first combine all photos digitally into one photo and send for approval. Only after you
        approve the final digital photo, we pass it to the artist to create the actual painting.
    </>
);
const contentArtistAdvice = (
    <>
        Upload several photos and check the check-box underneath, and let our artists help you choose. We will not start the painting before we
        confirm with you the photo to be painted.
    </>
);
const contentArtistNotes = (
    <>
        <p>If you like our painters to do something else than painting exactly the photo that you uploaded, that is the place to ask for it.</p>
        <br />
        <p>
            People, animals or objects can be eliminated or added. Hair-style, backgrounds and clothing colors can be altered. Shadows can be removed.
            Our artists can merge images from different photos to make a single custom portrait
        </p>
    </>
);

const Step2 = ({
    showProgressBar,
    setShowProgressBar,
    preview,
    setPreview,
    setRepeatStep2,
    setCombinePhotoPrice,
    combinePhotoPrice,
    setInitLoad,
    setArtistAdvice,
    artistAdvice,
    setComments,
    comments,
    savedCardPopup,
    setSavedCardPopup,
    setSavedCardProccessComplete,
    complateStep2,
    complateStep3,
    complateStep4,
    repeatStep2,
    repeatStep3,
    repeatStep4,
    savedCardProccessComplete,
}: IStep2) => {
    const dispatch = useAppDispatch();
    const localStorage = useLocalStorage();
    const { isMobile } = useDeviceDetect();
    const totalRating = useAppSelector(selectTotalRating);

    const [uploadPhotoAns, setUploadPhotoAns] = useState(false);
    const [filesArray, setFilesArray] = useState<IFilesArray>({
        isValid: true,
        files: undefined,
    });
    const [progress, setProgress] = useState<number>(0);
    const [isDragOverEvent, setIsDragOverEvent] = useState(false);
    const [toastMsgWithType, setToastMsgWithType] = useState({
        isShow: false,
        isError: true,
        message: '',
    });

    let intervalProgress: any;

    const clearToastMessage = () => {
        setToastMsgWithType((preveInfo) => ({
            ...preveInfo,
            isShow: false,
            message: '',
        }));
    };

    const checkFileLengthValidation = () => {
        if (preview?.length >= 5) {
            setToastMsgWithType((preveInfo) => {
                if (!preveInfo.isShow) {
                    return {
                        isShow: true,
                        isError: true,
                        message: 'Maximum 5 documents allowed.',
                    };
                }
                return preveInfo;
            });
            return false;
        }
        return true;
    };
    const checkFileSizeValidation = (uploadedFile: Array<File>) => {
        const fileSizeValidation = _.map(uploadedFile, (file: File) => {
            if (file.size === 0) {
                setToastMsgWithType((preveInfo) => {
                    if (!preveInfo.isShow) {
                        return {
                            isShow: true,
                            isError: true,
                            message: 'Files must be greater than 0 bytes',
                        };
                    }
                    return preveInfo;
                });
            }
            return file.size !== 0 && file.size / countingForMb / countingForMb <= uploadDocumentSizeLimit;
        });
        if (!_.every(fileSizeValidation, (value: boolean) => value === true)) {
            setToastMsgWithType((preveInfo) => {
                if (!preveInfo.isShow) {
                    return {
                        isShow: true,
                        isError: true,
                        message: `Max image size is ${uploadDocumentSizeLimit}MB.`,
                    };
                }
                return preveInfo;
            });
            return false;
        }
        return true;
    };

    const checkFileTypeValidation = (uploadedFile: Array<File>) => {
        const fileTypeValidation = _.map(uploadedFile, (file: File) => validType.includes(file.type));
        if (!_.every(fileTypeValidation, (value: boolean) => value === true)) {
            setToastMsgWithType((preveInfo) => {
                if (!preveInfo.isShow) {
                    return {
                        isShow: true,
                        isError: true,
                        message: 'Upload failed. Document type not supported.',
                    };
                }
                return preveInfo;
            });
            return false;
        }
        return true;
    };

    const clearAllFiles = () => {
        dispatch(clearCreateFiles());
        setPreview([]);
    };

    const removeImage = (id: number) => {
        const tempVar = preview;
        const newArray: any = [];
        tempVar.map(async (uploadDoducment: any, index: any) => {
            if (index !== id) {
                newArray[index] = uploadDoducment;
            }
        });
        setPreview(newArray.filter((item: any) => item !== null));
    };

    const handleCombinePhoto = (e: CheckboxChangeEvent) => {
        setCombinePhotoPrice(e.target.checked ? e.target.value : undefined);
    };

    const handleArtistAdvice = (e: CheckboxChangeEvent) => {
        setArtistAdvice?.(e.target.checked);
    };

    const handleComments = (e: any) => {
        const content = convertBrToN(e.target.value);
        setComments?.(content || '');
    };

    useEffect(() => {
        (async () => {
            if (filesArray.files !== undefined) {
                if (checkFileLengthValidation()) {
                    if (checkFileSizeValidation(filesArray.files)) {
                        if (checkFileTypeValidation(filesArray.files)) {
                            try {
                                setShowProgressBar(true);
                                setProgress(0);
                                const res: any = await s3ImageUpload(filesArray.files[0]);
                                if (res.status === 201) {
                                    const imageUrl = res.data.Location.replace(AWS_UPLOAD_URL, PUBLIC_URL);
                                    const imageName = imageUrl.split(`${PUBLIC_URL}${awsImagePath}`);

                                    await setPreview([...preview, { url: imageUrl, name: imageName[1] }]);
                                }
                            } catch (error) {
                                setShowProgressBar(false);
                                setToastMsgWithType((preveInfo) => {
                                    if (!preveInfo.isShow) {
                                        return {
                                            isShow: true,
                                            isError: true,
                                            message: 'something went wrong, please try again',
                                        };
                                    }
                                    return preveInfo;
                                });
                            }
                        }
                    }
                }
            }
        })();
    }, [filesArray]);

    useEffect(() => {
        dispatch(OrderStep(OrderSteps.step2));
        setRepeatStep2(false);

        if (isLocalStorageValid(LocalStorageKeys.savedCardProccessComplete)) {
            const data: any = localStorage?.getItem(LocalStorageKeys.savedCardProccessComplete)
                ? JSON.parse(localStorage?.getItem(LocalStorageKeys.savedCardProccessComplete) || '')
                : '';

            setSavedCardProccessComplete?.(data?.data);
        } else {
            localStorage?.removeItem(LocalStorageKeys.savedCardProccessComplete);
            localStorage?.removeItem(LocalStorageKeys.savedCardDetail);
        }

        intervalProgress = setInterval(() => {
            setProgress((prev) => (prev + 1 < 100 ? prev + 1 : 100));
        }, 10);

        return () => {
            setRepeatStep2(true);
            clearInterval(intervalProgress);
            dispatch(clearError());
            clearToastMessage();
        };
    }, []);

    useEffect(() => {
        if (progress === 100 && preview?.length > 0) {
            clearInterval(intervalProgress);
            setTimeout(() => {
                setShowProgressBar(false);
            }, 1000);
        }
    }, [progress, preview]);

    const dropRejectHandler = () => {
        setFilesArray({ isValid: false, files: undefined });
        setToastMsgWithType((preveInfo) => {
            if (!preveInfo.isShow) {
                return {
                    isShow: true,
                    isError: true,
                    message: 'Upload failed. Document type not supported.',
                };
            }
            return preveInfo;
        });
    };
    const dropAcceptHandler = (files: Array<File>) => {
        if (files) {
            setFilesArray((previousStatus: IFilesArray) => {
                if (previousStatus.isValid) {
                    return { ...previousStatus, files };
                }
                return previousStatus;
            });
        }
    };

    const dropDocumentHandler = () => {
        setIsDragOverEvent(false);
    };
    const dragOverHandler = () => {
        setIsDragOverEvent(true);
    };
    const dragLeaveHandler = () => {
        setIsDragOverEvent(false);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: dropDocumentHandler,
        onDragEnter: dragOverHandler,
        onDragLeave: dragLeaveHandler,
        onDropRejected: dropRejectHandler,
        onDropAccepted: dropAcceptHandler,
        accept: allowedFileExtensionsForSystemExtensions,
        multiple: false,
    });

    return (
        <>
            {toastMsgWithType.isShow && (
                <Toast
                    show={toastMsgWithType.isShow}
                    setShow={clearToastMessage}
                    message={toastMsgWithType.message}
                    type={toastMsgWithType.isError ? 'error' : 'success'}
                    showIcon
                />
            )}
            {!isMobile ? (
                <OrderStep2Cmp className="order-inner-block step-2">
                    <Row className="step-2-row" justify="space-around" gutter={{ sm: 16, md: 24, lg: 48 }}>
                        <Col className="gutter-row" md={10} xl={5}>
                            <div className="upload-col-1-inner">
                                <h4 className="upload-title">
                                    Upload Photo(s){' '}
                                    <span onClick={() => setUploadPhotoAns(true)} tabIndex={0} role="button" className="que-icon que-icon-cursor">
                                        ?
                                    </span>
                                </h4>
                                {uploadPhotoAns && (
                                    <div className="theme-dialog active">
                                        <span className="icon-close" onClick={() => setUploadPhotoAns(false)} tabIndex={0} role="button">
                                            <ModalCloseIcon />
                                        </span>
                                        <p>This is the photo that our artists will turn into a painting.</p>
                                        <p>
                                            The most important aspect of the image is to have very clear features in the faces of the subject or
                                            strong detail in the pet or landscape photo.
                                        </p>
                                        <p>
                                            For people, our artists like to see the entire face, eye color, and hairstyle. If your photo is not in a
                                            digital format (but a hard copy photo), you can scan the photo at home or in a photo shop.
                                        </p>
                                    </div>
                                )}
                                <p className="question-upload-desc">Add the photo(s) you would like to be painted</p>
                                <Collapse
                                    className="order-faq"
                                    bordered={false}
                                    expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
                                >
                                    <Panel className="heading-title" header="Other ways to send us your photo(s)" key="1">
                                        <p>If you don’t have your photo(s) on this device, finish your order and send your photo(s) to</p>
                                        <p className="text-center">
                                            <a href="mailto:info@photo2painting.com" className="fw-bold">
                                                Info@photo2painting.com
                                            </a>
                                        </p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </Col>
                        <Col className="gutter-row" md={14} xl={10}>
                            <div className="img-upload-block">
                                <ImgStepUplaodCmp>
                                    {showProgressBar && (
                                        <Progress
                                            percent={progress}
                                            className="step2-img-upload-progress-bar"
                                            showInfo={false}
                                            style={{
                                                transition: 'all 0.3s ease',
                                            }}
                                        />
                                    )}
                                    <div className="img-upload-files-info-block">
                                        {!showProgressBar && preview.length > 0 && (
                                            <div className="img-upload-files-info">
                                                <span className="text-upload-img">{`${preview.length} Image${preview.length === 1 ? '' : 's'}`}</span>
                                                <i className="icon" onClick={clearAllFiles}>
                                                    <ModalCloseIcon />
                                                </i>
                                            </div>
                                        )}
                                        {!showProgressBar && (
                                            <div
                                                {...getRootProps({
                                                    onClick: (evt) => evt.preventDefault(),
                                                })}
                                                role="button"
                                                aria-hidden
                                                className={`img-upload-files ${isDragOverEvent ? 'on-drag' : ''}`}
                                            >
                                                <label className="step-upload-label" htmlFor="step2UploadPic">
                                                    <input className="step-upload-input" id="step2UploadPic" {...getInputProps()} />
                                                    <span className="">
                                                        {preview.length > 0 ? 'upload more' : 'Drag or click to upload photo(s)'}
                                                    </span>
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                    <div className={`image-upload-files-attachments-block ${preview.length > 0 ? 'image-height' : ''}`}>
                                        {preview.length
                                            ? preview.map((img: any, index: number) => (
                                                  <div className="files-attachment-img-outer" key={index}>
                                                      <figure className="files-attachment-img">
                                                          <span className="icon" onClick={() => removeImage(index)}>
                                                              <ModalCloseIcon />
                                                          </span>
                                                          <img src={img.url} key={index} alt="" width="100%" height="100%" />
                                                      </figure>
                                                  </div>
                                              ))
                                            : null}
                                    </div>

                                    <div className="checkobx-label-wrap" id="ImgUploadCheckBox1">
                                        {' '}
                                        <Checkbox
                                            onChange={handleCombinePhoto}
                                            value={multipleCombinePhotosPrice}
                                            checked={combinePhotoPrice === multipleCombinePhotosPrice}
                                        ></Checkbox>
                                        <div className="content d-flex">
                                            Combine multiple photos to create one Painting &nbsp;
                                            <span className="text-primary fw-bold">(+ ${`${multipleCombinePhotosPrice}`})</span>
                                            <Popover
                                                trigger="hover"
                                                content={contentCombinePhotos}
                                                arrowPointAtCenter={false}
                                                overlayClassName="order-step-tooltip"
                                                showArrow={false}
                                            >
                                                <span className="que-icon">?</span>
                                            </Popover>
                                        </div>
                                    </div>
                                    <div className="checkobx-label-wrap" id="ImgUploadCheckBox2">
                                        {' '}
                                        <Checkbox id="ImgUploadCheckBox2" onChange={handleArtistAdvice} checked={artistAdvice}></Checkbox>
                                        <div className="content d-flex">
                                            The Artist’s advice on which photo(s) will be best for my painting
                                            <Popover
                                                content={contentArtistAdvice}
                                                arrowPointAtCenter={false}
                                                overlayClassName="order-step-tooltip tooltip-artist-advice"
                                                showArrow={false}
                                            >
                                                <span className="que-icon">?</span>
                                            </Popover>
                                        </div>
                                    </div>
                                </ImgStepUplaodCmp>
                                <div className="img-upload-notes">
                                    <label htmlFor="ImgUploadNotes" id="ImgUploadNotes">
                                        ADD NOTES TO ARTIST (OPTIONAL)
                                        <Popover
                                            content={contentArtistNotes}
                                            arrowPointAtCenter={false}
                                            overlayClassName="order-step-tooltip tooltip-add-notes"
                                            showArrow={false}
                                        >
                                            <span className="que-icon">?</span>
                                        </Popover>
                                    </label>

                                    <TextArea
                                        id="ImgUploadNotes"
                                        rows={4}
                                        className="img-upload-textarea"
                                        placeholder="Enter Your Note Here"
                                        maxLength={maxLengthForComments}
                                        value={convertBrToN(comments)}
                                        onChange={handleComments}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col className="gutter-row" md={24} xl={6}>
                            <OrderStep1InfoBlockCmp className="order-step-1-info-block">
                                <Row gutter={{ sm: 16, md: 24, lg: 48 }}>
                                    <Col md={10} xl={24}>
                                        <div className="info-custom-card">
                                            <h4 className="info-icons-title">DID YOU KNOW?</h4>
                                            <p className="info-upload-description ">
                                                You don’t need to have the exact photo of the final portrait, that you’d like us to paint. We can
                                                combine several photos into a single portrait! We will show you a draft before we start the actual
                                                painting.
                                            </p>
                                            <img src={Images.ImgInfoUpload?.src} alt="" className="infoUpload-img" width="157" height="68" />
                                        </div>
                                    </Col>
                                    <Col md={14} xl={24} className="info-step-customer-review">
                                        <CustomerReview
                                            className="customer-single-review-block"
                                            title="Excellent Customer Reviews"
                                            rate={roundOff(totalRating)}
                                        />
                                    </Col>
                                </Row>
                            </OrderStep1InfoBlockCmp>
                        </Col>
                    </Row>
                </OrderStep2Cmp>
            ) : (
                <MobileOrderPageMainCmp>
                    <MobileHeader
                        complateStep2={complateStep2}
                        complateStep3={complateStep3}
                        complateStep4={complateStep4}
                        repeatStep2={repeatStep2}
                        repeatStep3={repeatStep3}
                        repeatStep4={repeatStep4}
                    />
                    <MobileStep2
                        showProgressBar={showProgressBar}
                        setShowProgressBar={setShowProgressBar}
                        preview={preview}
                        setPreview={setPreview}
                        setRepeatStep2={setRepeatStep2}
                        setCombinePhotoPrice={setCombinePhotoPrice}
                        combinePhotoPrice={combinePhotoPrice}
                        setInitLoad={setInitLoad}
                        setArtistAdvice={setArtistAdvice}
                        artistAdvice={artistAdvice}
                        setComments={setComments}
                        comments={comments}
                        savedCardPopup={savedCardPopup}
                        setSavedCardPopup={setSavedCardPopup}
                        setSavedCardProccessComplete={setSavedCardProccessComplete}
                        progress={progress}
                        clearAllFiles={clearAllFiles}
                        getRootProps={getRootProps}
                        getInputProps={getInputProps}
                        isDragOverEvent={isDragOverEvent}
                        removeImage={removeImage}
                        handleCombinePhoto={handleCombinePhoto}
                        handleArtistAdvice={handleArtistAdvice}
                        handleComments={handleComments}
                    />
                    <MobileFooter
                        showProgressBar={showProgressBar}
                        savedCardProccessComplete={savedCardProccessComplete}
                        setSavedCardPopup={setSavedCardPopup}
                    />
                </MobileOrderPageMainCmp>
            )}

            <SavedCardPopup
                savedCardPopup={savedCardPopup}
                setSavedCardPopup={setSavedCardPopup}
                setSavedCardProccessComplete={setSavedCardProccessComplete}
            />
        </>
    );
};

export default Step2;
