import React, { useEffect, useState } from "react";
import classes from "./ProteinButton.module.css";

const PLabDesignEditButton = ({
  data,
  auto,
  matrix,
  seq_sub,
  reg_sub,
  positionHandler,
  isLoading,
}) => {
  const { amino_acid_1_ltr, Seq_1_ltr, Reg_1_ltr, position } = data;

  const [protein, setProtein] = useState(amino_acid_1_ltr);
  const [flag, setFlag] = useState(true);
  const [ClassName, setClassName] = useState(null);


  useEffect(() => {
    matrix === 1 && Reg_1_ltr === ""
      ? setClassName(classes.bg_default)
      : auto
      ? setClassName(classes.br_green)
      : setClassName(classes.br_b_green);
    matrix === 0 && setClassName(classes.bg_default);
  }, [Reg_1_ltr, auto, matrix]);

  const autoProteinChangeHandler = () => {
    positionHandler(position);

    if (flag) {
      if (matrix === 0) {
        setProtein(Seq_1_ltr);
        setClassName(classes.bg_green_br_red);
      } else if (Reg_1_ltr !== "") {
        setProtein(Reg_1_ltr);
        setClassName(classes.bg_green_br_gray);
      } else {
        setClassName(classes.bg_red_br_gray);
      }
      setFlag(false);
    } else {
      setProtein(amino_acid_1_ltr);
      if (matrix === 0) {
        setClassName(classes.bg_default);
      } else if (Reg_1_ltr !== "") {
        setClassName(classes.br_green);
      }
      setFlag(true);
    }
  };

  const menualProteinChangeHandler = (e) => {
    const selectedOption = e.target.selectedOptions[0];
    const proteinValue = selectedOption.getAttribute("data");
    const { posi } = JSON.parse(proteinValue);
    positionHandler(posi);

    const sub = e.target.value;
    const isAminoAcid1 = sub === amino_acid_1_ltr;
    const isMatrixZero = matrix === 0;
    const isReg1NotEmpty = Reg_1_ltr !== "";

    if (isAminoAcid1) {
      setProtein(sub);
      setClassName(
        isMatrixZero
          ? classes.bg_default
          : isReg1NotEmpty
          ? classes.br_b_green
          : ""
      );
      setFlag(true);
    } else {
      setProtein(sub);
      if (isMatrixZero) {
        setClassName(classes.bg_green_br_red);
      } else if (isReg1NotEmpty) {
        setClassName(classes.bg_green_br_gray);
      } else {
        setClassName(classes.bg_red_br_gray);
      }
      setFlag(false);
    }
  };


  return (
    <div>
      {auto ? (
        <button
          value={protein}
          onClick={autoProteinChangeHandler}
          // onClick={() => setFlag((pre) => pre + 1)}
          className={ClassName}
        >
          {protein}
        </button>
      ) : (
        <select
          value={protein}
          onChange={menualProteinChangeHandler}
          className={ClassName}
        >
          {matrix === 0
            ? seq_sub &&
              seq_sub.map((p, index) => {
                return (
                  <option
                    key={index}
                    value={p.sub}
                    data={JSON.stringify(p)}
                    className={classes.bg_default}
                  >
                    {p.sub}
                  </option>
                );
              })
            : reg_sub &&
              reg_sub.map((p, index) => {
                return (
                  <option
                    key={index}
                    value={p.sub}
                    data={JSON.stringify(p)}
                    className={classes.bg_default}
                  >
                    {p.sub}
                  </option>
                );
              })}
        </select>
      )}
    </div>
  );
};

export default PLabDesignEditButton;
