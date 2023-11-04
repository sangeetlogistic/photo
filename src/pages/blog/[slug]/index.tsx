import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import LayoutCmp from '../../../components/Layout';
import BlogServices from '../../../services/API/Blog/Blog.services';
import { statusCode } from '../../../constants/statusCode';
import { getReadContentTime } from '../../../utils/func';
import SEO from '../../../services/API/SEO';
import { SITE_URL } from '../../../constants/predicates';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const BlogDetail = dynamic(() => import('../../../features/Blog/BlogDetail'));

const BlogDetailPage = ({ seoResult, blogDetailResult }: any) => {
    const route = useRouter();

    return (
        <>
            <Head>
                <link rel="canonical" href={`${SITE_URL}${route.asPath}`} key="canonical" />
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
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content={blogDetailResult?.detail?.blog?.authors?.[0]?.authorName} />
                <meta name="twitter:label2" content="Time to read" />
                <meta name="twitter:data2" content={`${blogDetailResult?.readingTime} minutes`} />
                <meta name="twitter:image" content={seoResult?.imageUrl || ''} />
            </Head>

            <LayoutCmp key={null} type="" props={undefined}>
                <BlogDetail blogDetailResult={blogDetailResult} />
            </LayoutCmp>
        </>
    );
};
export default BlogDetailPage;

export const getServerSideProps = async (context) => {
    const { slug }: any = context.query;

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

    let blogDetailResult: any = {};

    try {
        const response: any = await BlogServices.getBlogDetail({ slug });
        if (response.status === statusCode.success) {
            blogDetailResult = {
                detail: response.data,
                readingTime: getReadContentTime(
                    `${response.data?.blog?.title} ${response.data?.blog?.verdict} ${response.data?.blog?.blogDescription}`,
                ),
            };
        }
    } catch (err: any) {
        if (!err.response) {
            throw err;
        }
        blogDetailResult = { error: { message: err?.response?.data?.message || null, code: err?.response?.data?.code || null } };
    }

    return {
        props: {
            seoResult,
            blogDetailResult,
        },
    };
};
