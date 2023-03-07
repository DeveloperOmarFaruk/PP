import React, { useState } from "react";

const PLabDesignEditButton = (props) => {
  const data = props.data;
  const color = props.color;

  const [showAcid, setShowAcid] = useState(true);

  const changeAcidName = () => {
    setShowAcid(!showAcid);
  };

  return (
    <div onClick={() => changeAcidName()}>
      {/* if showAcid true then print amino_acid_1_ltr otherwise sub_1_ltr */}
      {showAcid ? (
        <button
          style={
            color
              ? {
                  border: "3px solid green",
                }
              : {}
          }
        >
          {data.amino_acid_1_ltr}
        </button>
      ) : (
        <button
          style={{
            color: "#ffffff",
            backgroundColor: "green",
            border: "2px solid #a9a9a9",
          }}
        >
          {data.sub_1_ltr}
        </button>
      )}
    </div>
  );
};

export default PLabDesignEditButton;
