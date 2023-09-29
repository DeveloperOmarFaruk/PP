import React, { useState, useEffect } from "react";
import "./ProteinDesign.css";
import ProteinDesignBacteria from "./ProteinDesignBacteria";
import ProteinDesignVirus from "./ProteinDesignVirus";
import axios from "axios";
import { useSearchParams, useParams } from "react-router-dom";

const ProteinDesign = () => {
  const [bactaria, setBactaria] = useState([]);
  const [virus, setVirus] = useState([]);
  const [type] = useSearchParams();

  useEffect(() => {
    if (type.get("type") !== "virus") {
      axios
        .get(
          `https://protien.catkinsofttech-bd.com/api/product/by_type?product_type=bacteria`
        )
        .then((res) => {
          setBactaria(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(() => {
    if (type.get("type") !== "bacteria") {
      axios
        .get(
          `https://protien.catkinsofttech-bd.com/api/product/by_type?product_type=virus`
        )
        .then((res) => {
          setVirus(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <section>
        <div className="pdesing-title">
          <h1>Protein &nbsp;Design</h1>
          <p>with our position-specific substitution matrices</p>
        </div>

        {type.get("type") !== "virus" && (
          <ProteinDesignBacteria data={bactaria} />
        )}
        {type.get("type") !== "bacteria" && <ProteinDesignVirus data={virus} />}
      </section>
    </>
  );
};

export default ProteinDesign;
