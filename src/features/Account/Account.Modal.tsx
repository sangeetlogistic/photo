/* eslint-disable no-nested-ternary */
import React, { useMemo, useState } from 'react';
import Magnifier from 'react-magnifier';
import { Col, Input, Row } from 'antd';

import { Images } from '../../theme';
import FilledButton from '../../components/FilledButton';
import { AccountReviewModalCmp } from './Account.component';

const AccoutReviewModal = ({
    onCancel,
    openPopup,
    content,
    modificationBtn,
    approveBtn,
    modificationBtnClick,
    modificationBtnAction,
    approveBtnAction,
    paymentBtn,
    paymentBtnAction,
    approvedPara,
    modificationReqAcceptPara,
    className,
    handleCustomerNote,
}: any) => {
    const [originalViewImg, setOriginalViewImg] = useState(false);
    const [openMagnifire, setOpenMagnifire] = useState(false);

    const statusWiseContent = useMemo(() => (openPopup <= 3 ? 'Photo' : 'Paiting'), [openPopup?.status]);

    const approvePhotoPopupContent = useMemo(
        () => (
            <div className={`account-review-modal-data-block ${className || ''}`}>
                <div className="account-magnifier-block">
                    {!originalViewImg ? (
                        <>
                            {openMagnifire ? (
                                <Magnifier src={openPopup.editedImage} mgShape="square" />
                            ) : (
                                <div className="magnifier img-length">
                                    <span className="lazy-load-image-loaded ">
                                        <img src={openPopup.editedImage} alt="" className="" />
                                    </span>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="magnifier img-length">
                            <span className="lazy-load-image-loaded ">
                                <img src={openPopup.originalImage} alt="" className="" />
                            </span>
                        </div>
                    )}
                    <div className="buttons_bottom">
                        <FilledButton className="btn_view_photo" onClick={() => setOriginalViewImg(!originalViewImg)}>
                            {!originalViewImg ? `View Original ${statusWiseContent}` : `View The ${statusWiseContent} Edit`}{' '}
                            <img src={Images.EyeIcon?.src} alt="eyicon" />{' '}
                        </FilledButton>
                        {!originalViewImg && (
                            <FilledButton className="btn_view_photo" onClick={() => setOpenMagnifire(!openMagnifire)}>
                                {!openMagnifire ? 'Zoom On' : 'Zoom Off'}{' '}
                            </FilledButton>
                        )}
                    </div>
                </div>
                {!openPopup.remainingPayment && <div className="account-modal-review-text">{content}</div>}
                {!openPopup.modificationApprove && !openPopup.remainingPayment ? (
                    <>
                        {!openPopup?.modification ? (
                            <div className="account-2-btn-row">
                                <FilledButton className="btn-ask-modification" onClick={modificationBtnClick}>
                                    {modificationBtn}
                                </FilledButton>
                                <FilledButton onClick={approveBtnAction}>{approveBtn}</FilledButton>
                            </div>
                        ) : (
                            <Row gutter={{ md: 20 }} className="account-edit-comment-row">
                                <Col xs={24} md={13} className="gutter-row">
                                    <p className="label-text">Add your comments for editing</p>
                                    <Input.TextArea
                                        className="form-control-area"
                                        placeholder="Enter Your Note here"
                                        onChange={(e) => handleCustomerNote(e.target.value)}
                                    />
                                </Col>
                                <Col xs={24} md={11} className="gutter-row btn-row px-0">
                                    <Row gutter={{ md: 10 }}>
                                        <Col xs={24} md={8} className="gutter-row button-top">
                                            <FilledButton color="grayLight" onClick={modificationBtnClick} block>
                                                Back
                                            </FilledButton>
                                        </Col>
                                        <Col xs={24} md={16} className="gutter-row button-top">
                                            <FilledButton onClick={modificationBtnAction} block>
                                                {modificationBtn}
                                            </FilledButton>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )}
                    </>
                ) : openPopup.modificationApprove ? (
                    <>
                        <div className="approved-row">
                            <h5 className="title">{modificationReqAcceptPara}</h5>
                        </div>
                    </>
                ) : (
                    <div className="approved-row">
                        <h5 className="title">{approvedPara}</h5>
                        {paymentBtn && <FilledButton onClick={paymentBtnAction}>{paymentBtn}</FilledButton>}
                    </div>
                )}
            </div>
        ),
        [openPopup, originalViewImg, openMagnifire],
    );

    return <AccountReviewModalCmp onCancel={onCancel} open={openPopup.open} closable={false} content={approvePhotoPopupContent} />;
};

export default AccoutReviewModal;
