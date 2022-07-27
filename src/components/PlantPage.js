import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, handleAddItem, handleSearch }) {
  return (
    <main>
      <NewPlantForm plants={plants} handleAddItem={handleAddItem}/>
      <Search handleSearch={handleSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
