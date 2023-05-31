import {
  CircularProgress,
  Grid,
  Switch,
  Typography,
  styled,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./PLabDesign.css";
import PLabDesignEditButton from "./PLabDesignEditButton";
import { Stack } from "react-bootstrap";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const PLabDesignEdit = ({
  matrix,
  singleData,
  region,
  positionValue,
  isLoading,
}) => {
  const [seq_sub, setSeq_sub] = useState([]);
  const [reg_sub, setReg_sub] = useState([]);
  const [position, setPosition] = useState(positionValue);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    setPosition(positionValue);

    // collect sub amino acid for sequence.
    setSeq_sub([]);
    singleData?.forEach((element) => {
      setSeq_sub((prev) => [
        ...prev,
        { ag: element.Seq_AG, sub: element.Seq_1_ltr },
      ]);
    });
    // sorting sequence substitutes by descending order
    setSeq_sub((prev) =>
      prev.sort((a, b) => parseFloat(b.ag) - parseFloat(a.ag))
    );

    // collect sub amino acid for regions.
    setReg_sub([]);
    singleData?.forEach((element) =>
      setReg_sub((prev) => [
        ...prev,
        element.Reg_1_ltr!=="" && { ag: element.Reg_AG, sub: element.Reg_1_ltr },
      ])
    );
    // sorting region substitutes by descending order
    setReg_sub((prev) =>
      prev.sort((a, b) => parseFloat(b.ag) - parseFloat(a.ag))
    );
  }, [positionValue, singleData]);

  return (
    <>
      <Grid
        Container
        style={{
          maxWidth: "1010px",
          margin: "100px auto 0px auto",
        }}
        className="d-flex flex-row gap-5 justify-content-between align-items-center"
      >
        <Grid
          item
          spacing={2}
          className="mb-1 gap-3 text-secondary d-flex justify-content-center align-items-center"
        >
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "700", fontSize: "13px" }}>
              AMINO ACIDS &nbsp;
            </Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                display: "inline",
                width: "45px",
                height: "28px",
                lineHeight: "28px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {singleData?.length}
            </span>
          </Grid>
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "700", fontSize: "13px" }}>
              OPTIMIZED LEVEL &nbsp;
            </Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                height: "28px",
                lineHeight: "28px",
                display: "inline",
                width: "45px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {region === 0 ? "All" : region}
            </span>
          </Grid>
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "700", fontSize: "13px" }}>
              POSITION &nbsp;
            </Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                height: "28px",
                lineHeight: "28px",
                display: "inline",
                width: "45px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {position}
            </span>
          </Grid>
          <Grid item className="d-flex align-items-center flex-row">
            <Typography style={{ fontWeight: "700", fontSize: "13px" }}>
              SUBSTITUTIONS:&nbsp;
            </Typography>
            <span
              style={{
                border: "2px solid #6c757d",
                height: "28px",
                lineHeight: "28px",
                display: "inline",
                width: "45px",
                textAlign: "center",
                borderRadius: "5px",
              }}
            >
              {position}
            </span>
          </Grid>
        </Grid>
        <Grid
          item
          className="d-flex flex-row gap-3 justify-content-center align-items-center"
        >
          <Typography style={{ fontWeight: "700", fontSize: "13px" }}>
            AUTO
          </Typography>
          <Stack
            className="text-secondary d-flex flex-row gap-2 align-items-center justify-content-center"
            alignItems="center"
          >
            <Typography style={{ fontWeight: "600", fontSize: "13px" }}>
              Off
            </Typography>
            <AntSwitch
              value={auto}
              onChange={(e) => setAuto(e.target.checked)}
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
            <Typography style={{ fontWeight: "600", fontSize: "13px" }}>
              On
            </Typography>
          </Stack>
          {/* </FormGroup> */}
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
                    auto={auto}
                    matrix={matrix}
                    seq_sub={seq_sub}
                    reg_sub={reg_sub}
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
