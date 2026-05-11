import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuList from '../components/MenuList';

function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/menu')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching menu items:', error));
  }, []);

  return (
    <div>
      <MenuList items={items} />
    </div>
  );
}

export default Menu;