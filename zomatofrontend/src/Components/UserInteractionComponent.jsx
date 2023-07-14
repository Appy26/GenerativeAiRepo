// UserInteractionComponent.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInteractionComponent = () => {
    const [dishes, setDishes] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchDishes();
        fetchOrders();
    }, []);

    const fetchDishes = async () => {
        try {
            const response = await axios.get('/api/menu');
            setDishes(response.data);
        } catch (error) {
            console.error('Error fetching dishes:', error);
        }
    };

    const fetchOrders = async () => {
        try {
            const response = await axios.get('/api/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const takeOrder = async (customerId, dishId) => {
        try {
            await axios.post('/api/orders', { customerId, dishId });
            fetchOrders();
        } catch (error) {
            console.error('Error taking order:', error);
        }
    };

    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            await axios.put(`/api/orders/${orderId}`, { status: newStatus });
            fetchOrders();
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    return (
        <div>
            <h2>User Interaction</h2>
            <h3>Dishes</h3>
            <ul>
                {dishes.map((dish) => (
                    <li key={dish.id}>
                        {dish.name} - ${dish.price}
                        <button onClick={() => takeOrder('customer1', dish.id)}>Order</button>
                    </li>
                ))}
            </ul>
            <h3>Orders</h3>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        Order ID: {order.id} | Status: {order.status}
                        <button onClick={() => updateOrderStatus(order.id, 'completed')}>
                            Mark as Completed
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserInteractionComponent;
