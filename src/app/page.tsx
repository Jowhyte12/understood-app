import "./page.css";
import Footer from "./components/footer/footer";
import React from "react";
import Navbar from "./components/navbar/navbar";
export default function Home() {
  return (
    <div>
      <div className="h-screen bg-[url('/17.jpg')] bg-cover bg-center">
        <Navbar />
      </div>
      <div className=" h-screen bg-gradient-to-l from-blue-950 to -purple-500 bg-cover bg-center flex items-center justify-center ">
        <h1 className="font-serif left-140 absolute top-2.5/2 left-1/2">
          <Footer />
        </h1>
      </div>
    </div>
  );
}
