import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState('all');

  console.log(filters)

  useEffect(() =>{
    fetch('http://localhost:3001/pets')
    .then((resp) => resp.json())
    .then((petData) => setPets(petData))
  }, [])
  
  function searchPets(){
      let cata = `?type=${filters}`
      if (filters ==='all'){ cata = ''}
      fetch(`http://localhost:3001/pets${cata}`)
      .then((resp) => resp.json())
      .then((petData) => setPets(petData))
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters searchPets={searchPets} setFilters={setFilters} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} setPets={setPets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
