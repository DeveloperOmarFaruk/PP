import React, { useEffect, useState } from "react";
import classes from "./ProteinButton.module.css";

const PLabDesignEditButton = ({
  data,
  auto,
  matrix,
  seq_sub,
  reg_sub,
  positionHandler,
  isLoading
}) => {
  const { amino_acid_1_ltr, Seq_1_ltr, Reg_1_ltr, position } = data;

  const [brGreen, setBrGreen] = useState(true);
  const [protein, setProtein] = useState(amino_acid_1_ltr);
  const [flag, setFlag] = useState(true);
  const [ClassName, setClassName] = useState(classes.bg_default);
  // console.log("dataaaa:", data)
  // useEffect(() => {
  //   switch (flag) {
  //     case 1:
  //       setProtein(amino_acid_1_ltr);
  //       setClassName(classes.bg_default);
  //       break;
  //     case 2:
  //       if (!brGreen) {
  //         setClassName(classes.bg_red);
  //         setFlag(3);
  //       } else {
  //         setProtein(sub_1_ltr);
  //         setClassName(classes.bg_green);
  //       }
  //       break;
  //     case 3:
  //       setClassName(classes.bg_red);
  //       break;
  //     default:
  //       setFlag(1);
  //       break;
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [flag]);

  // useEffect(() => {
  //   setProtein(amino_acid_1_ltr);
  //   if (labs === "Both Labs") {
  //     setBrGreen(true);
  //   }
  // }, [amino_acid_1_ltr, labs]);

  const autoProteinChangeHandler = () => {
    if (flag) {
      matrix ? setProtein(Seq_1_ltr) : setProtein(Reg_1_ltr);
      setClassName(classes.bg_green_br_red);
      setFlag(false);
    } else {
      setProtein(amino_acid_1_ltr);
      setClassName(classes.bg_default);
      setFlag(true);
    }
  };
  const menualProteinChangeHandler = (e) => {
    if (e.target.value === amino_acid_1_ltr) {
      setProtein(e.target.value);
      setClassName(classes.bg_default);
      setFlag(true);
    } else {
      setProtein(e.target.value);
      setClassName(classes.bg_green_br_red);
      setFlag(false);
    }
  };
  // useEffect(() => {
  //   console.log("seq_sub: ", seq_sub);
  //   console.log("reg_sub: ", reg_sub);
  //   console.log("amino", amino_acid_1_ltr, protein);
  // }, [auto]);

  return (
    <div onClick={() => positionHandler(position)}>
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
          onChange={(e) => menualProteinChangeHandler(e)}
          className={ClassName}
        >
          {matrix
            ? seq_sub &&
              seq_sub.map((p, index) => {
                return (
                  <option
                    key={index}
                    value={p.sub}
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
