import { useState } from "react";
import "./App.css";
import Search from "./components/FoodSearch/Search";
import FoodList from "./components/FoodList/FoodList";
import Navbar from "./components/Nav/Nav";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="app-container">
      <Navbar />
      <Search setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App;
