/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import parse from 'html-react-parser';
import moment from 'moment';
import Head from 'next/head';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectError, setTermDetail } from '../../services/API/GeneralSettings/GeneralSettings.slice';
import Toast from '../../components/Toast/Toast';
import LayoutCmp from '../../components/Layout';
import { CommonPolicyCmp } from '../../features/CookiePolicy/CommonPolicy.Components';
import GeneralSettings from '../../services/API/GeneralSettings';
import { statusCode } from '../../constants/statusCode';
import { getReadContentTime } from '../../utils/func';
import SEO from '../../services/API/SEO';
import { useRouter } from 'next/router';
import { SITE_URL } from '../../constants/predicates';

const { Content } = Layout;
const TermsCondition = ({ seoResult, termResult }: any) => {
    const dispatch = useAppDispatch();
    const route = useRouter();

    const error = useAppSelector(selectError);

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        dispatch(setTermDetail(termResult));
    }, [termResult]);

    useEffect(() => {
        if (error) setShow(true);
    }, [error]);

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
                <meta name="twitter:data1" content={`${termResult?.readingTime} minutes`} />
                <meta name="twitter:image" content={seoResult?.imageUrl || ''} />
            </Head>

            <LayoutCmp key={null} type="" props={undefined}>
                <CommonPolicyCmp>
                    {show && <Toast show={show} setShow={setShow} message={error?.message} type="error" showIcon />}
                    <Content className="container">
                        <div className="cookie_section">
                            <h1>PHOTO2PAINTING TERMS AND CONDITIONS OF USE</h1>
                            <div className="editor_content_cookie">
                                <p>Last updated: {moment(termResult?.detail?.data?.[0]?.updatedAt).format('MMMM DD, YYYY')}</p>
                                {parse(termResult?.detail?.data?.[0]?.description || '')}
                            </div>
                        </div>
                    </Content>
                </CommonPolicyCmp>
            </LayoutCmp>
        </>
    );
};

export default TermsCondition;

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

    let termResult: any = {};

    try {
        const response: any = await GeneralSettings.termsConditions();
        if (response.status === statusCode.success) {
            termResult = { detail: response.data, readingTime: getReadContentTime(response.data?.data?.[0]?.description) };
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        termResult = { error: { message: err?.response?.data?.message || null, code: err?.response?.data?.code || null } };
    }

    return {
        props: {
            seoResult,
            termResult,
        },
    };
};
