// MenuManagementComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 import "../App.css"
const MenuManagementComponent = () => {
    const [dishes, setDishes] = useState([]);
    const [newDish, setNewDish] = useState({ name: '', price: '' });

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const response = await axios.get('/api/menu');
            setDishes(response.data);
        } catch (error) {
            console.error('Error fetching menu:', error);
        }
    };

    const addDish = async () => {
        try {
            await axios.post('/api/menu', newDish);
            setNewDish({ name: '', price: '' });
            fetchMenu();
        } catch (error) {
            console.error('Error adding dish:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewDish((prevDish) => ({
            ...prevDish,
            [name]: value,
        }));
    };

    return (
        <div>
            <div id="myDiv">This is my div</div>
            <h2>Menu Management</h2>
            <ul>
                {dishes.map((dish) => (
                    <li key={dish.id}>
                        {dish.name} - ${dish.price}
                    </li>
                ))}
            </ul>
            <h3>Add Dish</h3>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={newDish.name}
                onChange={handleInputChange}
            />
            <input
                type="number"
                placeholder="Price"
                name="price"
                value={newDish.price}
                onChange={handleInputChange}
            />
            <button onClick={addDish}>Add Dish</button>
        </div>
    );
};

export default MenuManagementComponent;
