import React from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'antd';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

import { Routes } from '../../../navigation/Routes';
import { Images } from '../../../theme';
import FilledButton from '../../FilledButton';
import { useAppSelector } from '../../../app/hooks';
import { selectHeaderFAQs } from '../../../services/API/GeneralSettings/GeneralSettings.slice';

const { Panel } = Collapse;

const MobileFAQ = ({ title, mobileClassName }: { title?: string; mobileClassName?: string }) => {
    const route = useRouter();
    const headerFAQs = useAppSelector(selectHeaderFAQs);

    return (
        <div className={`mega-menu-container ${mobileClassName || ''}`}>
            <h2>{title || ''}</h2>
            <Collapse
                defaultActiveKey={['1']}
                bordered={false}
                ghost
                accordion
                expandIcon={({ isActive }) => <FontAwesomeIcon icon={faAngleRight} rotate={isActive ? 90 : 0} />}
            >
                {headerFAQs?.map((faq: any, index: number) => (
                    <Panel header={<div className="">{faq?.question}</div>} key={index + 1}>
                        {parse(faq?.answer || '')}
                    </Panel>
                ))}
            </Collapse>
            <div className="faq-btn-row">
                <FilledButton
                    className="link-btn-blue link-btn-height-auto link-btn-no-pdng link-btn-icon-append text-uppercase"
                    type="link"
                    onClick={() => route.push(Routes.ourFaq)}
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
    );
};

export default MobileFAQ;
