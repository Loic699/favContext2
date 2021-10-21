import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext(null);

// création du contexte AppProvider
const AppProvider = ({ children }) => {
  // variable qui initialise un tableau de favoris + sa methode pour le maj
  const [fav, setFav] = useState([]);
  // variable seance qui est un tableau de seances avec sa methode pour le maj
  const [seance, setSeance] = useState([
    {
      id: 1,
      title: "Seance 1",
    },
    {
      id: 2,
      title: "Seance 2",
    },
    {
      id: 3,
      title: "Seance 3",
    },
  ]);

  // fonction pour ajouter aux favoris qui prend en params un item (item = une seance)
  const addFav = (item) => {
    // je regarde si l'item n'est pas deja dans mes favoris
    const isFav = fav.some((e) => e.id === item.id);

    // si il n'y est pas je le met dans le tableau
    if (!isFav) {
      setFav([...fav, item]);
    }
  };

  // fonction pour supprimer un favori qui prend aussi en params un item
  const deleteFav = (item) => {
   // j'affecte à ma variable temporaire "tmpFav" un nouveau tableau qui ne prend en compte 
   //que les elements "e" dont l'id n'est pas egale à l'id de item passé en parametre
    const tmpFav = fav.filter(e => e.id !== item.id);

    // une fois que l'élément est supprimé et que le tableau sans cet élément est
    // stocké dans tmpFav je met à jour fav avec ce tableau
    setFav(tmpFav);
  }

  useEffect(() => {
    console.log(fav);
  }, [fav]);

  return (
    <AppContext.Provider value={{ addFav, seance, fav, deleteFav }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
