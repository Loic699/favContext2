import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Fav = () => {
  // je recupère la valeur fav et de sa méthode deleFav de AppContext 
  // pour pouvoir afficher les élément des favoris et les supprimer
  const { fav, deleteFav } = useContext(AppContext);
  return (
    <div>
      {fav.map((item, index) => {
        return (<p key={index}>{item.title} <button onClick={() => deleteFav(item)}>Add To Fav</button></p>
          
          );
      })}
    </div>
  );
};

export default Fav;
