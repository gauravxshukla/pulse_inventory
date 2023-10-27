"use client";


import NavBar from './NavBar';
import ShopList from './ShopList';
import {shops} from '../constants/shopdata';


interface Shop {
  id: number;
  name: string;
  bio: string;
  address: string;
  products: Product[];
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  available_stock: number;
}

const Dashboard: React.FC = () => {


  return (
    <div>
      <NavBar />
      <ShopList shops={shops}  />
    </div>
  );
};

export default Dashboard;
