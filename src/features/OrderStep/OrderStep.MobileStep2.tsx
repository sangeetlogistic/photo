/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Checkbox, Input, Popover, Progress } from 'antd';

import { ImgStepUplaodCmp, OrderStep2Cmp } from './OrderPage.component';
import { maxLengthForComments, multipleCombinePhotosPrice } from './OrderStep.constants';

import { ModalCloseIcon } from '../../assets/customSVG';

import { Images } from '../../theme';
import SavedCardPopup from './OrderPage.SavedCardPopup';
import { convertBrToN } from '../../utils/func';

const { TextArea } = Input;

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

const MobileStep2 = ({
    showProgressBar,
    preview,
    combinePhotoPrice,
    savedCardPopup,
    setSavedCardPopup,
    setSavedCardProccessComplete,
    progress,
    clearAllFiles,
    getRootProps,
    getInputProps,
    isDragOverEvent,
    removeImage,
    handleCombinePhoto,
    handleArtistAdvice,
    handleComments,
    comments,
    artistAdvice,
}: any) => (
    <OrderStep2Cmp className="mobile-order-inner-block step-2">
        <div className="upload-col-1-inner">
            <h4 className="upload-title mobile-title text-center">Upload Photo(s) </h4>

            <p className="question-upload-desc">Add the photo(s) you would like to be painted</p>
        </div>

        <div className="img-upload-block">
            <ImgStepUplaodCmp className="mobile-img-upload-block">
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
                            <i className="icon" onClick={clearAllFiles}>
                                <ModalCloseIcon />
                            </i>
                            <span className="text-upload-img">{`${preview.length} Image${preview.length === 1 ? '' : 's'}`}</span>
                        </div>
                    )}
                    {!showProgressBar && (
                        <div
                            {...getRootProps({
                                onClick: (evt: any) => evt.preventDefault(),
                            })}
                            role="button"
                            aria-hidden
                            className={`img-upload-files ${isDragOverEvent ? 'on-drag' : ''}`}
                        >
                            <label className="step-upload-label" htmlFor="step2UploadPic">
                                <input className="step-upload-input" id="step2UploadPic" {...getInputProps()} />
                                <span className="">
                                    <i className="">
                                        <img src={Images.IconOrderStepImgUpload} alt="" className="" />
                                    </i>
                                    {preview.length > 0 ? 'upload more' : 'Upload image'}
                                </span>
                            </label>
                        </div>
                    )}
                </div>
                <div className={`image-upload-files-attachments-block ${progress ? 'image-height' : ''}`}>
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
                {!preview?.length && (
                    <div className="mob-note">
                        <p className="">
                            If you don’t have your photo(s) on this device, finish your order and send your photo(s) to{' '}
                            <a href="mailto:Info@photo2painting.com" className="">
                                Info@photo2painting.com
                            </a>
                        </p>
                    </div>
                )}
                <div className="checkobx-label-wrap" id="ImgUploadCheckBox1">
                    <Checkbox
                        onChange={handleCombinePhoto}
                        value={multipleCombinePhotosPrice}
                        checked={combinePhotoPrice === multipleCombinePhotosPrice}
                    ></Checkbox>
                    <div className="content d-flex">
                        <div>
                            Combine multiple photos to create one Painting &nbsp;
                            <span className="text-primary fw-bold">(+ ${`${multipleCombinePhotosPrice}`})</span>
                        </div>
                        <Popover
                            trigger="click"
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
                            trigger="click"
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

        <SavedCardPopup
            savedCardPopup={savedCardPopup}
            setSavedCardPopup={setSavedCardPopup}
            setSavedCardProccessComplete={setSavedCardProccessComplete}
        />
    </OrderStep2Cmp>
);

export default MobileStep2;
