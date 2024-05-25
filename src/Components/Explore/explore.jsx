import React from 'react';
import './explore.css';

const Explore = () => {
  const plantCare = [
    { id: 1, name: 'Wooden Plant Tray', careDetails: '', img: 'https://www.ugaoo.com/cdn/shop/files/1_d5bf840e-b636-4677-8c38-eb188f6c1e46.jpg?v=1716366499&width=375', rating: 4.5, price: '$10' },
    { id: 2, name: 'Shade Net', careDetails: '', img: 'https://images.ctfassets.net/i3tkg7dt3kro/ogA9MQVdzmp7QUiQv4THz/b9a2a66ec32e7dc900e33474f0219c8a/top-plant-care-tips-7-1.jpg', rating: 4.2, price: '$15' },
    { id: 2, name: 'Organic manure', careDetails: '', img: 'https://tse4.mm.bing.net/th?id=OIP.AhR1sEo7AGHB4aU09ZIq9QHaHa&pid=Api&P=0&h=180', rating: 4.2, price: '$15' },
    { id: 2, name: 'Gardening Kit', careDetails: '', img: 'https://tse3.mm.bing.net/th?id=OIP.zdPmZ73tQwUPEHh6Q1GexQHaHa&pid=Api&P=0&h=180', rating: 4.2, price: '$15' },
    { id: 2, name: 'Shade Net', careDetails: '', img: 'https://images.ctfassets.net/i3tkg7dt3kro/ogA9MQVdzmp7QUiQv4THz/b9a2a66ec32e7dc900e33474f0219c8a/top-plant-care-tips-7-1.jpg', rating: 4.2, price: '$15' },
    // Add more plant care objects here with ratings and prices
  
    
  ];

  return (
    <div className="plant-page">
      <div className="top-banner">
        <img src="https://www.ugaoo.com/cdn/shop/collections/Sub_Category_Banners_Planters__Ceramic_Desk_f4d6346e-e250-4c05-946a-5d8ab8d9a170.jpg?v=1690478126&width=1500" alt="Plants" className="banner-img" />
      </div>
      <div className="content">
        <h3>Plant Care</h3>
        <p>Proper plant care is a godsend in the gardening world. That moment when you realize exactly what your plants need is a much-needed epiphany. That’s why we set up our range of plant care products to meet all your plants’ needs. Shop from our exclusive range of plant care products for a happy, strong garden!.</p>
        <div className="plant-care">
          
          <div className="plant-care-cards">
            {plantCare.map((plant) => (
              <div key={plant.id} className="plant-care-card">
                <img src={plant.img} alt={plant.name} className="plant-care-img" />
                <h4>{plant.name}</h4>
                <p>{plant.careDetails}</p>
                <div className="plant-details">
                  <div className="plant-rating">
                    <span role="img" aria-label="star">&#11088;</span> {plant.rating}
                  </div>
                  <div className="plant-price">
                    {plant.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;