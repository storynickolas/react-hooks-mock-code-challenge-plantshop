import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const items = plants.map((plant) => <PlantCard key={plant.id} plant={plant}></PlantCard>)


  return (
    <ul className="cards">{items}</ul>
  );
}

export default PlantList;
