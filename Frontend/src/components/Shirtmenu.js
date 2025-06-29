import React, { useState, useEffect } from 'react';
import './Shirtmenu.css';
import { API } from '../App';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function ShirtMenu() {
  const [shirts, setShirts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/api/product/getProduct");
        const data = res.data.product;
        const shirtsData = data.filter((product) => product.category === 'Shirts');
        setShirts(shirtsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div>
      <div className="shirt-menu">
        <h2>Shirt Menu</h2>
        <ul>
          {shirts.map((shirt) => (
            <li key={shirt._id}>
              <div className="shirt-image">
                <img src={shirt.image} alt={shirt.name} />
              </div>
              <div className="shirt-details">
                <h3>{shirt.name}</h3>
                <p>{shirt.description}</p>
                <p className="price">Price: ${shirt.price}</p>
                <button>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ShirtMenu;
