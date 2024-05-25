import React from 'react';
import './helpcenter.css'; // Import your CSS file for styling

const HelpCenter = () => {
    return (
        <div className="helpCenter">
            <h2>Frequently Asked Questions</h2>

            {/* Plant Care FAQs */}
            <div className="faqCategory">
                <h3>Plant Care</h3>
                <ul>
                    <li>
                        <strong>How often should I water my plants?</strong>
                        <p>Watering frequency depends on factors like plant type, environment, and season. Generally, check soil moisture before watering.</p>
                    </li>
                    <li>
                        <strong>What are the sunlight requirements for different plants?</strong>
                        <p>Plants have varying sunlight needs. Some prefer full sun, while others thrive in partial shade. Refer to plant tags or descriptions for guidance.</p>
                    </li>
                    <li>
                        <strong>What type of soil should I use for indoor plants?</strong>
                        <p>Well-draining potting mix suitable for indoor plants is recommended. Avoid heavy garden soils that can retain too much water.</p>
                    </li>
                    {/* Add more plant care FAQs */}
                </ul>
            </div>

            {/* Specific Plant Varieties FAQs */}
            <div className="faqCategory">
                <h3>Specific Plant Varieties</h3>
                <ul>
                    <li>
                        <strong>How do I care for a Money Plant (Pothos)?</strong>
                        <p>Money plants prefer indirect light and moderate watering. Allow soil to dry between waterings for best results.</p>
                    </li>
                    <li>
                        <strong>What are the characteristics of a Snake Plant (Sansevieria)?</strong>
                        <p>Snake plants are known for their air-purifying properties and low maintenance. They thrive in low light and require infrequent watering.</p>
                    </li>
                    <li>
                        <strong>How can I propagate a Succulent plant?</strong>
                        <p>Succulents can be propagated from leaf or stem cuttings. Use well-draining soil and provide indirect light during propagation.</p>
                    </li>
                    {/* Add more specific plant variety FAQs */}
                </ul>
            </div>

            {/* Shipping and Delivery FAQs */}
            <div className="faqCategory">
                <h3>Shipping and Delivery</h3>
                <ul>
                    <li>
                        <strong>What are the estimated delivery times?</strong>
                        <p>Delivery times vary based on location and shipping method. Standard delivery typically takes X days, while expedited shipping may be available for faster delivery.</p>
                    </li>
                    <li>
                        <strong>What shipping methods do you offer?</strong>
                        <p>We offer standard shipping, express shipping, and local pickup options. Shipping costs and delivery times may vary.</p>
                    </li>
                    <li>
                        <strong>What is your return policy?</strong>
                        <p>We accept returns within X days of delivery for unused and undamaged items. Please refer to our Returns and Refunds policy for more details.</p>
                    </li>
                    {/* Add more shipping and delivery FAQs */}
                </ul>
            </div>
        </div>
    );
}

export default HelpCenter;
