import React from "react";
import "./PLabDesign.css";
import PLabDesignEditButton from "./PLabDesignEditButton";

const PLabDesignEdit = ({ proteinData, allData, proteinNo }) => {
  const data = allData?.filter((p, index) => index === proteinNo - 1);
  const allproteinData = (data && data[0].data.all_data) || [];
  const singleProtein = proteinData ? proteinData : [];

  return (
    <>
      <div
        style={{
          width: "85%",
          display: "block",
          margin: "100px auto 0px auto",
        }}
      >
        <div className="drft-section-title">
          <div className="drft-section-title-info">
            <p>
              <span>7</span> Substitutions: <span>7</span> design-assisted,{" "}
              <span>0</span> Manual
            </p>
          </div>

          <div className="design-edit-assist">
            <p>
              Design-Assist <span>On</span>
            </p>
            <input type="checkbox" id="switch" class="checkbox" />
            <label for="switch" class="toggle" />
          </div>

          <div className="drft-section-title-btn">
            <button className="btn-reset">Reset</button>
          </div>
        </div>
      </div>
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
