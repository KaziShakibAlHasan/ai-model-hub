import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Models from "./components/Models/Models";
import NavBar from "./components/NavBar/NavBar";

const getModels = async () => {
  const res = await fetch("/public/models.json");
  return res.json();
};

const modelPromise = getModels();



function App() {

  const [activeTab, setActiveTab] = useState('model');
  const [carts, setCarts] = useState([])

  return (
    <>
      <NavBar />
      <Banner />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          defaultChecked
          onClick={()=>  setActiveTab('model')}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label={`Cart (${carts.length})`}
          onClick={()=>  setActiveTab('cart')}
        />
        
      </div>
      {activeTab === 'model' && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />}
      {activeTab === 'cart' ? <Card  carts={carts} setCarts={setCarts} /> : null}
      <Footer />
    </>
  );
}

export default App;
