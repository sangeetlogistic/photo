/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { Images } from '../../theme';
import { BlogThemeCmp, BlogGlobal } from '../../features/Blog/Blog.components';
import FilledButton from '../../components/FilledButton/FilledButton';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    clearBlogList,
    getBlogAction,
    selectedBlogList,
    selectedFilteredBlogTag,
    selectedLoading,
    selectedTotalRecord,
    setBlogDetail,
} from '../../features/Blog/Blog.slice';
import LayoutCmp from '../../components/Layout';


import BlogDetailService from '../../services/API/Blog';
import { statusCode } from '../../constants/statusCode';
import SEO from '../../services/API/SEO';
import { subscribeMemberAction } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import Toast from '../../components/Toast';
import { Routes } from '../../navigation/Routes';
import { SITE_URL } from '../../constants/predicates';

const Blog = ({ seoResult, blogResult }: any) => {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [searchForm] = Form.useForm();

    const route = useRouter();

    const blogList = useAppSelector(selectedBlogList);
    const filteredBlogTag = useAppSelector(selectedFilteredBlogTag);
    const totalRecord = useAppSelector(selectedTotalRecord);
    const loading = useAppSelector(selectedLoading);

    const [blogListPayload, setBlogListPayload] = useState<{ activeTag: null | string; pageNo: number; searchBlog: string }>({
        activeTag: null,
        pageNo: 0,
        searchBlog: '',
    });
    const [showContinueBtn, setShowContinueBtn] = useState<boolean>(false);
    const [isInitial, setIsInitial] = useState<boolean>(true);
    const [show, setShow] = useState(false);
    const [isApiCall, setIsApiCall] = useState(false);

    useEffect(() => {
        setIsInitial(false);
    }, []);

    useEffect(() => {
        // Scroll to top
        window.scrollTo(0, 0);
    }, [route.pathname]);

    useEffect(() => {
        if (isApiCall) {
            const payload = {
                start: blogList?.length || 0,
                search: blogListPayload?.searchBlog || blogListPayload?.activeTag,
            };
            dispatch(getBlogAction(payload));
            setIsApiCall(false);
        }
    }, [blogListPayload]);

    useEffect(() => {
        dispatch(setBlogDetail(blogResult));
    }, [blogResult]);

    useEffect(() => {
        setShowContinueBtn(blogList?.length > 0 && blogList.length !== totalRecord);
    }, [blogList?.length]);

    const handleFilterClick = async (tag: string) => {
        if (blogListPayload?.activeTag !== tag) {
            await dispatch(clearBlogList());
            setBlogListPayload((prev) => ({ ...prev, activeTag: tag }));
            setIsApiCall(true);
        }
    };

    const handleMore = () => {
        setBlogListPayload((prev) => ({ ...prev, pageNo: prev.pageNo + 1 }));
        setIsApiCall(true);
    };

    const onFinish = async (values: { blogPosts: string }) => {
        dispatch(clearBlogList());
        setBlogListPayload({ pageNo: 0, activeTag: null, searchBlog: values.blogPosts.trim() });
        setIsApiCall(true);
    };

    const onValuesChange = (values: { blogPosts: string }) => {
        if (!values.blogPosts || values.blogPosts === '') {
            setBlogListPayload((prev) => ({ ...prev, searchBlog: '' }));
            setIsApiCall(true);
        }
    };

    const onFinishSubscribe = async (values) => {
        const payload = {
            name: values.username,
            email: values.email,
            tag: ['20% Blog Subscribe Box'],
        };
        const result = await dispatch(subscribeMemberAction(payload));

        if (result.type === subscribeMemberAction.fulfilled.toString()) {
            setShow(true);
            form.resetFields();
        }
    };

    return (
        <>
            <Head>
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
                <meta name="twitter:label1" content="Time to read" />
                <meta name="twitter:data1" content="Less than a minute" />
                <meta name="twitter:image" content={seoResult?.imageUrl || ''} />
            </Head>
            <LayoutCmp key={null} type="" props={undefined}>
                {show && <Toast show={show} setShow={setShow} message="User subscribe successfully" type="success" showIcon />}
                <BlogThemeCmp className="p2p_blog_content">
                    <div className="blog_container">
                        <Row gutter={{ md: 24, xl: 48 }}>
                            <Col xs={24} md={8} xl={6}>
                                <div className="blog_left-innr">
                                    <img src={Images.BlogLeftImg.src} alt="blog-left" />
                                    <div className="search_input_block">
                                        <Form onFinish={onFinish} onValuesChange={onValuesChange} form={searchForm}>
                                            <Form.Item label="" name="blogPosts">
                                                <Input placeholder="Find interesting Blog Posts" className="search_input" />
                                            </Form.Item>
                                        </Form>
                                        <div className="icon-top" onClick={() => searchForm.submit()} tabIndex={0} role="button">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </div>
                                        <BlogGlobal>
                                            <div className="blog-left-tags">
                                                {filteredBlogTag?.map((tag: string, index: number) => (
                                                    <div
                                                        className={`tags_button ${blogListPayload?.activeTag === tag ? 'active' : ''}`}
                                                        key={index}
                                                        onClick={() => handleFilterClick(tag)}
                                                        tabIndex={0}
                                                        role="button"
                                                    >
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </BlogGlobal>
                                    </div>
                                </div>
                            </Col>
                            <Col md={16} xl={18}>
                                <div className="blog_right-innr">
                                    <div className="blog_right--top">
                                        <div className="blog-top-left">
                                            <h2>Subscribe & get 20 % off</h2>
                                            <div className="mail-form">
                                                <Form onFinish={onFinishSubscribe} form={form}>
                                                    <Row gutter={24}>
                                                        <Col span={9}>
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
                                                                <Input placeholder="Enter Your Name" className="subscribe_form-conrol" />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col span={9}>
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
                                                                <Input placeholder="Enter Your Email Here..." className="subscribe_form-conrol" />
                                                            </Form.Item>
                                                            <div className="icon-right" onClick={() => form.submit()} tabIndex={0} role="button">
                                                                <FontAwesomeIcon icon={faArrowRightLong} />
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="blog-top-right">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img src={Images.InstagramIcon.src} alt="insta" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={Images.YoutubeIcon.src} alt="youtube" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={Images.TocIcon.src} alt="toc" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={Images.FacebookIcon.src} alt="facebook" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h1 className="blog_list-title">Popular Articles</h1>
                                    <div className="blog_content_main">
                                        <Row gutter={28} className="blog_content-gap">
                                            {blogList?.length > 0
                                                ? blogList?.map((list: any, index: number) => (
                                                      <Col md={12} xl={8} key={index}>
                                                          <Link href={Routes.blog.replace(':slug', list.slug)} rel="canonical">
                                                              <div className="blog_list">
                                                                  <div className="blog-img">
                                                                      <Image src={list.blogImage} alt={list.blogImageAlt || ''} fill />
                                                                  </div>
                                                                  <div className="blog-content">
                                                                      <h2 className="blog-title">{list.title}</h2>
                                                                      <div className="blog-excerpt" id="blog-desc">
                                                                          {list.shortDescription || ''}
                                                                      </div>
                                                                      {list?.blogTag && (
                                                                          <BlogGlobal>
                                                                              <div className="blog-left-tags">
                                                                                  {list.blogTag.split(',').map((tag: string, index: number) => (
                                                                                      <div className="tags_button" key={index}>
                                                                                          {tag}
                                                                                      </div>
                                                                                  ))}
                                                                              </div>
                                                                          </BlogGlobal>
                                                                      )}
                                                                  </div>
                                                              </div>
                                                          </Link>
                                                      </Col>
                                                  ))
                                                : !isInitial
                                                ? !loading && <div className="no_record">Record Not Found</div>
                                                : blogResult?.detail?.data?.map((list: any, index: number) => (
                                                      <Col md={12} xl={8} key={index}>
                                                          <Link href={Routes.blog.replace(':slug', list.slug)} rel="canonical">
                                                              <div className="blog_list">
                                                                  <div className="blog-img">
                                                                      <Image src={list.blogImage} alt={list.blogImageAlt || ''} fill />
                                                                  </div>
                                                                  <div className="blog-content">
                                                                      <h2 className="blog-title">{list.title}</h2>
                                                                      <div className="blog-excerpt" id="blog-desc">
                                                                          {list.shortDescription || ''}
                                                                      </div>
                                                                      {list?.blogTag && (
                                                                          <BlogGlobal>
                                                                              <div className="blog-left-tags">
                                                                                  {list.blogTag.split(',').map((tag: string, index: number) => (
                                                                                      <div className="tags_button" key={index}>
                                                                                          {tag}
                                                                                      </div>
                                                                                  ))}
                                                                              </div>
                                                                          </BlogGlobal>
                                                                      )}
                                                                  </div>
                                                              </div>
                                                          </Link>
                                                      </Col>
                                                  ))}
                                        </Row>
                                    </div>
                                    {showContinueBtn && (
                                        <div className="button-bottom">
                                            <FilledButton color="primary" className="btn_white" onClick={handleMore}>
                                                Continue
                                            </FilledButton>
                                        </div>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </BlogThemeCmp>
            </LayoutCmp>
        </>
    );
};

export default Blog;

export const getServerSideProps = async (context) => {
    const slug = context.resolvedUrl.split('/')[1];

    let seoResult: any = '';
    try {
        const response = await SEO.getSeoDetail({ slug });
        if (response.status === statusCode.success) {
            seoResult = response?.data?.data;
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        seoResult = null;
    }
    let blogResult: any = {};

    try {
        const response: any = await BlogDetailService.getAllBlog({ start: 0 });
        if (response.status === statusCode.success) {
            blogResult = { detail: response.data };
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        blogResult = { error: { message: err?.response?.data?.message || null, code: err?.response?.data?.code || null } };
    }

    return {
        props: {
            seoResult,
            blogResult,
        },
    };
};
