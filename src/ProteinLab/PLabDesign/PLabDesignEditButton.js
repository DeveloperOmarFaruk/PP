import React, { useState } from "react";
import classes from "./ProteinButton.module.css";

const PLabDesignEditButton = ({ data, color, subProtein }) => {
  const { amino_acid_1_ltr, sub_1_ltr } = data;

  const [protein, setProtein] = useState(amino_acid_1_ltr);

  console.log("dataaaaa", subProtein);

  return (
    <div>
      <select
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        style={
          color && {
            border: "3px solid green",
          }
        }
        className={
          protein === amino_acid_1_ltr
            ? classes.bg_default
            : protein === sub_1_ltr
            ? classes.bg_green
            : classes.bg_red
        }
      >
        {subProtein.map((sub) => {
          return (
            <option
              value={sub}
              className={classes.bg_default}
            >
              {sub}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PLabDesignEditButton;
