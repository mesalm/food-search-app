import { useEffect, useState } from "react";
import "./FoodItem.css";
const url = "https://api.spoonacular.com/recipes/";
const apiKey = import.meta.env.VITE_API_KEY;

export default function FoodItem({ id }) {
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFood() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${url}${id}/information?apiKey=${apiKey}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setFoodData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchFood();
    }
  }, [id]);

  if (loading) return <p></p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="foodItemContainer">
      {foodData && (
        <div className="foodItemContent">
          {foodData.image && (
            <img
              src={foodData.image}
              alt={foodData.title}
              className="foodImage"
            />
          )}
          <h1 className="foodTitle">{foodData.title}</h1>
          <h3 className="foodInfo">
            Vegetarian: {foodData.vegetarian ? "Vegetarian" : "Not Vegetarian"}
          </h3>
          <h3 className="foodInfo">
            {foodData.glutenFree ? "Gluten Free" : "Not Gluten Free"}
          </h3>
          <h3 className="foodInfo">
            Preparation Time: {foodData.preparationMinutes} min
          </h3>
          <h4 className="instructionsTitle">Instructions</h4>
          <div
            className="instructions"
            dangerouslySetInnerHTML={{ __html: foodData.instructions }}
          />
        </div>
      )}
    </div>
  );
}
