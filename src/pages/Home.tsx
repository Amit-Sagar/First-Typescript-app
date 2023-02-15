import { useEffect, useState } from "react";
import Layout from "../components/layout";
import ProductCard from "../components/ProductCard";
import { apiFetch } from "../hooks/apiFetch";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    apiFetch.get("/products").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <Layout>
      <div className="py-20">
        <div>
          <img
            src="https://t4.ftcdn.net/jpg/02/30/72/41/360_F_230724124_ZWlHSZBIvqvdJQj9at15WaKRqAtCUKTu.jpg"
            className="w-full h-auto object-cover"
          />
        </div>
          <h1 className="text-5xl font-bold max-w-7xl mx-auto my-5">Explore our Store</h1>
        <div className="flex flex-wrap gap-10 w-[90%] mx-auto max-w-7xl  bg">
          {data?.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
