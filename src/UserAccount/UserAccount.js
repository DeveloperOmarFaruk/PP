import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserAccount.css";

const UserAccount = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://protien.catkinsofttech-bd.com/api/product/list`)
      .then((res) => {
        setAllData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      {/* <div>
        {allData.map(
          (data, key) =>
            data.complimentary && (
              <>
                <p>Type: {data.type}</p>
                <p>Organism: {data.organism_name}</p>
                <p>Protein: {data.protein_name}</p>
                <p>Amino Acids: {data.amino_acids}</p>
                <p>PMS Tables: {data.pms_tables}</p>
                <p>PMR Tables: {data.pmr_tables}</p>
                <p>PMR Positions: {data.pmr_positions}</p>
                <p>NCBI ID: {data.ncbi_id}</p>
                <p>UniProt ID: {data.uniport_id}</p>
                <img
                  src={`https://protien.catkinsofttech-bd.com/${data.image_path}`}
                ></img>
              </>
            )
        )}
      </div> */}
      <div className="user-account-section">
        <div className="user-account-container">
          <div className="cart-sumary-title cart-sumary-title-user">
            <p>Free products for Start Designing</p>
          </div>

          {allData.map(
            (data, key) =>
              data.complimentary && (
                <div className="cart-container-product ">
                  <div className="cart-col-4 user-cart-col">
                    <img
                      src={`https://protien.catkinsofttech-bd.com/${data.image_path}`}
                      alt={`https://protien.catkinsofttech-bd.com/${data.image_path}`}
                    />
                  </div>

                  <div className="cart-col-4 user-cart-col user-cart-title">
                    <p>
                      {data.protein_name} <br /> Leader Package <br /> PMS & PMR
                    </p>
                  </div>

                  <div className="cart-col-4 cart-prouct-amount user-cart-col">
                    <p>$ Free</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default UserAccount;
