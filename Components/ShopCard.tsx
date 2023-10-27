import React from 'react'
import Link from 'next/link';

interface ShopCardProps {
  shopname: string;
  shopbio: string;
}


const ShopCard : React.FC<ShopCardProps> =  ({shopname, shopbio}) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-auto max-w-full rounded-lg">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{shopname}</h5>
            <h6 className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">{shopbio}</h6>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              View Products
              </button>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add a Product
              </button>
            </div>
        </div>
      );
}


export default ShopCard