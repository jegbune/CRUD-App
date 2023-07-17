import React, { useState } from 'react';
import './CartPage.css'
const CartPage = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() !== '' && itemQuantity.trim() !== '') {
      const newItem = {
        id: Date.now(),
        name: itemName,
        quantity: parseInt(itemQuantity),
      };

      setItems([...items, newItem]);
      setItemName('');
      setItemQuantity('');
    }
  };

  const handleEditItem = (itemId, newName, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === itemId
        ? { ...item, name: newName, quantity: parseInt(newQuantity) }
        : item
    );

    setItems(updatedItems);
  };

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-list">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div>{item.name}</div>
            <div>{item.quantity}</div>
            <button onClick={() => handleEditItem(item.id, 'New Name', 1)}>
              Edit
            </button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-item">
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
        />
        <input
          type="number"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          placeholder="Quantity"
        />
        <button onClick={handleAddItem}>Add to Cart</button>
      </div>
    </div>
  );
};

export default CartPage;
