import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data)
      });
  }, []);

  function handleAddItem(newItem) {
    setPlants([...plants, newItem]);
  }

  function handleSearch(search) {
    if(search === ''){
      fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data)
      });
    }
    else{
      search = search.charAt(0).toUpperCase()
    }
    const itemsToDisplay = plants.filter((item) => {
      if(item.name.startsWith(search) === true){
        return item
      }
    })
    setPlants(itemsToDisplay)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleAddItem={handleAddItem} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
