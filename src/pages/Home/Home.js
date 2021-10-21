import React, { useContext } from "react";
import Fav from "../../components/Fav/Fav";
import { AppContext } from "../../context/AppContext";

const Home = () => {
  // je récupère la variable seance et sa méthode de AppContext pour 
  // afficher les seances et pouvoir l'ajoutée aux favoris
  const { seance, addFav } = useContext(AppContext);

  return (
    <div>
      {seance.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.title}</p>
            <button onClick={() => addFav(item)}>Add To Fav</button>
          </div>
        );
      })}
      <Fav />
    </div>
  );
};

export default Home;
