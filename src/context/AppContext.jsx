import React, { createContext, useEffect, useState } from "react";
export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [fav, setFav] = useState([]);
  const [seance, setSeance] = useState([
    {
      id: 1,
      title: "Ohohoho",
    },
    {
      id: 2,
      title: "Ahahaha",
    },
    {
      id: 3,
      title: "Ihihihi",
    },
  ]);

  const addFav = (item) => {
    // je regarde si l'item n'est pas deja dans mes favoris
    const isFav = fav.some((e) => e.id === item.id);

    // si il n'y est pas je le met dans le tableau
    if (!isFav) {
      setFav([...fav, item]);
    }
  };

  useEffect(() => {
    console.log(fav);
  }, [fav]);

  return (
    <AppContext.Provider value={{ addFav, seance, fav }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
