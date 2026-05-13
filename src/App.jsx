import "./App.css";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Models from "./components/Models/Models";
import NavBar from "./components/NavBar/NavBar";


const getModels = async () => {
  const res = await fetch('/public/models.json')
  return res.json();
}


const modelPromise = getModels();

function App() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <Models modelPromise={modelPromise}/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App;
