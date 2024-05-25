import React from 'react'
import './plant.css'
const Plant = () => {
    const plants = [
      { id: 1, name: 'Money Plant', price: '$10', rating: 4.5, img: 'https://i1.fnp.sg/images/pr/x/v20201015001442/beautiful-classic-money-plant_2.jpg' },
      { id: 2, name: 'Lucky Bamboo', price: '$15', rating: 4.0, img: 'https://cdn.storehippo.com/s/6176774ef575bbd2b3331c8a/ms.files/uploads/lucky%20(2).jpg' },
      { id: 3, name: 'Snake Plant', price: '$20', rating: 5.0, img: 'https://balconygardenweb.b-cdn.net/wp-content/uploads/2023/08/snake-plant-h.jpg' },
      { id: 3, name: 'Golden Pothos', price: '$20', rating: 5.0, img: 'https://tse1.mm.bing.net/th?id=OIP.pjv8QVGRkWGRRGHiSzOnTwHaHa&pid=Api&P=0&h=180' },
      { id: 3, name: 'Spider Plant', price: '$20', rating: 5.0, img: 'https://www.almanac.com/sites/default/files/image_nodes/spider-plant_t50-ss.jpg' },
      // Add more plant objects here
      
    ];
  
    return (
      <div className="plant-page">
        <div className="top-banner">
          <img src="https://www.ugaoo.com/cdn/shop/collections/Indoor-Plants-Category-Banner_1.png?v=1689318958&width=1500" alt="Plants" className="banner-img" />
        </div>
        <div className="content">
          <h3>Plants</h3>
          <p>Explore our collection of beautiful plants to bring nature into your home.</p>
          <div className="plant-grid">
            {plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.img} alt={plant.name} className="plant-img" />
                <h4>{plant.name}</h4>
                <p>Price: {plant.price}</p>
                <div className="rating">
                  {'★'.repeat(Math.floor(plant.rating))}
                  {'☆'.repeat(5 - Math.floor(plant.rating))}
                </div>
              </div>
            ))}
          </div>
       </div>
       </div>
    );
  };
  
  export default Plant;