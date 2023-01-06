import React from "react";
import "./PLabDesign.css";
import PLabDesignEditButton from "./PLabDesignEditButton";

const PLabDesignReview = (props) => {
  const graphValue = props.graphValue;

  const spikeValue = graphValue.res ? graphValue.res[0].data.all_data : null;
  const p2Value = graphValue.res ? graphValue.res[1].data.all_data : null;
  const p3Value = graphValue.res ? graphValue.res[2].data.all_data : null;
  const p4Value = graphValue.res ? graphValue.res[3].data.all_data : null;
  const p5Value = graphValue.res ? graphValue.res[4].data.all_data : null;

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
              <span>60</span> Substitutions: <span>57</span> design-assisted,{" "}
              <span>3</span> Manual
            </p>
          </div>

          <div className="drft-section-title-btn">
            <button className="btn-reset">Reset</button>
          </div>
        </div>
      </div>
      <div className="design-review-section">
        <div className="design-review-btns">
          {spikeValue ? (
            spikeValue.map((data) => {
              /*show all available acid and clickable to change background color */

              return (
                <PLabDesignEditButton key={data.id} data={data} color={true} />
              );
            })
          ) : (
            <></>
          )}
        </div>

        <div className="design-review-btns">
          {p2Value ? (
            p2Value.map((data) => {
              /*show all available acid and clickable to change background color */

              return (
                <PLabDesignEditButton key={data.id} data={data} color={true} />
              );
            })
          ) : (
            <></>
          )}
        </div>

        <div className="design-review-btns">
          {p3Value ? (
            p3Value.map((data) => {
              /*show all available acid and clickable to change background color */

              return (
                <PLabDesignEditButton key={data.id} data={data} color={true} />
              );
            })
          ) : (
            <></>
          )}
        </div>

        <div className="design-review-btns">
          {p4Value ? (
            p4Value.map((data) => {
              /*show all available acid and clickable to change background color */

              return (
                <PLabDesignEditButton key={data.id} data={data} color={true} />
              );
            })
          ) : (
            <></>
          )}
        </div>
        <div className="design-review-btns">
          {p5Value ? (
            p5Value.map((data) => {
              /*show all available acid and clickable to change background color */

              return (
                <PLabDesignEditButton key={data.id} data={data} color={true} />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default PLabDesignReview;

{
  /* <>
<div>
          <button>l</button>
          <button>g</button>
          <button>p</button>
          <button style={{ border: "2px solid red" }}>d</button>
          <button>i</button>
          <button>e</button>
          <button>v</button>
          <button style={{ border: "2px solid red" }}>t</button>
          <button style={{ border: "2px solid red" }}>t</button>
          <button>y</button>
          <button>m</button>
          <button>f</button>
          <button>s</button>
          <button>y</button>
          <button>q</button>
        </div>

        <div className="design-review-btns">
          <button>q</button>
          <button>w</button>
          <button>s</button>
          <button>s</button>
          <button>l</button>
          <button>k</button>
          <button>n</button>
          <button>v</button>
          <button>e</button>
          <button>c</button>
          <button>v</button>
          <button>y</button>
          <button>e</button>
          <button>a</button>
          <button>a</button>
        </div>

        <div className="design-review-btns">
          <button>p</button>
          <button>i</button>
          <button>c</button>
          <button>p</button>
          <button>w</button>
          <button>s</button>
          <button>f</button>
          <button>y</button>
          <button>q</button>
          <button>q</button>
          <button>l</button>
          <button>i</button>
          <button>t</button>
          <button>p</button>
          <button>v</button>
        </div>

        <div className="design-review-btns">
          <button>g</button>
          <button>r</button>
          <button>r</button>
          <button>g</button>
          <button>h</button>
          <button>m</button>
          <button>t</button>
          <button>s</button>
          <button>k</button>
          <button>t</button>
          <button>l</button>
          <button>a</button>
          <button>e</button>
          <button>q</button>
          <button>e</button>
        </div>
        </> */
}
