import React from "react";

import Pet from "./Pet";

function PetBrowser({pets,setPets}) {

  function adoptPet(pet){
    fetch(`http://localhost:3001/pets/${pet.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        isAdopted: true
      }),
    })
    .then((resp) => resp.json())
    .then((updatedPet) => setPets((prevPets) => prevPets.map((p) => p.id === updatedPet.id ? updatedPet : p)))
  }

  const displayPets = pets.map((pet) => <Pet key={pet.id} pet={pet} adoptPet={adoptPet} />)

  return <div className="ui cards">{displayPets}</div>;
}

export default PetBrowser;
