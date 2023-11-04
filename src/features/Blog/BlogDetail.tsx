/* eslint-disable no-plusplus */
/* eslint-disable max-lines-per-function */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from 'react';
import { Col, Form, Input, Row, Tooltip } from 'antd';
import { ClockCircleOutlined, QuestionCircleFilled, ShoppingCartOutlined } from '@ant-design/icons';
import parse from 'html-react-parser';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

import { BlogDetailPageCmp, BlogGlobal, BlogThemeCmp } from './Blog.components';
import { Images } from '../../theme';
import { NextBtn, PrevBtn } from '../../components/PrevNextBtn/PrevNextBtn';
import SliderCarousel from '../../components/SliderCarousel/SliderCarousel';
import FilledButton from '../../components/FilledButton/FilledButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectedContent, selectedError, setBlogContent } from './Blog.slice';
import { Routes } from '../../navigation/Routes';
import { useRouter } from 'next/router';
import { subscribeMemberAction } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import Toast from '../../components/Toast';

const BlogDetail = ({ blogDetailResult }) => {
    let productIndex = 1;
    let tableProductIndex = 1;
    let interval: any;

    const dispatch = useAppDispatch();
    const route = useRouter();
    const [form] = Form.useForm();

    const content = useAppSelector(selectedContent);
    const error = useAppSelector(selectedError);

    const [show, setShow] = useState(false);
    const [showSuccessSubscribe, setShowSuccessSubscribe] = useState(false);
    const [nav1, setNav1] = useState<any>();
    const [time, setTime] = useState({ hours: 24, minutes: 0, seconds: 0, message: '' } || '');
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        if (error) {
            setShow(true);
            route.push(Routes.notFound);
        }
    }, [error]);

    useEffect(() => {
        productIndex = 1;
        tableProductIndex = 1;

        interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        dispatch(setBlogContent(blogDetailResult));
    }, [blogDetailResult]);

    useEffect(() => {
        const text: any = document?.getElementById('blog-article')?.innerText;
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;

        const readLength = Math.ceil(words / wpm);
        setReadingTime(readLength);
    }, [content]);

    const clock = useMemo(
        () => (
            <div className="block">
                {!time?.message || time?.message === '' ? (
                    `${String(time?.hours).padStart(2, '0')}:${String(time?.minutes).padStart(2, '0')}:${String(time?.seconds).padStart(2, '0')}`
                ) : (
                    <span className="time-over">{time?.message}</span>
                )}
            </div>
        ),
        [time],
    );

    const settingsBox = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handlePrevious = () => nav1?.slickPrev();
    const handleNext = () => nav1?.slickNext();

    const updateTimer = () => {
        setTime((prevTime): any => {
            if (prevTime?.hours === 0 && prevTime?.minutes === 0 && prevTime?.seconds === 0) {
                clearInterval(interval);
                return { ...prevTime, message: 'Time Is Over' };
            }

            let newHours = prevTime?.hours;
            let newMinutes = prevTime?.minutes;
            let newSeconds = prevTime?.seconds;

            if (prevTime?.seconds === 0) {
                if (prevTime?.minutes === 0) {
                    newHours -= 1;
                    newMinutes = 59;
                } else {
                    newMinutes -= 1;
                }
                newSeconds = 59;
            } else {
                newSeconds -= 1;
            }

            return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
        });
    };

    const handleTitle = (title: any) => {
        const element = document.getElementById(`title${title?.id}`);

        setTimeout(() => {
            if (element) {
                const headerOffset = 60;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }, 800);
    };
    const handleProduct = (products: any) => {
        const element = document.getElementById(`products${products?.id}`);

        setTimeout(() => {
            if (element) {
                const headerOffset = 60;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }, 500);
    };

    const onFinish = async (values) => {
        const payload = {
            name: values.username,
            email: values.email,
            tag: ['20% Table Of Contents'],
        };
        const result = await dispatch(subscribeMemberAction(payload));

        if (result.type === subscribeMemberAction.fulfilled.toString()) {
            setShowSuccessSubscribe(true);
            form.resetFields();
        }
    };

    const onFinishDiscount = async (values) => {
        const payload = {
            name: values.username,
            email: values.email,
            tag: ['20% Blog Article'],
        };
        const result = await dispatch(subscribeMemberAction(payload));

        if (result.type === subscribeMemberAction.fulfilled.toString()) {
            setShowSuccessSubscribe(true);
            form.resetFields();
        }
    };

    return (
        <BlogDetailPageCmp>
            {showSuccessSubscribe && (
                <Toast show={showSuccessSubscribe} setShow={setShowSuccessSubscribe} message="User subscribe successfully" type="success" showIcon />
            )}
            {show ? null : (
                <div className="p2p_blog_post_detail">
                    <article className="bolg_post_article" id="blog-article">
                        {blogDetailResult?.detail ? (
                            <>
                                <div className="left_detail-blog">
                                    <h1 className="blog_title">{blogDetailResult?.detail?.blog?.title}</h1>
                                    <div className="blog_post-meta">
                                        <Row gutter={24}>
                                            <Col sm={24} xl={12}>
                                                <div className="post_meta-left">
                                                    <div className="top-tag d-flex items-center">
                                                        <div className="time_block">
                                                            <ClockCircleOutlined /> {readingTime} min
                                                        </div>
                                                        <div className="update_at">
                                                            Updated: {moment(blogDetailResult?.detail?.blog?.updatedAt).format('DD.MM.YYYY')}
                                                        </div>
                                                    </div>
                                                    <BlogGlobal>
                                                        <div className="blog-left-tags">
                                                            {blogDetailResult?.detail?.blog?.tags?.map((tag: any) => (
                                                                <div className="tags_button" key={tag.id}>
                                                                    {tag.tagName}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </BlogGlobal>
                                                </div>
                                            </Col>
                                            <Col sm={24} xl={12} className="d-flex items-center">
                                                <div className="post_meta-right">
                                                    <div className="profile_img">
                                                        <img
                                                            src={
                                                                blogDetailResult?.detail?.blog?.authors?.[0]?.authorImageImageUrl || Images.profileImg
                                                            }
                                                            alt="profileIcon"
                                                        />
                                                    </div>
                                                    <div className="profile_content">
                                                        <h4>Author: {blogDetailResult?.detail?.blog?.authors?.[0]?.authorName}</h4>
                                                        <p>{blogDetailResult?.detail?.blog?.authors?.[0]?.authorDescription}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="blog_post-image">
                                        <Image
                                            src={blogDetailResult?.detail?.blog?.blobImageUrl}
                                            alt={blogDetailResult?.detail?.blog?.blogImageAlt || ''}
                                            fill
                                        />
                                    </div>
                                    <div className="blog_post-content">
                                        <div className="editor-content">
                                            {blogDetailResult?.detail?.blog?.blogDescription
                                                ? parse(`${blogDetailResult?.detail?.blog?.blogDescription}`)
                                                : ''}
                                        </div>
                                        <div className="p2p_memorybox_outer">
                                            {blogDetailResult?.detail?.blog?.topics?.map((topics: any) => (
                                                <div className="memorybox_wrapper" key={topics?.id}>
                                                    <h2 className="caterogy_name" id={`title${topics?.id}`}>
                                                        {topics?.title}
                                                    </h2>
                                                    {topics?.products?.map((products: any) => (
                                                        <div className="outer_blog_box" key={products?.id} id={`products${products?.id}`}>
                                                            <div className="memoerybox_main">
                                                                <div className="number_left">
                                                                    <span>{productIndex++}</span>
                                                                </div>
                                                                <div className="memorybox_img">
                                                                    <img src={products?.productImageUrl} alt={products?.productImageAlt} />
                                                                </div>
                                                                <div className="mmry_rating_box">
                                                                    <h3>
                                                                        {products?.isPhotoToPaintingProduct ? (
                                                                            <Link href={`/${products?.productSlug}`}>{products?.title}</Link>
                                                                        ) : (
                                                                            <>{products?.title}</>
                                                                        )}
                                                                    </h3>
                                                                    <div className="icon_num_text">
                                                                        <div className="icon_text">
                                                                            <div className="icon-size">
                                                                                <img src={Images.priceTag?.src} alt="social" />
                                                                            </div>
                                                                            <span className="">{products?.like}%</span>
                                                                        </div>
                                                                        <div className="text">- Satisfaction</div>
                                                                    </div>
                                                                    <div className="icon_num_text">
                                                                        <div className="icon_text">
                                                                            <div className="icon-size">
                                                                                <img src={Images.moneyIcon?.src} alt="social" />
                                                                            </div>
                                                                            <span className="">
                                                                                ${products?.price}
                                                                                {products?.isPhotoToPaintingProduct ? '+' : null}
                                                                            </span>
                                                                        </div>
                                                                        <div className="text">- Price</div>
                                                                    </div>
                                                                    <div className="icon_num_text">
                                                                        <div className="icon_text">
                                                                            <div className="str-image">
                                                                                <div className="icon-size">
                                                                                    <img src={Images.starIcon?.src} alt="social" />
                                                                                </div>
                                                                            </div>
                                                                            <span className="">{products?.rating}</span>
                                                                        </div>
                                                                        <div className="text">- Rating</div>
                                                                    </div>
                                                                    {!products?.isPhotoToPaintingProduct && (
                                                                        <FilledButton
                                                                            className="btn_amazon"
                                                                            onClick={() => window.open(products?.productLink, '_blank')}
                                                                        >
                                                                            <ShoppingCartOutlined style={{ fontSize: '28px' }} /> Buy On Amazon
                                                                        </FilledButton>
                                                                    )}
                                                                </div>
                                                                {products?.isPhotoToPaintingProduct && (
                                                                    <div className="hand-img">
                                                                        <figure className="hnd-image-outer">
                                                                            <img src={products?.handImageUrl} alt="" />
                                                                        </figure>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="content_editor mt-3">
                                                                {products?.description ? parse(products?.description) : ''}
                                                            </div>
                                                            {products?.isPhotoToPaintingProduct && (
                                                                <div className="countdown-section">
                                                                    <div className="countdown-section-inner">
                                                                        <div className="countdown-section-left">
                                                                            <img src={Images.CountDownIcon?.src} alt="CountDownIcon" />
                                                                            <div className="timer_content">
                                                                                <div className="end-text">ends in:</div>
                                                                                <div className="timer-main">{clock}</div>
                                                                                <ul>
                                                                                    <li>hours</li>
                                                                                    <li>mins.</li>
                                                                                    <li>secs.</li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="countdown-section-right">
                                                                            <div className="countdown-title">
                                                                                <p className="count-ttile">10% discount has been applied</p>
                                                                            </div>
                                                                            <div className="countdown-email">
                                                                                <Form onFinish={onFinishDiscount} form={form}>
                                                                                    <Row gutter={{ xs: 24, lg: 12 }}>
                                                                                        <Col xs={24} lg={8}>
                                                                                            <Form.Item
                                                                                                name="username"
                                                                                                rules={[
                                                                                                    {
                                                                                                        required: true,
                                                                                                        message: 'Please input your Name!',
                                                                                                    },
                                                                                                ]}
                                                                                            >
                                                                                                <Input placeholder="Enter Your Name" />
                                                                                            </Form.Item>
                                                                                        </Col>
                                                                                        <Col xs={24} lg={8}>
                                                                                            <Form.Item
                                                                                                name="email"
                                                                                                rules={[
                                                                                                    {
                                                                                                        required: true,
                                                                                                        message: 'Please input your Email!',
                                                                                                    },
                                                                                                    {
                                                                                                        type: 'email',
                                                                                                        message:
                                                                                                            'Please enter a valid email address.',
                                                                                                    },
                                                                                                ]}
                                                                                            >
                                                                                                <Input placeholder="Enter Your Email" />
                                                                                            </Form.Item>
                                                                                        </Col>
                                                                                        <Col xs={24} lg={8}>
                                                                                            <FilledButton htmlType="submit" color="primary">
                                                                                                Get Discount Code
                                                                                            </FilledButton>
                                                                                        </Col>
                                                                                    </Row>
                                                                                </Form>
                                                                            </div>
                                                                            <div className="countdown-twenty_block">
                                                                                <div className="countdown-twenty-inner">
                                                                                    <h4>20% Advance Payment only</h4>
                                                                                    <p>Remaining balance to be paid after painting approval</p>
                                                                                </div>
                                                                                <Tooltip
                                                                                    placement="left"
                                                                                    title="Remaining balance to be paid after painting approval"
                                                                                    color="white"
                                                                                    overlayClassName="tooltip_blog"
                                                                                    key={1}
                                                                                >
                                                                                    <span className="countdown-tooltip">
                                                                                        <QuestionCircleFilled style={{ fontSize: '22px' }} />
                                                                                    </span>
                                                                                </Tooltip>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <div className="prop_cons_main">
                                                                <Row gutter={24}>
                                                                    <Col span={12} md={{ order: 2 }}>
                                                                        <div className="cons_block">
                                                                            <h4>Cons</h4>
                                                                            <ul>
                                                                                {products?.cons?.map(({ cons, id }: any) => (
                                                                                    <li key={id}>{cons}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </Col>
                                                                    <Col span={12} md={{ order: 1 }}>
                                                                        <div className="prop_block">
                                                                            <h4>Pros</h4>
                                                                            <ul>
                                                                                {products?.pros?.map(({ pros, id }: any) => (
                                                                                    <li key={id}>{pros}</li>
                                                                                ))}
                                                                            </ul>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="last_post">
                                            <h2>Our Verdict</h2>
                                            {blogDetailResult?.detail?.blog?.verdict ? parse(blogDetailResult?.detail?.blog?.verdict) : ''}
                                        </div>
                                        <div className="post_content-2">
                                            <Row gutter={24}>
                                                <Col xs={24} lg={12}>
                                                    <div className="bg-gray">
                                                        <div className="post_meta-right">
                                                            <div className="profile_img">
                                                                <img
                                                                    src={
                                                                        blogDetailResult?.detail?.blog?.authors?.[0]?.authorImageImageUrl ||
                                                                        Images.profileImg
                                                                    }
                                                                    alt="profileIcon"
                                                                />
                                                            </div>
                                                            <div className="profile_content">
                                                                <h4>Author: {blogDetailResult?.detail?.blog?.authors?.[0]?.authorName}</h4>
                                                                <div>{blogDetailResult?.detail?.blog?.authors?.[0]?.authorDescription}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xs={24} lg={12}>
                                                    <div className="bg-gray">
                                                        <div className="post_meta-right text-center">
                                                            Although we only recommend picks we really love, we may earn a commission on purchases
                                                            made through links from our article at no extra cost to the reader.
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                                <div className="right_detail-blog">
                                    <div className="right-portion-inner">
                                        <div className="table-portion">
                                            <p className="table-portion-title">Table of Content</p>
                                            <ul className="main-tabs">
                                                {blogDetailResult?.detail?.blog?.topics?.map((topics: any) => (
                                                    <li key={topics?.id}>
                                                        <div className="title" onClick={() => handleTitle(topics)} tabIndex={0} role="button">
                                                            <span>{topics?.title}</span>
                                                        </div>
                                                        <ol className="sub-tab">
                                                            {topics?.products?.map((products: any) => (
                                                                <li key={products?.id}>
                                                                    <span>{tableProductIndex++}</span>
                                                                    <h3>
                                                                        <span onClick={() => handleProduct(products)} tabIndex={0} role="button">
                                                                            {products?.title}
                                                                        </span>
                                                                    </h3>
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="subs-portion">
                                            <p className="subs-portion-title">Subscribe &amp; get exclusive deals</p>
                                            <div className="subscribe_blog-form">
                                                <Form onFinish={onFinish} form={form}>
                                                    <Row gutter={12}>
                                                        <Col span={24}>
                                                            <Form.Item
                                                                name="username"
                                                                label=""
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'This field is required.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input placeholder="Enter Your Name" />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col span={24}>
                                                            <Form.Item
                                                                name="email"
                                                                label=""
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'This field is required.',
                                                                    },
                                                                    {
                                                                        type: 'email',
                                                                        message: 'Please enter a valid email address.',
                                                                    },
                                                                ]}
                                                            >
                                                                <Input placeholder="Enter Your Email" />
                                                            </Form.Item>
                                                            <FilledButton htmlType="submit" className="submit_button">
                                                                <img src={Images.FormArrowIcon?.src} alt="FormArrowIcon" />{' '}
                                                            </FilledButton>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </article>
                    <BlogThemeCmp className="p2p_blog_content slider_bottom_blg py-0">
                        <h4>See Also..</h4>
                        {blogDetailResult?.detail?.similarBlog?.length > 2 ? (
                            <div className="blog_content_main">
                                <PrevBtn handlePrevious={handlePrevious} />
                                <SliderCarousel settings={settingsBox} ref={(slider1: any) => setNav1(slider1)} className="blog_content-gap">
                                    {blogDetailResult?.detail?.similarBlog?.map((blog: any) => (
                                        <div className="blog_list" key={blog?.id}>
                                            <div className="blog-img">
                                                <img src={blog.blobImageUrl} alt={blog.blogImageAlt || ''} />
                                            </div>
                                            <div className="blog-content">
                                                <Link href={Routes.blog.replace(':slug', blog?.slug)} className="blog-title" rel="canonical">
                                                    {blog.title}
                                                </Link>

                                                <div className="blog-excerpt">{blog?.shortDescription || ''}</div>
                                                <BlogGlobal>
                                                    <div className="blog-left-tags">
                                                        {blog?.tags?.map((tag: any) => (
                                                            <div className="tags_button" key={tag.id}>
                                                                {tag.tagName}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </BlogGlobal>
                                            </div>
                                        </div>
                                    ))}
                                </SliderCarousel>
                                <NextBtn handleNext={handleNext} />
                            </div>
                        ) : (
                            <div className="blog_content_main">
                                <Row className="blog_content-gap">
                                    {blogDetailResult?.detail?.similarBlog?.map((blog: any) => (
                                        <Col xs={24} md={8}>
                                            <div className="blog_list" key={blog?.id}>
                                                <div className="blog-img">
                                                    <img src={blog.blobImageUrl} alt={blog.blogImageAlt || ''} />
                                                </div>
                                                <div className="blog-content">
                                                    <Link href={Routes.blog.replace(':slug', blog?.slug)} className="blog-title" rel="canonical">
                                                        {blog.title}
                                                    </Link>

                                                    <div className="blog-excerpt">{parse(`${blog?.blogDescription || ''}`)}</div>
                                                    <BlogGlobal>
                                                        <div className="blog-left-tags">
                                                            {blog?.tags?.map((tag: any) => (
                                                                <div className="tags_button" key={tag.id}>
                                                                    {tag.tagName}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </BlogGlobal>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        )}
                    </BlogThemeCmp>
                </div>
            )}
        </BlogDetailPageCmp>
    );
};
export default BlogDetail;
