/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Button } from 'antd';
import _ from 'lodash';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import FilledButton from '../../components/FilledButton';
import { Images } from '../../theme';
import { AccountOrderBlock, HelpIcon, PostUnBoxingVideoBlock } from './Account.component';
import { getMyOrderAction, selectedMyOrderData, selectedUserData, updateStatusAction } from './Account.slice';
import { awsImagePath, dateFormat } from '../../constants/general';
import { PUBLIC_URL } from '../../constants/predicates';
import AccoutReviewModal from './Account.Modal';
import ViewOrderDetailPopup from './Account.ViewOrderDetailPopup';
import { getStatusValue } from './Accout.constants';
import ShippingAddressPopup from './Account.ShippingAddressPopup';
import ThankyouPopup from './Account.ThankyouPopup';
import LazyImage from '../../components/LazyImage';

const MyOrder = () => {
    const dispatch = useAppDispatch();

    const myOrderData = useAppSelector(selectedMyOrderData);
    const userData = useAppSelector(selectedUserData);

    const [updatedOrderDataWithImage, setupdatedOrderDataWithImage] = useState([]);
    const [approvePhotoPopup, setApprovePhotoPopup] = useState({
        open: false,
        modification: false,
        modificationApprove: false,
        remainingPayment: false,
        id: null,
        customerNote: '',
        editedImage: '',
        originalImage: '',
    });
    const [approvePaintingPopup, setApprovePaintingPopup] = useState({
        open: false,
        modification: false,
        remainingPayment: false,
        modificationApprove: false,
        id: null,
        customerNote: '',
        editedImage: '',
        originalImage: '',
        remainingAmount: null,
    });
    const [viewOrderDetailPopup, setViewOrderDetailPopup] = useState<{
        open: boolean;
        storeId: null | number;
        individualOrderData: any;
    }>({
        open: false,
        storeId: null,
        individualOrderData: null,
    });
    const [paymentPopup, setPaymentPopup] = useState<{
        open: boolean;
        id: null | number;
        remainingAmount: null | number;
    }>({ open: false, id: null, remainingAmount: null });
    const [thankyouPopup, setThankyouPopup] = useState(false);

    useEffect(() => {
        if (viewOrderDetailPopup.open && viewOrderDetailPopup.storeId) {
            const element = updatedOrderDataWithImage.find((item: any) => item.id === viewOrderDetailPopup.storeId);
            setViewOrderDetailPopup((prevState) => ({
                ...prevState,
                individualOrderData: element,
            }));
        }
    }, [viewOrderDetailPopup.open]);

    useEffect(() => {
        const updatedData =
            myOrderData?.length &&
            myOrderData?.map((obj: any) => {
                const image = obj?.ImageURL ? obj?.ImageURL?.split(',') : [];

                const updateImage = image.map((img: any) => (img?.length > 0 ? `${PUBLIC_URL}${awsImagePath}${img}` : null));

                const updateImageWithoutNullish = _.remove(updateImage, (data: any) => data !== null);

                return { ...obj, ImageURL: updateImageWithoutNullish };
            });

        setupdatedOrderDataWithImage(updatedData);
    }, [myOrderData]);

    const modificationBtnAction = async () => {
        let payload;
        if (approvePhotoPopup.open) {
            payload = {
                orderId: approvePhotoPopup.id,
                orderstatus: 4,
                customerNote: approvePhotoPopup.customerNote,
            };
        } else if (approvePaintingPopup.open) {
            payload = {
                orderId: approvePaintingPopup.id,
                orderstatus: 7,
                customerNote: approvePaintingPopup.customerNote,
            };
        }
        const result = await dispatch(updateStatusAction(payload));
        if (result.type === updateStatusAction.fulfilled.toString()) {
            if (approvePhotoPopup.open) {
                setApprovePhotoPopup((prevState) => ({
                    ...prevState,
                    modificationApprove: true,
                }));
            } else if (approvePaintingPopup.open) {
                setApprovePaintingPopup((prevState) => ({
                    ...prevState,
                    modificationApprove: true,
                    modification: false,
                }));
            }
            dispatch(getMyOrderAction());
        }
    };

    const approveBtnAction = async () => {
        let payload;
        if (approvePhotoPopup.open) {
            payload = {
                orderId: approvePhotoPopup.id,
                orderstatus: 5,
                customerNote: approvePhotoPopup.customerNote,
            };
        } else if (approvePaintingPopup.open) {
            payload = {
                orderId: approvePaintingPopup.id,
                orderstatus: 8,
                customerNote: approvePaintingPopup.customerNote,
            };
        }

        const result = await dispatch(updateStatusAction(payload));

        if (result.type === updateStatusAction.fulfilled.toString()) {
            if (approvePhotoPopup.open) {
                setApprovePhotoPopup((prevState) => ({
                    ...prevState,
                    remainingPayment: true,
                }));
            } else if (approvePaintingPopup.open) {
                setApprovePaintingPopup((prevState) => ({
                    ...prevState,
                    remainingPayment: true,
                }));
            }
            dispatch(getMyOrderAction());
        }
    };

    const handleCustomerNote = (data: any) => {
        if (approvePhotoPopup.open) {
            setApprovePhotoPopup((prevState) => ({
                ...prevState,
                customerNote: data,
            }));
        }
        if (approvePaintingPopup.open) {
            setApprovePaintingPopup((prevState) => ({
                ...prevState,
                customerNote: data,
            }));
        }
    };

    const handlePaymentAction = async () => {
        await setApprovePaintingPopup((prevState) => ({
            ...prevState,
            open: false,
        }));

        setPaymentPopup({
            open: true,
            id: approvePaintingPopup.id,
            remainingAmount: approvePaintingPopup.remainingAmount,
        });
    };

    return (
        <>
            <div className="account-order-wrap">
                {updatedOrderDataWithImage
                    ? updatedOrderDataWithImage?.length > 0 &&
                      updatedOrderDataWithImage?.map((orderData: any) => (
                          <AccountOrderBlock className="account-order-block" key={orderData?.id}>
                              <div className="account-order-row">
                                  <div className="product-img">
                                      <figure
                                          className="product-img-inner"
                                          onClick={() => {
                                              if (orderData?.status === '3') {
                                                  setApprovePhotoPopup((prevState) => ({
                                                      ...prevState,
                                                      open: true,
                                                      id: orderData.OrderId,
                                                      editedImage: orderData.editedPhotoRecord?.editedImage,
                                                      originalImage: orderData.ImageURL[0],
                                                  }));
                                              } else if (orderData?.status === '6') {
                                                  setApprovePaintingPopup((prevState) => ({
                                                      ...prevState,
                                                      open: true,
                                                      id: orderData.OrderId,
                                                      editedImage: orderData.editedpaintedRecord?.editedPaiting,
                                                      originalImage: orderData.ImageURL[0],
                                                      remainingAmount: orderData.remaining_amount,
                                                  }));
                                              }
                                          }}
                                      >
                                          {orderData?.ImageURL?.length > 1 && <span className="prod-number">+{orderData?.ImageURL?.length}</span>}
                                          {orderData?.ImageURL?.length > 0 ? (
                                              orderData?.ImageURL?.map((img: any, index: number) => (
                                                  <LazyImage src={img} alt="" className="" key={index} />
                                              ))
                                          ) : (
                                              <LazyImage src={Images.DefaultProductImg} alt="" className="" />
                                          )}
                                      </figure>
                                  </div>
                                  <div className="account-order-content">
                                      <div className="acc-ord-cmn-block acc-ord-numb-block">
                                          <div className="title-block ">
                                              <span className="clr-gray">Order Number:</span>
                                              {orderData?.trackNumber}
                                          </div>
                                          <div className="d-flex">
                                              <div className="clr-gray me-3">Creation date:</div>
                                              <div className="value">{moment(orderData?.createdAt).format(dateFormat)}</div>
                                          </div>
                                          <div className="d-flex mt-3">
                                              <div className="clr-gray me-1">Status:</div>
                                              <div className="value d-flex">
                                                  <span className="badge"> {getStatusValue(orderData?.status)} </span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="acc-ord-cmn-block  acc-ord-detail-block">
                                          <div className="title-block ">Order Details</div>
                                          <div className="inner-row">
                                              <div className="clr-gray label">Medium:</div>
                                              <div className="value">{orderData?.mediumName}</div>
                                          </div>
                                          <div className="inner-row">
                                              <div className="clr-gray label">Theme:</div>
                                              <div className="value d-flex">{orderData?.themeName1}</div>
                                          </div>
                                          <div className="inner-row">
                                              <div className="clr-gray label">Size:</div>
                                              <div className="value d-flex">{orderData?.sizeInText}</div>
                                          </div>
                                          <div className="inner-row">
                                              <Button
                                                  type="link"
                                                  className="view-more-link"
                                                  onClick={() =>
                                                      setViewOrderDetailPopup((prevState) => ({
                                                          ...prevState,
                                                          storeId: orderData.id,
                                                          open: true,
                                                      }))
                                                  }
                                              >
                                                  View more..
                                              </Button>
                                          </div>
                                      </div>
                                      <div className="acc-ord-cmn-block  order-shipping">
                                          <div className="title-block ">Shipping Details</div>
                                          <div className="inner-row">
                                              <div className="clr-gray label">Name:</div>
                                              <div className="value">
                                                  {userData?.name || ''} {userData?.surname || ''}
                                              </div>
                                          </div>
                                          <div className="inner-row">
                                              <div className="clr-gray label">Number:</div>
                                              <div className="value d-flex">
                                                  +{userData?.countryCode} {userData?.phoneNumber}
                                              </div>
                                          </div>
                                          <div className="inner-row">
                                              <div className="clr-gray label">Email:</div>
                                              <div className="value d-flex">{userData?.email}</div>
                                          </div>
                                          <div className="inner-row">
                                              <Button
                                                  type="link"
                                                  className="view-more-link"
                                                  onClick={() =>
                                                      setViewOrderDetailPopup((prevState) => ({
                                                          ...prevState,
                                                          storeId: orderData.id,
                                                          open: true,
                                                      }))
                                                  }
                                              >
                                                  View more..
                                              </Button>
                                          </div>
                                      </div>
                                      <div className="acc-ord-cmn-block  order-finance">
                                          <div className="title-block ">Financial Summary</div>
                                          <div className="finance-block">
                                              <div className="finance-inner-block ">
                                                  <div className="clr-gray label">{orderData?.initial_payment_percentage} % paid:</div>
                                                  <div className="value">{orderData?.initial_payment_amount} $</div>
                                              </div>
                                              <div className="finance-inner-block ">
                                                  <div className="clr-gray label">Coupon Code:</div>
                                                  <div className="value text-success">
                                                      {orderData?.used_coupon_code_percentage ? orderData?.used_coupon_code_name : 'Not Applied'}
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="finance-btn-row">
                                              <Button
                                                  type="link"
                                                  className={`coupan-code-block ${orderData?.status !== '8' ? 'coupan-code-block-btn-opacity' : ''}`}
                                                  onClick={() =>
                                                      setPaymentPopup({
                                                          open: true,
                                                          id: orderData?.OrderId,
                                                          remainingAmount: orderData?.remaining_amount,
                                                      })
                                                  }
                                                  disabled={orderData?.status !== '8'}
                                              >
                                                  {orderData?.status >= 9 ? 'Paid' : `Pay Remaining ${orderData?.remaining_amount}$`}
                                              </Button>
                                              <FilledButton
                                                  color="primary"
                                                  className="btn-review text-uppercase"
                                                  onClick={() => {
                                                      if (orderData?.status === '3') {
                                                          setApprovePhotoPopup((prevState) => ({
                                                              ...prevState,
                                                              open: true,
                                                              id: orderData.OrderId,
                                                              editedImage: orderData.editedPhotoRecord?.editedImage,
                                                              originalImage: orderData.ImageURL[0],
                                                          }));
                                                      } else if (orderData?.status === '6') {
                                                          setApprovePaintingPopup((prevState) => ({
                                                              ...prevState,
                                                              open: true,
                                                              id: orderData.OrderId,
                                                              editedImage: orderData.editedpaintedRecord?.editedPaiting,
                                                              originalImage: orderData.ImageURL[0],
                                                              remainingAmount: orderData.remaining_amount,
                                                          }));
                                                      }
                                                  }}
                                                  disabled={orderData?.status !== '3' && orderData?.status !== '6'}
                                              >
                                                  review
                                              </FilledButton>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </AccountOrderBlock>
                      ))
                    : null}
            </div>
            <PostUnBoxingVideoBlock>
                <div className="unboxing-row ">
                    <div className="video-block unboxing-col">
                        <img src={Images.AccountVideoImg} alt="" className="" />
                    </div>
                    <div className="unboxing-video-data unboxing-col">
                        <h3 className="text-uppercase">
                            Post unboxing video and get 500 ${' '}
                            <HelpIcon className="icon">
                                <img src={Images.HelpIcon} alt="" className="" />
                            </HelpIcon>
                        </h3>
                        <div className="unboxing-video-text-block">
                            <p className="">Share your #BIGREVEAL!</p>
                            <p className="">
                                Film the unboxing of your painting and earn up to $400 store credit! Here is how it works: take a short video of the
                                person receiving the painting seeing it for the first time and post it to social media.{' '}
                            </p>
                        </div>
                        <div className="unboxing-social-block">
                            <h4 className="">You can Share on one or on all of the following:</h4>
                            <div className="ub-social-icon-wrap">
                                <div className="ub-social-icon-block">
                                    <Button type="link" className="social-icon-link">
                                        <img src={Images.IconFb} alt="" className="" />
                                    </Button>
                                    <i className="icon">
                                        <img src={Images.HelpIcon} alt="" className="" />
                                    </i>
                                </div>
                                <div className="ub-social-icon-block">
                                    <Button type="link" className="social-icon-link">
                                        <img src={Images.IconInsta} alt="" className="" />
                                    </Button>
                                    <i className="icon">
                                        <img src={Images.HelpIcon} alt="" className="" />
                                    </i>
                                </div>
                                <div className="ub-social-icon-block">
                                    <Button type="link" className="social-icon-link">
                                        <img src={Images.IconYouTube} alt="" className="" />
                                    </Button>
                                    <i className="icon">
                                        <img src={Images.HelpIcon} alt="" className="" />
                                    </i>
                                </div>
                                <div className="ub-social-icon-block">
                                    <Button type="link" className="social-icon-link">
                                        <img src={Images.IconTickTok} alt="" className="" />
                                    </Button>
                                    <i className="icon">
                                        <img src={Images.HelpIcon} alt="" className="" />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="unboxing-mid-and unboxing-col">
                        <div className="and-wrap">
                            <span className="">&</span>
                        </div>
                    </div>
                    <div className="unboxing-upload-col unboxing-col">
                        <div className="unboxing-upload-wrap">
                            <p className="">
                                Upload your video on the right, allowing us to use your video on our website and online ads (Credit will be given if
                                we decide (based on our discretion) to use your video in our marketing materials.) -{'>'} get up to $80 store credit.
                            </p>
                            <Button type="link" className="upload-input-block">
                                <i className="icon">
                                    <img src={Images.IconAdd} alt="" className="" />
                                </i>
                                Upload Now
                            </Button>
                        </div>
                    </div>
                </div>
            </PostUnBoxingVideoBlock>
            {approvePhotoPopup && (
                <AccoutReviewModal
                    onCancel={() =>
                        setApprovePhotoPopup((prevState) => ({
                            ...prevState,
                            open: false,
                        }))
                    }
                    openPopup={approvePhotoPopup}
                    closable={false}
                    content={
                        <>
                            <p>
                                <strong>Please, Note !</strong> As soon as you approve the edited photo, we will start painting right away. Please
                                keep in mind that the final painting will look almost exactly like the edited photo, therefore, if there is something
                                you do not like about the edit, please click &quot;Ask for modifications&quot; button below and share your feedback
                                with us now.
                            </p>
                            <p>
                                You will not be able to ask for major changes in the composition (the arrangement of all the elements) after this
                                point. However, you will still have the opportunity to request minor modifications after the first draft of the
                                painting.
                            </p>
                        </>
                    }
                    modificationBtn="Ask for modifications"
                    approveBtn="Approve Edit"
                    modificationBtnClick={() => {
                        setApprovePhotoPopup((prevState) => ({
                            ...prevState,
                            modification: !prevState.modification,
                        }));
                    }}
                    approveBtnAction={approveBtnAction}
                    modificationBtnAction={modificationBtnAction}
                    approvedPara="Edited Photo Approved!"
                    modificationReqAcceptPara="modification request sent!"
                    className="image_small_padding"
                    handleCustomerNote={handleCustomerNote}
                />
            )}
            {approvePaintingPopup && (
                <AccoutReviewModal
                    onCancel={() =>
                        setApprovePaintingPopup((prevState) => ({
                            ...prevState,
                            open: false,
                        }))
                    }
                    openPopup={approvePaintingPopup}
                    closable={false}
                    content={
                        <>
                            <p>
                                {' '}
                                <strong>Congratulations!</strong> Your painting is ready! Please, make sure that the artist&apos;s signature on the
                                painting is the way you&apos;ve ordered it.
                            </p>
                            <p>Please, approve the painting or ask for minor modifications.</p>
                        </>
                    }
                    modificationBtn="Ask for modifications"
                    approveBtn="Approve Painting"
                    modificationBtnClick={() => {
                        setApprovePaintingPopup((prevState) => ({
                            ...prevState,
                            modification: !prevState.modification,
                        }));
                    }}
                    approveBtnAction={approveBtnAction}
                    modificationBtnAction={modificationBtnAction}
                    modificationReqAcceptPara="modification request sent!"
                    paymentBtn={`Pay Remaninging ${approvePaintingPopup.remainingAmount} $`}
                    approvedPara="Painting Approved!"
                    paymentBtnAction={handlePaymentAction}
                    handleCustomerNote={handleCustomerNote}
                />
            )}
            {viewOrderDetailPopup.open && (
                <ViewOrderDetailPopup viewOrderDetailPopup={viewOrderDetailPopup} setViewOrderDetailPopup={setViewOrderDetailPopup} />
            )}

            {paymentPopup.open && (
                <ShippingAddressPopup setPaymentPopup={setPaymentPopup} paymentPopup={paymentPopup} setThankyouPopup={setThankyouPopup} />
            )}
            {thankyouPopup && <ThankyouPopup setThankyouPopup={setThankyouPopup} />}
        </>
    );
};

export default MyOrder;
