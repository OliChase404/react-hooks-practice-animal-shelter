import React from "react";

function Pet({pet, adoptPet}) {

  let genderSymb = ''
  if(pet.gender === 'male'){
    genderSymb = '♂'
  } else {genderSymb = '♀'}

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {genderSymb + ' '}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}lbs </p>
        </div>
      </div>
      <div className="extra content">
        <button className={pet.isAdopted ? "ui primary button" : "ui disabled button"}>{pet.isAdopted ? 'Already adopted' : 'Still Avaliable'}</button>
        <button onClick={() => adoptPet(pet)} className={pet.isAdopted ? "ui disabled button" : "ui primary button"}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
