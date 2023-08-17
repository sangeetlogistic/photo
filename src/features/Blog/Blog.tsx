/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Form, Input, Row } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Images } from '../../theme';
import { BlogThemeCmp } from './Blog.components';
import FilledButton from '../../components/FilledButton/FilledButton';

const Blog = () => (
    <BlogThemeCmp className="p2p_blog_content">
        <div className="blog_container">
            <Row gutter={{ md: 24, xl: 48 }}>
                <Col md={8} xl={6}>
                    <div className="blog_left-innr">
                        <img src={Images.BlogLeftImg} alt="blog-left" />
                        <div className="search_input_block">
                            <Form.Item
                                label=""
                                name="country"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Country!',
                                    },
                                ]}
                            >
                                <Input placeholder="Find interesting Blog Posts" className="search_input" />
                            </Form.Item>
                            <div className="icon-top">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                            <div className="blog-left-tags">
                                <div className="tags_button">50th birthday gifts</div>
                                <div className="tags_button">Dog Gifts</div>
                                <div className="tags_button">40th birthday gifts</div>
                                <div className="tags_button">Pet GiftsPet Gifts</div>
                                <div className="tags_button">Cat Gifts</div>
                                <div className="tags_button active">Mother’s day gifts</div>
                                <div className="tags_button">Father’s day gifts</div>
                            </div>
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
                                <Col md={12} xl={8}>
                                    <div className="blog_list">
                                        <div className="blog-img">
                                            <img src={Images.Blog2Img} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="blog-title">
                                                50th Birthday Gift Ideas – Ultimate Guide For Anyone In Your Life
                                            </a>
                                            <p className="blog-excerpt">
                                                If your loved one is turning 50, chances are high you’re trying to look for the most unique,
                                                memorable, and special 50th birthday gift ideas that they will never forget. And if you haven’t yet
                                                sorted out your ideas to get them more creative presents than they could have ever imagined, then
                                                you’re at the memorable, and special 50th birthday gift ideas that they will never forget. And if you
                                                haven’t yet sorted out your ideas to get them more creative presents than they could have ever
                                                imagined, then you’re at the
                                            </p>
                                            <div className="blog-left-tags">
                                                <div className="tags_button">Dog Gifts</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} xl={8}>
                                    <div className="blog_list">
                                        <div className="blog-img">
                                            <img src={Images.Blog2Img} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="blog-title">
                                                50th Birthday Gift Ideas – Ultimate Guide For Anyone In Your Life
                                            </a>
                                            <p className="blog-excerpt">
                                                If your loved one is turning 50, chances are high you’re trying to look for the most unique,
                                                memorable, and special 50th birthday gift ideas that they will never forget. And if you haven’t yet
                                                sorted out your ideas to get them more creative presents than they could have ever imagined, then
                                                you’re at the memorable, and special 50th birthday gift ideas that they will never forget. And if you
                                                haven’t yet sorted out your ideas to get them more creative presents than they could have ever
                                                imagined, then you’re at the
                                            </p>
                                            <div className="blog-left-tags">
                                                <div className="tags_button">Dog Gifts</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} xl={8}>
                                    <div className="blog_list">
                                        <div className="blog-img">
                                            <img src={Images.Blog2Img} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="blog-title">
                                                50th Birthday Gift Ideas – Ultimate Guide For Anyone In Your Life
                                            </a>
                                            <p className="blog-excerpt">
                                                If your loved one is turning 50, chances are high you’re trying to look for the most unique,
                                                memorable, and special 50th birthday gift ideas that they will never forget. And if you haven’t yet
                                                sorted out your ideas to get them more creative presents than they could have ever imagined, then
                                                you’re at the memorable, and special 50th birthday gift ideas that they will never forget. And if you
                                                haven’t yet sorted out your ideas to get them more creative presents than they could have ever
                                                imagined, then you’re at the
                                            </p>
                                            <div className="blog-left-tags">
                                                <div className="tags_button">Dog Gifts</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} xl={8}>
                                    <div className="blog_list">
                                        <div className="blog-img">
                                            <img src={Images.Blog2Img} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="blog-title">
                                                50th Birthday Gift Ideas – Ultimate Guide For Anyone In Your Life
                                            </a>
                                            <p className="blog-excerpt">
                                                If your loved one is turning 50, chances are high you’re trying to look for the most unique,
                                                memorable, and special 50th birthday gift ideas that they will never forget. And if you haven’t yet
                                                sorted out your ideas to get them more creative presents than they could have ever imagined, then
                                                you’re at the memorable, and special 50th birthday gift ideas that they will never forget. And if you
                                                haven’t yet sorted out your ideas to get them more creative presents than they could have ever
                                                imagined, then you’re at the
                                            </p>
                                            <div className="blog-left-tags">
                                                <div className="tags_button">Dog Gifts</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} xl={8}>
                                    <div className="blog_list">
                                        <div className="blog-img">
                                            <img src={Images.Blog2Img} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="blog-title">
                                                50th Birthday Gift Ideas – Ultimate Guide For Anyone In Your Life
                                            </a>
                                            <p className="blog-excerpt">
                                                If your loved one is turning 50, chances are high you’re trying to look for the most unique,
                                                memorable, and special 50th birthday gift ideas that they will never forget. And if you haven’t yet
                                                sorted out your ideas to get them more creative presents than they could have ever imagined, then
                                                you’re at the memorable, and special 50th birthday gift ideas that they will never forget. And if you
                                                haven’t yet sorted out your ideas to get them more creative presents than they could have ever
                                                imagined, then you’re at the
                                            </p>
                                            <div className="blog-left-tags">
                                                <div className="tags_button">Dog Gifts</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={12} xl={8}>
                                    <div className="blog_list">
                                        <div className="blog-img">
                                            <img src={Images.Blog2Img} alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <a href="#" className="blog-title">
                                                50th Birthday Gift Ideas – Ultimate Guide For Anyone In Your Life
                                            </a>
                                            <p className="blog-excerpt">
                                                If your loved one is turning 50, chances are high you’re trying to look for the most unique,
                                                memorable, and special 50th birthday gift ideas that they will never forget. And if you haven’t yet
                                                sorted out your ideas to get them more creative presents than they could have ever imagined, then
                                                you’re at the memorable, and special 50th birthday gift ideas that they will never forget. And if you
                                                haven’t yet sorted out your ideas to get them more creative presents than they could have ever
                                                imagined, then you’re at the
                                            </p>
                                            <div className="blog-left-tags">
                                                <div className="tags_button">Dog Gifts</div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="button-bottom">
                            <FilledButton color="primary" className="btn_white">
                                Continue
                            </FilledButton>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </BlogThemeCmp>
);

export default Blog;
