import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { usePathname } from 'next/navigation';

import { Routes } from '../../../navigation/Routes';
import { Images } from '../../../theme';
import FilledButton from '../../FilledButton';
import { useAppSelector } from '../../../app/hooks';
import { selectHeaderFAQs } from '../../../services/API/GeneralSettings/GeneralSettings.slice';
import { useRouter } from 'next/router';

const FAQ = () => {
    const history = useRouter();
    const pathname = usePathname();

    const [selected, setSelected] = useState(0);
    const headerFAQs = useAppSelector(selectHeaderFAQs);

    useEffect(() => {
        setSelected(0);
    }, [pathname]);

    return (
        <div className="mega-menu-container">
            <div className="mega-menu-shadow"></div>
            <div className="faq-mega-menu-wrapper">
                <div className="faq-menu-left">
                    <ul className="menu-faq-questions">
                        {headerFAQs?.map((faq: any, index: number) => (
                            <li key={index}>
                                <div
                                    className={`faq-que ${selected === index ? 'active' : ''}`}
                                    onClick={() => setSelected(index)}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <i className="icon">
                                        <span className="lazy-load-image-loaded">
                                            <img src={Images.IconRightArrow?.src} alt="" />
                                        </span>
                                    </i>
                                    <span className="faq-q">{faq?.question}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="faq-menu-right">
                    {headerFAQs?.map((faqs: any, index: number) => selected === index && <div>{parse(faqs?.answer || '')}</div>)}

                    <div className="faq-btn-row">
                        <FilledButton
                            className="link-btn-blue link-btn-height-auto link-btn-no-pdng link-btn-icon-append text-uppercase"
                            type="link"
                            onClick={() => history.push(Routes.ourFaq)}
                        >
                            FAQ
                            <span className="icon-append">
                                <span className="lazy-load-image-background">
                                    <img src={Images.IconRightArrowRound?.src} alt="" />
                                </span>
                            </span>
                        </FilledButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
