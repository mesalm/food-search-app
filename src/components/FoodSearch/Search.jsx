import { useEffect, useState } from "react";
import "./Search.css";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKay = import.meta.env.VITE_API_KEY;
// eslint-disable-next-line no-unused-vars
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${apiKay}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
