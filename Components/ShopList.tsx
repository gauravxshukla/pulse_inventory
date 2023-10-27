import ShopCard from './ShopCard';


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  available_stock: number;
}

interface Shop {
  id: number;
  name: string;
  bio: string;
  address: string;
  products: Product[];
}


interface ShopListProps {
    shops: Shop[];
  }

const ShopList: React.FC<ShopListProps> = ({ shops }) => {
  return (
    <div className="flex justify-center py-4">
      <div className="grid grid-cols-3 gap-4">
      {shops.map((shop) => (
        <ShopCard key={shop.id} shopname = {shop.name} shopbio = {shop.bio}   />
      ))}
    </div>
    </div>
  );
};

export default ShopList;

