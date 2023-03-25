import React, { useEffect, useState } from "react";
import classes from "./ProteinButton.module.css";

const PLabDesignEditButton = ({ data, color, subProtein, positionHandler }) => {
  const { amino_acid_1_ltr, sub_1_ltr, position } = data;

  const [protein, setProtein] = useState(amino_acid_1_ltr);

  // console.log("dataaaaa", data);
  useEffect(() => {
    setProtein(amino_acid_1_ltr);
  }, [amino_acid_1_ltr]);

  return (
    <div onClick={() => positionHandler(position)}>
      <select
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        className={`${color && classes.br_green}
          ${
            protein === amino_acid_1_ltr
              ? classes.bg_default
              : protein === sub_1_ltr
              ? classes.bg_green
              : classes.bg_red
          }`}
      >
        {subProtein.map((sub, index) => {
          return (
            <option key={index} value={sub} className={classes.bg_default}>
              {sub}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PLabDesignEditButton;
