import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../../navigation/Routes';
import { Images } from '../../../theme';
import FilledButton from '../../FilledButton';
import LazyImage from '../../LazyImage';

const { Panel } = Collapse;

const MobileFAQ = ({ title, mobileClassName }: { title?: string; mobileClassName?: string }) => {
    const history = useHistory();

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
                <Panel header={<div className="">How we turn a photo into a painting?</div>} key="1">
                    <p>
                        {' '}
                        After you order painting and upload photo, our artist will start to turn your picture into a painting ASAP. The drawing
                        procedure has many pieces. Initially, we delineate the chosen photograph using a thinnest brush/pencil. From that point we
                        start by outlining the face/landscape lines with the light color. After the fundamental zones are filled in, artist adds
                        details with a darker color and develops the masterpiece.
                    </p>
                </Panel>
                <Panel
                    header={
                        <>
                            <div className="">When will I receive my custom painting?</div>
                        </>
                    }
                    key="2"
                >
                    <p>
                        {' '}
                        Four factors affect the turnaround time: 1) Service choice. It can be either standard service or express service. 2) Shipping
                        choice. It can be either standard shipping or express shipping. 3) The choice of medium for the painting 4) The size of your
                        custom painting The following turnaround is from the day you place your order to the day you receive it at your door. Regular
                        service – 26-30 days Express service* – 22-26 days Express Service* + Express Shipping** – 17- 23 days * If you choose the
                        Express service, we will start working on your order right away! You can choose this service at the shopping cart page. The
                        cost of this service is an additional 15 %. ** If you want to reduce the shipping by several days, you can choose our Express
                        Shipping service! You can make this choice after approving the painting, so there is no rush – you can decide later! The cost
                        of this service is an additional 15 %.
                    </p>
                </Panel>
                <Panel
                    header={
                        <>
                            <div className="">How to get a painting of a picture?</div>
                        </>
                    }
                    key="3"
                >
                    <p>
                        {' '}
                        1) start your order, upload a photo, select medium, and pay only 20% of the full amount 2) We edit your photo, then send you
                        an edited version, you approve, and afterward one of our artists begins working 3) While the paint is still in process, we
                        send you a photo of your custom painting for review 4) The painting is prepared for delivery, you pay the remaining amount,
                        and we ship the artwork. Please, see our HOW IT WORKS page to see how we turn your pictures into paintings.
                    </p>
                </Panel>
                <Panel
                    header={
                        <>
                            <div className="">How much does a painting cost?</div>
                        </>
                    }
                    key="4"
                >
                    <p>
                        {' '}
                        The prices of our paintings vary. The cost depends upon the size and the number of subjects in the work. Capturing the faces
                        of each and every subject requires thorough work, time, and necessary skills. But you don’t need to worry – our designers pay
                        attention to every single detail! For this reason, the number of subjects in the picture determines the complexity of the
                        painting. We will provide the price of the picture based on the complexity! Want to know more about pricing? Please, visit our
                        price page. Turn pictures into paintings with us!
                    </p>
                </Panel>
                <Panel
                    header={
                        <>
                            <div className="">When do I pay for my painting from a photo?</div>
                        </>
                    }
                    key="5"
                >
                    <p>
                        {' '}
                        At the initial stage, while placing an order, you will be asked to pay a 20% deposit. After the final draft of the work is
                        approved, the remaining 80% balance will be charged from your account. Additionally, we offer monthly and bi-weekly payments
                        via Affirm or Afterpay.
                    </p>
                </Panel>
            </Collapse>
            <div className="faq-btn-row">
                <FilledButton
                    className="link-btn-blue link-btn-height-auto link-btn-no-pdng link-btn-icon-append text-uppercase"
                    type="link"
                    onClick={() => history.push(Routes.ourFaq)}
                >
                    FAQ
                    <span className="icon-append">
                        <LazyImage effect="opacity" src={Images.IconRightArrowRound} alt="" />
                    </span>
                </FilledButton>
            </div>
        </div>
    );
};

export default MobileFAQ;
