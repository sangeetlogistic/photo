import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../../navigation/Routes';
import { Images } from '../../../theme';
import FilledButton from '../../FilledButton';
import LazyImage from '../../LazyImage';

const FAQ = () => {
    const history = useHistory();

    const [selected, setSelected] = useState(1);

    return (
        <div className="mega-menu-container">
            <div className="mega-menu-shadow"></div>
            <div className="faq-mega-menu-wrapper">
                <div className="faq-menu-left">
                    <ul className="menu-faq-questions">
                        <li>
                            <div className={`faq-que ${selected === 1 && 'active'}`} onClick={() => setSelected(1)} role="button" tabIndex={0}>
                                <i className="icon">
                                    <LazyImage effect="opacity" src={Images.IconRightArrow} alt="" />
                                </i>
                                <span className="faq-q">How we turn a photo into a painting?</span>
                            </div>
                        </li>
                        <li>
                            <div className={`faq-que ${selected === 2 && 'active'}`} onClick={() => setSelected(2)} role="button" tabIndex={0}>
                                <i className="icon">
                                    <LazyImage effect="opacity" src={Images.IconRightArrow} alt="" />
                                </i>
                                <span className="faq-q">When will I receive my custom painting?</span>
                            </div>
                        </li>
                        <li>
                            <div className={`faq-que ${selected === 3 && 'active'}`} onClick={() => setSelected(3)} role="button" tabIndex={0}>
                                <i className="icon">
                                    <LazyImage effect="opacity" src={Images.IconRightArrow} alt="" />
                                </i>
                                <span className="faq-q">How to get a painting of a picture?</span>
                            </div>
                        </li>
                        <li>
                            <div className={`faq-que ${selected === 4 && 'active'}`} onClick={() => setSelected(4)} role="button" tabIndex={0}>
                                <i className="icon">
                                    <LazyImage effect="opacity" src={Images.IconRightArrow} alt="" />
                                </i>
                                <span className="faq-q">How much does a painting cost?</span>
                            </div>
                        </li>
                        <li>
                            <div className={`faq-que ${selected === 5 && 'active'}`} onClick={() => setSelected(5)} role="button" tabIndex={0}>
                                <i className="icon">
                                    <LazyImage effect="opacity" src={Images.IconRightArrow} alt="" />
                                </i>
                                <span className="faq-q">When do I pay for my painting from a photo?</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="faq-menu-right">
                    {selected === 1 && (
                        <div>
                            After you order painting and upload photo, our artist will start to turn your picture into a painting ASAP. The drawing
                            procedure has many pieces. Initially, we delineate the chosen photograph using a thinnest brush/pencil. From that point we
                            start by outlining the face/landscape lines with the light color. After the fundamental zones are filled in, artist adds
                            details with a darker color and develops the masterpiece.
                        </div>
                    )}

                    {selected === 2 && (
                        <div>
                            Four factors affect the turnaround time: 1) Service choice. It can be either standard service or express service. 2)
                            Shipping choice. It can be either standard shipping or express shipping. 3) The choice of medium for the painting 4) The
                            size of your custom painting The following turnaround is from the day you place your order to the day you receive it at
                            your door. Regular service – 26-30 days Express service* – 22-26 days Express Service* + Express Shipping** – 17- 23 days
                            * If you choose the Express service, we will start working on your order right away! You can choose this service at the
                            shopping cart page. The cost of this service is an additional 15 %. ** If you want to reduce the shipping by several days,
                            you can choose our Express Shipping service! You can make this choice after approving the painting, so there is no rush –
                            you can decide later! The cost of this service is an additional 15 %.
                        </div>
                    )}

                    {selected === 3 && (
                        <div>
                            1) start your order, upload a photo, select medium, and pay only 20% of the full amount 2) We edit your photo, then send
                            you an edited version, you approve, and afterward one of our artists begins working 3) While the paint is still in
                            process, we send you a photo of your custom painting for review 4) The painting is prepared for delivery, you pay the
                            remaining amount, and we ship the artwork. Please, see our HOW IT WORKS page to see how we turn your pictures into
                            paintings.
                        </div>
                    )}

                    {selected === 4 && (
                        <div>
                            The prices of our paintings vary. The cost depends upon the size and the number of subjects in the work. Capturing the
                            faces of each and every subject requires thorough work, time, and necessary skills. But you don’t need to worry – our
                            designers pay attention to every single detail! For this reason, the number of subjects in the picture determines the
                            complexity of the painting. We will provide the price of the picture based on the complexity! Want to know more about
                            pricing? Please, visit our price page. Turn pictures into paintings with us!
                        </div>
                    )}

                    {selected === 5 && (
                        <div>
                            At the initial stage, while placing an order, you will be asked to pay a 20% deposit. After the final draft of the work is
                            approved, the remaining 80% balance will be charged from your account. Additionally, we offer monthly and bi-weekly
                            payments via Affirm or Afterpay.
                        </div>
                    )}
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
            </div>
        </div>
    );
};

export default FAQ;
