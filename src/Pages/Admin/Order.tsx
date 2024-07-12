import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../service/order/orderSlice';

const OrdersList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
  const orderStatus = useSelector((state) => state.orders.status);
  const error = useSelector((state) => state.orders.error);

  useEffect(() => {
    if (orderStatus === 'idle') {
      dispatch(fetchOrders());
    }
  }, [orderStatus, dispatch]);

  let content;

  if (orderStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (orderStatus === 'succeeded') {
    content = orders.map((order) => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.customerName}</td>
        <td>{order.date}</td>
        <td>{order.total}</td>
        <td>{order.status}</td>
      </tr>
    ));
  } else if (orderStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <h1>Order List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
};

export default OrdersList;
