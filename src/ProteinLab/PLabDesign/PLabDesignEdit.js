import React from "react";
import "./PLabDesign.css";
import PLabDesignEditButton from "./PLabDesignEditButton";

const PLabDesignEdit = (props) => {
  const allGraphValue = props.allGraphValue;
  const graphValue = props.graphValue;

  console.log(graphValue);

  const spike = allGraphValue.res ? allGraphValue.res[0].data.all_data : null;
  const p2 = allGraphValue.res ? allGraphValue.res[1].data.all_data : null;
  const p3 = allGraphValue.res ? allGraphValue.res[2].data.all_data : null;
  const p4 = allGraphValue.res ? allGraphValue.res[3].data.all_data : null;
  const p5 = allGraphValue.res ? allGraphValue.res[4].data.all_data : null;

  console.log("spikeeeee", spike);

  const spikeValue = graphValue.res ? graphValue.res[0].data.all_data : null;
  const p2Value = graphValue.res ? graphValue.res[1].data.all_data : null;
  const p3Value = graphValue.res ? graphValue.res[2].data.all_data : null;
  const p4Value = graphValue.res ? graphValue.res[3].data.all_data : null;
  const p5Value = graphValue.res ? graphValue.res[4].data.all_data : null;

  console.log("spikevalueeeee", spikeValue);
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
          {spike ? (
            spike.map((data) => {
              /*show all available acid and clickable to change background color */
              if (
                /* if spikeValue contains this object data then border will be greeen otherwise gray */
                spikeValue &&
                spikeValue.some((value) => value.id === data.id)
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
            })
          ) : (
            <></>
          )}
        </div>
        <div className="design-edit-btns">
          {p2 ? (
            p2.map((data) => {
              if (p2Value && p2Value.some((value) => value.id === data.id)) {
                return (
                  <PLabDesignEditButton
                    key={data.id}
                    data={data}
                    color={true}
                  />
                );
              }
              return <PLabDesignEditButton key={data.id} data={data} />;
            })
          ) : (
            <></>
          )}
        </div>
        <div className="design-edit-btns">
          {p3 ? (
            p3.map((data) => {
              if (p3Value && p3Value.some((value) => value.id === data.id)) {
                return (
                  <PLabDesignEditButton
                    key={data.id}
                    data={data}
                    color={true}
                  />
                );
              }
              return <PLabDesignEditButton key={data.id} data={data} />;
            })
          ) : (
            <></>
          )}
        </div>
        <div className="design-edit-btns">
          {p4 ? (
            p4.map((data) => {
              if (p4Value && p4Value.some((value) => value.id === data.id)) {
                return (
                  <PLabDesignEditButton
                    key={data.id}
                    data={data}
                    color={true}
                  />
                );
              }
              return <PLabDesignEditButton key={data.id} data={data} />;
            })
          ) : (
            <></>
          )}
        </div>
        <div className="design-edit-btns">
          {p5 ? (
            p5.map((data) => {
              if (p5Value && p5Value.some((value) => value.id === data.id)) {
                return (
                  <PLabDesignEditButton
                    key={data.id}
                    data={data}
                    color={true}
                  />
                );
              }
              return <PLabDesignEditButton key={data.id} data={data} />;
            })
          ) : (
            <></>
          )}
        </div>
        {/* <div className="design-edit-btns">
          <button>r</button>
          <button>e</button>
          <button>g</button>
          <button style={{ color: "#ffffff", backgroundColor: "green" }}>
            d
          </button>
          <button>m</button>
          <button>a</button>
          <button style={{ color: "#ffffff", backgroundColor: "green" }}>
            v
          </button>
          <button>p</button>
          <button>e</button>
          <button>l</button>
          <button>k</button>
          <button>v</button>
          <button>s</button>
          <button>l</button>
          <button>s</button>
        </div>

        <div className="design-edit-btns">
          <button>c</button>
          <button>h</button>
          <button>p</button>
          <button>p</button>
          <button>e</button>
          <button>v</button>
          <button>h</button>
          <button>e</button>
          <button style={{ color: "#ffffff", backgroundColor: "green" }}>
            e
          </button>
          <button>s</button>
          <button>d</button>
          <button>w</button>
          <button>i</button>
          <button>m</button>
          <button>r</button>
        </div>

        <div className="design-edit-btns">
          <button>v</button>
          <button style={{ color: "#ffffff", backgroundColor: "green" }}>
            i
          </button>
          <button>t</button>
          <button>t</button>
          <button>c</button>
          <button style={{ color: "#ffffff", backgroundColor: "green" }}>
            s
          </button>
          <button>a</button>
          <button>r</button>
          <button>w</button>
          <button>p</button>
          <button>s</button>
          <button>h</button>
          <button style={{ color: "#ffffff", backgroundColor: "green" }}>
            t
          </button>
          <button>y</button>
          <button>d</button>
        </div> */}

        {/* <div className="design-edit-btns">
          <button>l</button>
          <button>y</button>
          <button>g</button>
          <button>g</button>
          <button>e</button>
          <button>i</button>
          <button>t</button>
          <button>i</button>
          <button style={{ color: "#ffffff", backgroundColor: "green" }}>
            k
          </button>
          <button>r</button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div> */}
      </div>
    </>
  );
};

export default PLabDesignEdit;
