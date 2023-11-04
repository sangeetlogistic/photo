/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Layout } from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AboutUsCmp } from '../../features/AboutUs/About.components';
import LayoutCmp from '../../components/Layout';
import SEO from '../../services/API/SEO';
import { statusCode } from '../../constants/statusCode';
import { SITE_URL } from '../../constants/predicates';
import { Images } from '../../theme';

const { Content } = Layout;
const AboutUs = ({ seoResult }: any) => {
    const route = useRouter();

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
                <meta name="twitter:image" content={seoResult?.imageUrl || ''} />
            </Head>
            <LayoutCmp key={null} type="" props={undefined}>
                <AboutUsCmp>
                    <Content className="container">
                        <figure>
                            <img src={Images.AboutUsBelieve.src} alt="about us believe section" loading="lazy" />
                            <img src={Images.AboutUsArtists.src} alt="about us artists section" loading="lazy" />
                        </figure>
                    </Content>
                </AboutUsCmp>
            </LayoutCmp>
        </>
    );
};

export default AboutUs;

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

    return {
        props: {
            seoResult,
        },
    };
};
