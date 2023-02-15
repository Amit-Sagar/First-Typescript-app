import React from "react";
import Input from "../components/Input";
import Header from "../components/layout/Header";

const Login = () => {
  return (
    <div className="bg-black h-full">
      <Header />
      <div className="flex flex-col gap-10 justify-center items-center py-32">
        <img
          src="https://shopkaro.today/wp-content/uploads/2022/08/shopkaro-logo.png"
          alt="logo"
          className="w-96 h-auto"
        />
        <div className="w-96 flex flex-col gap-4 bg-white/[0.05] p-10 rounded-lg">
          <Input label="Email" classes="p-3 rounded-md" />
          <Input label="Password" classes="p-3 rounded-md" />
          <p className="text-white">Forgot Password</p>
          <button className="bg-green-700 py-3 rounded-lg text-white text-xl font-bold">
            Log in
          </button>
          <p className="text-white text-xs">
            If you don't have account.Please <span className="text-green-300 underline cursor-pointer">Sign up</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
