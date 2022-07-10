import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    // category
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    // search term
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="ShoppingList">
      <ItemForm handleItemFormSubmit={handleItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} 
              search={search}
              onSearchChange={setSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
