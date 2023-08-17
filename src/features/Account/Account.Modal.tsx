/* eslint-disable no-nested-ternary */
import React, { useMemo, useState } from 'react';
import Magnifier from 'react-magnifier';
import { Col, Input, Row } from 'antd';
import { Images } from '../../theme';

import FilledButton from '../../components/FilledButton';
import { AccountReviewModalCmp } from './Account.component';
import LazyImage from '../../components/LazyImage';

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

    const approvePhotoPopupContent = useMemo(
        () => (
            <div className={`account-review-modal-data-block ${className || ''}`}>
                <div className="account-magnifier-block">
                    {!originalViewImg ? (
                        <>
                            {openMagnifire ? (
                                <Magnifier src={openPopup.editedImage} mgShape="square" />
                            ) : (
                                <div className="magnifier">
                                    <LazyImage src={openPopup.editedImage} alt="" effect="opacity" />
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="magnifier">
                            <LazyImage src={openPopup.originalImage} alt="" effect="opacity" />
                        </div>
                    )}
                    <div className="buttons_bottom">
                        <FilledButton className="btn_view_photo" onClick={() => setOriginalViewImg(!originalViewImg)}>
                            {!originalViewImg ? 'View Original Photo' : 'View The Photo Edit'} <img src={Images.EyeIcon} alt="eyicon" />{' '}
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
                            <Row gutter={34} className="account-edit-comment-row">
                                <Col xs={24} md={14} className="gutter-row">
                                    <p className="label-text">Add your comments for editing</p>
                                    <Input.TextArea
                                        className="form-control-area"
                                        placeholder="Enter Your Note here"
                                        onChange={(e) => handleCustomerNote(e.target.value)}
                                    />
                                </Col>
                                <Col xs={24} md={10} className="gutter-row btn-row">
                                    <Row gutter={16} wrap={false} className="account-edit-comment-row">
                                        <Col className="gutter-row">
                                            <FilledButton color="grayLight" onClick={modificationBtnClick} block>
                                                Back
                                            </FilledButton>
                                        </Col>
                                        <Col className="gutter-row">
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

    return (
        <>
            <AccountReviewModalCmp onCancel={onCancel} open={openPopup.open} closable={false} content={approvePhotoPopupContent} />
        </>
    );
};

export default AccoutReviewModal;
