import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Fav = () => {
  const { fav } = useContext(AppContext);
  return (
    <div>
      {fav.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </div>
  );
};

export default Fav;
