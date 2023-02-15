
type ProductCardProps = {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
};

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div className="w-96 py-5 px-7 border border-black rounded-xl hover:scale-105 relative overflow-hidden">
      {item.rating.rate > 4 && (
        <div className="absolute left-0 top-0 bg-black px-3 py-1 text-yellow-600 text-xs font-bold rounded-sm">
          Shopkro's choice
        </div>
      )}
      <div className="w-60 h-60 mx-auto mt-2">
        <img src={item.image} alt="/" className="object-fit w-full h-full" />
      </div>
      <h2 className="font-bold text-xl mt-3 whitespace-nowrap truncate">
        {item.title}
      </h2>
      <p className="text-2xl font-semibold mt-2">$ {item.price}</p>
      <button className="bg-green-700 px-5 py-2 text-white rounded-lg text-sm font-bold mt-3">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
