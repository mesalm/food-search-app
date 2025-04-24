import { useState } from "react";
import "./FoodList.css";
import FoodItem from "../FoodItem/FoodItem";
export default function FoodList({ foodData }) {
  const [id, setId] = useState("");
  return (
    <div className="food-list-container">
      <div>
        {foodData.map((item) => (
          <div key={item.idMeal || item.id} className="food-card">
            <h2 className="food-title">{item.title || item.strMeal}</h2>
            <img
              src={item.image || item.strMealThumb}
              alt={item.title || item.strMeal}
              className="food-img"
            />
            <button onClick={() => setId(item.idMeal || item.id)}>
              details
            </button>
          </div>
        ))}
      </div>
      <FoodItem id={id} />
    </div>
  );
}
