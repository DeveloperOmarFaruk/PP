import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./PLabDesign.css";
import PLabDesignEditButton from "./PLabDesignEditButton";

const PLabDesignEdit = ({ proteinData, allData, proteinNo, region }) => {
  const data = allData?.filter((p, index) => index === proteinNo - 1);
  const allproteinData = (data && data[0].data.all_data) || [];
  const singleProtein = proteinData ? proteinData : [];

  

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
              }}
            >
              {allproteinData.length}
            </span>
          </Grid>
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "600" }}>REGION &nbsp;</Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                padding: "3px 8px",
                display: "inline",
              }}
            >
              {region===0?"All":region}
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
              }}
            >
              222
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
                }}
              >
                222
              </span>
            </Grid>
            <Grid item className="d-flex align-items-center flex-row">
              <Typography>MENUAL&nbsp;</Typography>
              <span
                style={{
                  border: "2px solid #6c757d",
                  padding: "3px 5px",
                  display: "inline",
                }}
              >
                222
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
                  />
                );
              }
              return <PLabDesignEditButton key={data.id} data={data} />;
            })}
        </div>
      </div>
    </>
  );
};

export default PLabDesignEdit;
