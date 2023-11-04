import moment from 'moment';
import { SITE_URL } from '../constants/predicates';
import GeneralSettings from '../services/API/GeneralSettings';

const generateSiteMap = (array) => {
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       ${array
           .map((route) => {
               return `
         <url>
             <loc>${SITE_URL}/${route}</loc>
             <lastmod>${moment().format()}</lastmod>
             <changefreq>daily</changefreq>
             <priority>0.7</priority>
         </url>
       `;
           })
           .join('')}
     </urlset>
   `;
};

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {
    const siteMapFetch = await GeneralSettings.siteMapSlugs();

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(siteMapFetch.data.slugs);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
