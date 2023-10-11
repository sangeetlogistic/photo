/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faSearch } from '@fortawesome/free-solid-svg-icons';
import parse from 'html-react-parser';
import { Helmet } from 'react-helmet';
import { usePathname } from 'next/navigation';

import { Images } from '../../theme';
import { BlogThemeCmp, BlogGlobal } from './Blog.components';
import FilledButton from '../../components/FilledButton/FilledButton';
import BlogDetail from './BlogDetail';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    blogDetailAction,
    clearBlogList,
    getBlogAction,
    selectedBlogList,
    selectedFilteredBlogTag,
    selectedLoading,
    selectedTotalRecord,
} from './Blog.slice';
import LoadingCover from '../../components/LoadingCover';
import { Routes } from '../../navigation/Routes';
import Link from 'next/link';

const Blog = () => {
    // const { id }: { id: string } = useParams();
    const id = 1;
    const pathname = usePathname();
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();

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

    useEffect(() => {
        setIsInitial(false);
    }, []);

    useEffect(() => {
        // Scroll to top
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        if (id) {
            dispatch(blogDetailAction({ slug: id }));
        } else {
            const payload = {
                start: blogList?.length || 0,
                search: blogListPayload?.searchBlog || blogListPayload?.activeTag,
            };
            dispatch(getBlogAction(payload));
        }
    }, [blogListPayload, id]);

    useEffect(() => {
        setShowContinueBtn(blogList?.length > 0 && blogList.length !== totalRecord);
    }, [blogList?.length]);

    const handleFilterClick = async (tag: string) => {
        if (blogListPayload?.activeTag !== tag) {
            await dispatch(clearBlogList());
            setBlogListPayload((prev) => ({ ...prev, activeTag: tag }));
        }
    };

    const handleMore = () => {
        setBlogListPayload((prev) => ({ ...prev, pageNo: prev.pageNo + 1 }));
    };

    const onFinish = async (values: { blogPosts: string }) => {
        dispatch(clearBlogList());
        setBlogListPayload({ pageNo: 0, activeTag: null, searchBlog: values.blogPosts.trim() });
    };

    const onValuesChange = (values: { blogPosts: string }) => {
        if (!values.blogPosts || values.blogPosts === '') setBlogListPayload((prev) => ({ ...prev, searchBlog: '' }));
    };

    return (
        <>
            {!id || id === undefined ? (
                <>
                    <Helmet>
                        <title>Blog List</title>
                    </Helmet>
                    <BlogThemeCmp className="p2p_blog_content">
                        <div className="blog_container">
                            <Row gutter={{ md: 24, xl: 48 }}>
                                <Col xs={24} md={8} xl={6}>
                                    <div className="blog_left-innr">
                                        <img src={Images.BlogLeftImg} alt="blog-left" />
                                        <div className="search_input_block">
                                            <Form onFinish={onFinish} onValuesChange={onValuesChange} form={form}>
                                                <Form.Item label="" name="blogPosts">
                                                    <Input placeholder="Find interesting Blog Posts" className="search_input" />
                                                </Form.Item>
                                            </Form>
                                            <div className="icon-top" onClick={() => form.submit()} tabIndex={0} role="button">
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
                                                    <Form>
                                                        <Row gutter={24}>
                                                            <Col span={9}>
                                                                <Form.Item
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your Country!',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Input placeholder="Enter Your Name" className="subscribe_form-conrol" />
                                                                </Form.Item>
                                                            </Col>
                                                            <Col span={9}>
                                                                <Form.Item
                                                                    label=""
                                                                    rules={[
                                                                        {
                                                                            required: true,
                                                                            message: 'Please input your Country!',
                                                                        },
                                                                    ]}
                                                                >
                                                                    <Input placeholder="Enter Your Email Here..." className="subscribe_form-conrol" />
                                                                    <div className="icon-right">
                                                                        <FontAwesomeIcon icon={faArrowRightLong} />
                                                                    </div>
                                                                </Form.Item>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </div>
                                            </div>
                                            <div className="blog-top-right">
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <img src={Images.InstagramIcon} alt="insta" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src={Images.YoutubeIcon} alt="youtube" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src={Images.TocIcon} alt="toc" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img src={Images.FacebookIcon} alt="facebook" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="blog_content_main">
                                            <Row gutter={28} className="blog_content-gap">
                                                {blogList?.length > 0
                                                    ? blogList?.map((list: any) => (
                                                          <Col md={12} xl={8} key={list.id}>
                                                              <div className="blog_list">
                                                                  <div className="blog-img">
                                                                      <Link href={Routes.blog.replace(':id', list.slug)}>
                                                                          <img src={list.blogImage} alt={list.blogImageAlt} />
                                                                      </Link>
                                                                  </div>
                                                                  <div className="blog-content">
                                                                      <Link href={Routes.blog.replace(':id', list.slug)} className="blog-title">
                                                                          {list.title}
                                                                      </Link>
                                                                      <div className="blog-excerpt" id="blog-desc">
                                                                          {list.blogDescription ? parse(`${list.blogDescription}`) : ''}
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
                                                          </Col>
                                                      ))
                                                    : !isInitial && !loading && <div className="no_record">Record Not Found</div>}
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
                </>
            ) : (
                <>
                    <Helmet>
                        <title>Blog Details</title>
                    </Helmet>
                    <BlogDetail />
                </>
            )}
            <LoadingCover show={loading} />
        </>
    );
};

export default Blog;
