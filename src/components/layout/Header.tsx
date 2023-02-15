import SearchBar from "../SearchBar";
import { useNavigate } from "react-router-dom";

const MENU_ITEMS = [
  { id: 1, title: "Home", route: "/" },
  { id: 2, title: "Store", route: "/store" },
  { id: 2, title: "About", route: "/about" },
  { id: 2, title: "Contact Us", route: "/contact" },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="py-5 bg-black fixed left-0 right-0 z-50">
      <div className=" max-w-7xl mx-auto flex justify-between">
        <div className="flex  gap-5 items-center">
          <img
            src="https://shopkaro.today/wp-content/uploads/2022/08/shopkaro-logo.png"
            alt="logo"
            className="h-10 "
          />
          <div className="flex flex-row gap-4  font-semibold text-white">
            {MENU_ITEMS.map((item) => (
              <p
                key={item.id}
                onClick={() => navigate(item.route)}
                className="hover:text-green-500 cursor-pointer"
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
        <div className="flex gap-6">
          <button
            className="bg-green-700 px-4 py-1 rounded text-white font-bold hover:scale-105"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
          <button
            className="bg-green-700 px-4 py-1 rounded text-white font-bold hover:scale-105"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
