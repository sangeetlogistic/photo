import React from 'react';
import { Collapse } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import parse from 'html-react-parser';

import { DrawingPortraitsFAQCmp } from './DrawingPortrait.component';
import FilledButton from '../../components/FilledButton';

const { Panel } = Collapse;

const DrawingPortraitsFAQ = ({ name, description, faqs }: { name: string; description: string; faqs: any }) => (
    <DrawingPortraitsFAQCmp>
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
    </DrawingPortraitsFAQCmp>
);

export default DrawingPortraitsFAQ;
