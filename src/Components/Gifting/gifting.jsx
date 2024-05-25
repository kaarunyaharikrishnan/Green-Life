import React, { useState } from 'react';
import './gifting.css';

const Gifting = () => {
    const [showMoreValuableGifts, setShowMoreValuableGifts] = useState(false);

    const toggleGifts = () => {
        setShowMoreValuableGifts(!showMoreValuableGifts);
    };

    return (
        <div className="gifting-container">
            {/* Top space for the image */}
            <div className="gift-image">
                <img src="https://inbloomflorist.flowermanager.net/wp-content/uploads/sites/23/2021/05/Plant-Gifting-1-of-1-2-1-2048x1160.jpg" alt="Gift Image" />
            </div>

            {/* Big boxes for personal and corporate gifts */}
            <div className="gift-categories">
                <div className="personal-gifts">
                    <h2>Personal Gifts</h2>
                    <ul>
                        <li>
                            <img src="https://www.ugaoo.com/cdn/shop/files/1_d1d557e2-aa0c-4c34-996a-f5b4a59187bd.jpg?v=1682784417&width=375" alt="Birthday Gift" />
                            Birthday Gift
                        </li>
                        <li>
                            <img src="https://tse2.mm.bing.net/th?id=OIP.sW6_crmQmzvvcZkjCEnAZgHaHa&pid=Api&P=0&h=180" alt="Anniversary Gift" />
                            Anniversary Gift
                        </li>
                        {/* Add images for other personalized gifts */}
                    </ul>
                </div>

                <div className="corporate-gifts">
                    <h2>Corporate Gifts</h2>
                    <ul>
                        <li>Corporate Gift 1</li>
                        <li>Corporate Gift 2</li>
                        {/* Add more corporate gift subcategories here */}
                    </ul>
                </div>
            </div>

            {/* Toggle button for more valuable gifts */}
            <button onClick={toggleGifts}>
                {showMoreValuableGifts ? 'Show Basic Gifts' : 'Show More Valuable Gifts'}
            </button>

            {/* Show more valuable gifts based on toggle state */}
            {showMoreValuableGifts && (
                <div className="more-valuable-gifts">
                    {/* Add more valuable gift items here */}
                </div>
            )}
        </div>
    );
}

export default Gifting;
