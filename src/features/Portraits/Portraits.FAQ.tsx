import React, { useEffect } from 'react';
import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

import { PortraitsFAQCmp } from './Portraits.component';
import FilledButton from '../../components/FilledButton';

const { Panel } = Collapse;

const PortraitsFAQ = ({ name, description, faqs }: { name: string; description: string; faqs: any }) => {
    const route = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const spanElement: any = document.querySelectorAll('.ant-collapse-header-text');
            spanElement.forEach((element) => {
                const h3Element = document.createElement('h3');

                // Copy the text content from the span to the h3
                h3Element.classList.add('ant-collapse-header-text');
                h3Element.textContent = element.textContent;

                // Replace the span with the new h3
                element.parentNode.replaceChild(h3Element, element);
            });
        }
    }, [route.asPath]);

    return (
        <PortraitsFAQCmp>
            <div className="portraits-content-wrapper">
                <nav className="social-menu">
                    <ul className="content-ul">
                        <li className="">
                            <FilledButton color="primary" size="small" shape="circle">
                                <FontAwesomeIcon icon={faTwitter} />
                            </FilledButton>
                        </li>
                        <li className="">
                            <FilledButton color="primary" size="small" shape="circle">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </FilledButton>
                        </li>
                        <li className="">
                            <FilledButton color="primary" size="small" shape="circle">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </FilledButton>
                        </li>
                    </ul>
                </nav>
                {description ? parse(`${description}`) : ''}
                <div className="portraits-faq-block">
                    <h2 className="">{name && name.split(' ')[0]} FAQ</h2>
                    <Collapse accordion className="portraits-accordian">
                        {faqs?.length > 0 &&
                            faqs.map((obj: any) => (
                                <Panel header={obj?.question} key={obj?.id}>
                                    {parse(`${obj?.answer}`)}
                                </Panel>
                            ))}
                    </Collapse>
                </div>
            </div>
        </PortraitsFAQCmp>
    );
};

export default PortraitsFAQ;
