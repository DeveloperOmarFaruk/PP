import React, { useEffect, useState } from "react";
import classes from "./ProteinButton.module.css";

const PLabDesignEditButton = ({
  data,
  design,
  bothLab,
  designLab,
  positionHandler,
}) => {
  const { amino_acid_1_ltr, sub_1_ltr, position, labs } = data;

  const [brGreen, setBrGreen] = useState(false);
  const [protein, setProtein] = useState(amino_acid_1_ltr);
  const [flag, setFlag] = useState(1);
  const [ClassName, setClassName] = useState(classes.bg_default);

  useEffect(() => {
    switch (flag) {
      case 1:
        setProtein(amino_acid_1_ltr);
        setClassName(classes.bg_default);
        break;
      case 2:
        if (!brGreen) {
          setClassName(classes.bg_red);
          setFlag(3);
        } else {
          setProtein(sub_1_ltr);
          setClassName(classes.bg_green);
        }
        break;
      case 3:
        setClassName(classes.bg_red);
        break;
      default:
        setFlag(1);
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  useEffect(() => {
    setProtein(amino_acid_1_ltr);
    if (labs === "Both Labs") {
      setBrGreen(true);
    }
  }, [amino_acid_1_ltr, labs]);

  return (
    <div onClick={() => positionHandler(position)}>
      {design === 10 && (
        <button
          value={protein}
          onClick={() => setFlag((pre) => pre + 1)}
          className={`${brGreen && classes.br_green} ${ClassName}`}
        >
          {protein}
        </button>
      )}
      {design === 20 && (
        <select
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          className={`${brGreen && classes.br_green}
          ${
            protein === amino_acid_1_ltr
              ? classes.bg_default
              : protein === sub_1_ltr
              ? classes.bg_green
              : classes.bg_red
          }`}
        >
          {brGreen &&
            bothLab &&
            bothLab.map((sub, index) => {
              return (
                <option key={index} value={sub} className={classes.bg_default}>
                  {sub}
                </option>
              );
            })}
          {!brGreen &&
            designLab &&
            designLab.map((sub, index) => {
              return (
                <option key={index} value={sub} className={classes.bg_default}>
                  {sub}
                </option>
              );
            })}
        </select>
      )}
    </div>
  );
};

export default PLabDesignEditButton;
