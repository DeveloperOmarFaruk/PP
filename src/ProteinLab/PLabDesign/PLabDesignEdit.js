import { CircularProgress, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./PLabDesign.css";
import PLabDesignEditButton from "./PLabDesignEditButton";

const PLabDesignEdit = ({
  design,
  singleData,
  region,
  positionValue,
  isLoading,
}) => {
  const [bothLab, setBothLab] = useState([]);
  const [designLab, setDesignLab] = useState([]);
  const [position, setPosition] = useState("");
  const [auto, setAuto] = useState(0);
  const [menual, setMenual] = useState(0);

  useEffect(() => {
    setPosition(positionValue);

    // calculate auto and menual value
    setAuto(0);
    setMenual(0);
    singleData?.forEach((p, index) => {
      p.labs === "Both Labs"
        ? setAuto((prev) => prev + 1)
        : setMenual((prev) => prev + 1);
    });

    // collect amino acid for both labs and design labs.
    setBothLab([]);
    setDesignLab([]);
    singleData?.forEach((element) => {
      element.labs === "Both Labs"
        ? setBothLab((prev) => [...prev, element.amino_acid_1_ltr])
        : setDesignLab((prev) => [...prev, element.amino_acid_1_ltr]);
    });
  }, [positionValue, singleData]);

  return (
    <>
      <Grid
        Container
        style={{
          width: "100%",
          margin: "100px auto 0px auto",
          fontWeight: "600",
        }}
      >
        <Grid
          container
          spacing={2}
          className="mb-2 text-secondary d-flex justify-content-center align-items-center"
        >
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "600" }}>
              AMINO ACIDS &nbsp;
            </Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                display: "inline",
                width: "60px",
                height: "35px",
                lineHeight: "32px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {singleData?.length}
            </span>
          </Grid>
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "600" }}>OPTIMIZED LEVEL &nbsp;</Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                height: "35px",
                lineHeight: "32px",
                display: "inline",
                width: "60px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {region === 0 ? "All" : region}
            </span>
          </Grid>
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "600" }}>
              POSITION &nbsp;
            </Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                height: "35px",
                lineHeight: "32px",
                display: "inline",
                width: "60px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {position}
            </span>
          </Grid>
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "600" }}>
              SUBSTITUTIONS:&nbsp;
            </Typography>
            <Grid item className="d-flex align-items-center flex-row">
              <Typography>AUTO&nbsp;</Typography>
              <span
                style={{
                  border: "2px solid #6c757d",
                  height: "35px",
                  lineHeight: "32px",
                  display: "inline",
                  marginRight: "5px",
                  width: "60px",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              >
                {auto}
              </span>
            </Grid>
            <Grid item className="d-flex align-items-center flex-row">
              <Typography>MENUAL&nbsp;</Typography>
              <span
                style={{
                  border: "2px solid #6c757d",
                  height: "35px",
                  lineHeight: "32px",
                  display: "inline",
                  width: "60px",
                  textAlign: "center",
                  borderRadius: "5px",
                }}
              >
                {auto + menual}
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="design-edit-section">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <CircularProgress color="primary" />
          </div>
        ) : (
          <div className="design-edit-btns">
            {singleData &&
              singleData.map((data, index) => {
                return (
                  <PLabDesignEditButton
                    key={index}
                    data={data}
                    design={design}
                    bothLab={[...new Set(bothLab)]}
                    designLab={[...new Set(designLab)]}
                    positionHandler={(posi) => setPosition(posi)}
                    isLoading={isLoading}
                  />
                );
              })}
          </div>
        )}
      </div>
    </>
  );
};

export default PLabDesignEdit;
