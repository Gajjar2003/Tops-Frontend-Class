import React, { useEffect, useState } from "react";
import axios from "axios";

function RestaurantSearch() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://mocki.io/v1/570c5e5c-8c8b-4c1e-8c8b-4c1e8c8b4c1e"
      )
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, []);

  // Filter restaurants as the user types
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Restaurant Search</h1>

      <input
        type="text"
        placeholder="Search restaurant..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Restaurants</h2>

      {filteredRestaurants.length > 0 ? (
        <ul>
          {filteredRestaurants.map((restaurant, index) => (
            <li key={restaurant.id || index}>
              {restaurant.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No restaurants found.</p>
      )}
    </div>
  );
}

export default RestaurantSearch;