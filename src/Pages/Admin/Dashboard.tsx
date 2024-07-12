import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [orderStats, setOrderStats] = useState(null);
  const [productStats, setProductStats] = useState(null);
  const [topSellingProduct, setTopSellingProduct] = useState(null);
  const [revenue, setRevenue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orderStatsResponse = await axios.get('http://localhost:8000/orders/stats');
        const productStatsResponse = await axios.get('http://localhost:8000/products/stats');
        const topSellingProductResponse = await axios.get('http://localhost:8000/products/top-selling');
        const revenueResponse = await axios.get('http://localhost:8000/revenue');

        setOrderStats(orderStatsResponse.data);
        setProductStats(productStatsResponse.data);
        setTopSellingProduct(topSellingProductResponse.data);
        setRevenue(revenueResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <h2>Thống kê đơn hàng</h2>
        {orderStats && <Bar data={orderStats} />}
      </div>
      <div>
        <h2>Sản phẩm đã bán</h2>
        {productStats && <Bar data={productStats} />}
      </div>
      <div>
        <h2>Sản phẩm bán chạy nhất</h2>
        {topSellingProduct && <p>{topSellingProduct.name}</p>}
      </div>
      <div>
        <h2>Doanh thu đã bán</h2>
        {revenue && <p>{revenue.total}</p>}
      </div>
    </div>
  );
};

export default Dashboard;
