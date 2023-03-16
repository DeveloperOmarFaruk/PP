import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./PLabDesign.css";
import PLabDesignEditButton from "./PLabDesignEditButton";

const PLabDesignEdit = ({
  proteinData,
  allData,
  proteinNo,
  region,
  positionValue,
}) => {
  const [allproteinData, setAllProteinData] = useState([]);
  const [singleProtein, setSingleProtein] = useState([]);
  const [subProtein, setSubProtein] = useState([]);
  const [position, setPosition] = useState("");
  const [auto, setAuto] = useState(0);
  const [menual, setMenual] = useState(0);

  useEffect(() => {
    setPosition(positionValue);

    //collect all data of single protein.
    const data = allData?.filter((p, index) => index === proteinNo - 1);
    const allprotein = data && data[0].data.all_data;
    setAllProteinData(allprotein);

    // calculate auto and menual value
    setAuto(0);
    setMenual(0);
    allprotein?.forEach((p, index) => {
      p.labs === "Both Labs"
        ? setAuto((prev) => prev + 1)
        : setMenual((prev) => prev + 1);
    });

    // collect only sub protein values.
    setSubProtein([]);
    allprotein?.forEach((element) => {
      element.sub_1_ltr &&
        setSubProtein((prev) => [...prev, element.sub_1_ltr]);
    });
  }, [allData, positionValue, proteinNo]);

  useEffect(() => {
    proteinData ? setSingleProtein(proteinData) : setSingleProtein([]);
  }, [proteinData]);

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
                padding: "3px 5px",
                display: "inline",
                width: "60px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {allproteinData?.length}
            </span>
          </Grid>
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "600" }}>REGION &nbsp;</Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                padding: "3px 8px",
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
                padding: "3px 5px",
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
                  padding: "3px 5px",
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
                  padding: "3px 5px",
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
        <div className="design-edit-btns">
          {allproteinData &&
            allproteinData?.map((data) => {
              if (
                singleProtein &&
                singleProtein.some((value) => data.id === value.id)
              ) {
                return (
                  <PLabDesignEditButton
                    key={data.id}
                    data={data}
                    color={true}
                    subProtein={subProtein}
                    positionHandler={(posi) => setPosition(posi)}
                  />
                );
              }
              return (
                <PLabDesignEditButton
                  key={data.id}
                  data={data}
                  subProtein={subProtein}
                  positionHandler={(posi) => setPosition(posi)}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PLabDesignEdit;
