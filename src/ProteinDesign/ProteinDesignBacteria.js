import React, { useState, useEffect } from "react";
import "./ProteinDesign.css";
import ProtienCard from "../Components/ProtienCard";

const ProteinDesignBacteria = ({ data }) => {
  const [indexPrice, setIndexPrice] = useState(0);
  const [circleBtn, setCircleBtn] = useState(0);
  const [pkgName, setPkgName] = useState(0);
  const [cartListed, setCartListed] = useState([]);

  useEffect(() => {
    setCircleBtn(JSON.parse(window.localStorage.getItem("circleBtn")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("circleBtn", circleBtn);
  }, [circleBtn]);

  useEffect(() => {
    setIndexPrice(JSON.parse(window.localStorage.getItem("indexPrice")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("indexPrice", indexPrice);
  }, [indexPrice]);

  useEffect(() => {
    setPkgName(JSON.parse(window.localStorage.getItem("pkgName")));
  }, []);
  useEffect(() => {
    window.localStorage.setItem("pkgName", pkgName);
  }, [pkgName]);

  const cart1 = cartListed.includes(1);
  const cart2 = cartListed.includes(2);
  const cart3 = cartListed.includes(3);
  const cart4 = cartListed.includes(4);
  const cart5 = cartListed.includes(5);
  const cart6 = cartListed.includes(6);
  const cart7 = cartListed.includes(7);
  const cart8 = cartListed.includes(8);
  const cart9 = cartListed.includes(9);
  const cart10 = cartListed.includes(10);
  const cart11 = cartListed.includes(11);
  const cart12 = cartListed.includes(12);
  const cart13 = cartListed.includes(13);
  const cart14 = cartListed.includes(14);
  const cart15 = cartListed.includes(15);
  const cart16 = cartListed.includes(16);
  const cart17 = cartListed.includes(17);
  const cart18 = cartListed.includes(18);
  const cart19 = cartListed.includes(19);
  const cart20 = cartListed.includes(20);
  const cart21 = cartListed.includes(21);
  const cart22 = cartListed.includes(22);
  const cart23 = cartListed.includes(23);
  const cart24 = cartListed.includes(24);
  const cart25 = cartListed.includes(25);
  const cart26 = cartListed.includes(26);
  const cart27 = cartListed.includes(27);
  const cart28 = cartListed.includes(28);
  const cart29 = cartListed.includes(29);
  const cart30 = cartListed.includes(30);
  const cart31 = cartListed.includes(31);
  const cart32 = cartListed.includes(32);
  const cart33 = cartListed.includes(33);
  const cart34 = cartListed.includes(34);
  const cart35 = cartListed.includes(35);
  const cart36 = cartListed.includes(36);
  const cart37 = cartListed.includes(37);
  const cart38 = cartListed.includes(38);
  const cart39 = cartListed.includes(39);
  const cart40 = cartListed.includes(40);
  const cart41 = cartListed.includes(41);
  const cart42 = cartListed.includes(42);
  const cart43 = cartListed.includes(43);
  const cart44 = cartListed.includes(44);
  const cart45 = cartListed.includes(45);
  const cart46 = cartListed.includes(46);
  const cart47 = cartListed.includes(47);
  const cart48 = cartListed.includes(48);
  const cart49 = cartListed.includes(49);
  const cart50 = cartListed.includes(50);
  const cart51 = cartListed.includes(51);
  const cart52 = cartListed.includes(52);
  const cart53 = cartListed.includes(53);
  const cart54 = cartListed.includes(54);
  const cart55 = cartListed.includes(55);
  const cart56 = cartListed.includes(56);
  const cart57 = cartListed.includes(57);
  const cart58 = cartListed.includes(58);
  const cart59 = cartListed.includes(59);
  const cart60 = cartListed.includes(60);
  const cart61 = cartListed.includes(61);
  const cart62 = cartListed.includes(62);
  const cart63 = cartListed.includes(63);
  const cart64 = cartListed.includes(64);
  const cart65 = cartListed.includes(65);
  const cart66 = cartListed.includes(66);
  const cart67 = cartListed.includes(67);
  const cart68 = cartListed.includes(68);
  const cart69 = cartListed.includes(69);
  const cart70 = cartListed.includes(70);
  const cart71 = cartListed.includes(71);
  const cart72 = cartListed.includes(72);
  const cart73 = cartListed.includes(73);
  const cart74 = cartListed.includes(74);
  const cart75 = cartListed.includes(75);
  const cart76 = cartListed.includes(76);
  const cart77 = cartListed.includes(77);
  const cart78 = cartListed.includes(78);
  const cart79 = cartListed.includes(79);
  const cart80 = cartListed.includes(80);
  const cart81 = cartListed.includes(81);
  const cart82 = cartListed.includes(82);
  const cart83 = cartListed.includes(83);
  const cart84 = cartListed.includes(84);
  const cart85 = cartListed.includes(85);
  const cart86 = cartListed.includes(86);
  const cart87 = cartListed.includes(87);
  const cart88 = cartListed.includes(88);
  const cart89 = cartListed.includes(89);
  const cart90 = cartListed.includes(90);
  const cart91 = cartListed.includes(91);
  const cart92 = cartListed.includes(92);
  const cart93 = cartListed.includes(93);
  const cart94 = cartListed.includes(94);
  const cart95 = cartListed.includes(95);
  const cart96 = cartListed.includes(96);
  const cart97 = cartListed.includes(97);
  const cart98 = cartListed.includes(98);
  const cart99 = cartListed.includes(99);
  const cart100 = cartListed.includes(100);

  // useEffect(() => {
  //   setCartListed(JSON.parse(window.localStorage.getItem("cartListed")));
  // }, []);

  return (
    <>
      <section className="pdesing-section">
        <div>
          <div className="pdesign-protein-title">
            <h5>Bacteria</h5>
            <p>Protein Platforms</p>
            {/* {packageName ? (
              <p>
                {packageName.charAt(0).toUpperCase() + packageName.slice(1)}{" "}
                Packages
              </p>
            ) : (
              <p>Researcher Packages</p>
            )} */}

            {pkgName === 0 && <p>Researcher Packages</p>}

            {pkgName === 1 && <p>Designer Packages</p>}

            {pkgName === 2 && <p>Leader Packages</p>}

            <div className="pdesign-card-multi-btn">
              {cart1 ||
              cart2 ||
              cart3 ||
              cart4 ||
              cart5 ||
              cart6 ||
              cart7 ||
              cart8 ||
              cart9 ||
              cart10 ||
              cart11 ||
              cart12 ||
              cart13 ||
              cart14 ||
              cart15 ||
              cart16 ||
              cart17 ||
              cart18 ||
              cart19 ||
              cart20 ||
              cart21 ||
              cart22 ||
              cart23 ||
              cart24 ||
              cart25 ||
              cart26 ||
              cart27 ||
              cart28 ||
              cart29 ||
              cart30 ||
              cart31 ||
              cart32 ||
              cart33 ||
              cart34 ||
              cart35 ||
              cart36 ||
              cart37 ||
              cart38 ||
              cart39 ||
              cart40 ||
              cart41 ||
              cart42 ||
              cart43 ||
              cart44 ||
              cart45 ||
              cart46 ||
              cart47 ||
              cart48 ||
              cart49 ||
              cart50 ||
              cart51 ||
              cart52 ||
              cart53 ||
              cart54 ||
              cart55 ||
              cart56 ||
              cart57 ||
              cart58 ||
              cart59 ||
              cart60 ||
              cart61 ||
              cart62 ||
              cart63 ||
              cart64 ||
              cart65 ||
              cart66 ||
              cart67 ||
              cart68 ||
              cart69 ||
              cart70 ||
              cart71 ||
              cart72 ||
              cart73 ||
              cart74 ||
              cart75 ||
              cart76 ||
              cart77 ||
              cart78 ||
              cart79 ||
              cart80 ||
              cart81 ||
              cart82 ||
              cart83 ||
              cart84 ||
              cart85 ||
              cart86 ||
              cart87 ||
              cart88 ||
              cart89 ||
              cart90 ||
              cart91 ||
              cart92 ||
              cart93 ||
              cart94 ||
              cart95 ||
              cart96 ||
              cart97 ||
              cart98 ||
              cart99 ||
              cart100 ? (
                <>
                  {pkgName === 0 && (
                    <button
                      key={0}
                      onClick={() => {
                        setCircleBtn(0);
                        setIndexPrice(0);
                        setPkgName(0);
                      }}
                      className={` ${
                        circleBtn === 0
                          ? "pdesign-card-multi-btn-circle-researcher active-circle-btn"
                          : " pdesign-card-multi-btn-circle-researcher"
                      }`}
                    ></button>
                  )}

                  {pkgName === 1 && (
                    <button
                      key={1}
                      onClick={() => {
                        setCircleBtn(1);
                        setIndexPrice(1);
                        setPkgName(1);
                      }}
                      className={` ${
                        circleBtn === 1
                          ? "pdesign-card-multi-btn-circle-designer active-circle-btn"
                          : " pdesign-card-multi-btn-circle-designer"
                      }`}
                    ></button>
                  )}

                  {pkgName === 2 && (
                    <button
                      key={2}
                      onClick={() => {
                        setCircleBtn(2);
                        setIndexPrice(2);
                        setPkgName(2);
                      }}
                      className={` ${
                        circleBtn === 2
                          ? " pdesign-card-multi-btn-circle-leader active-circle-btn"
                          : " pdesign-card-multi-btn-circle-leader"
                      }`}
                    ></button>
                  )}
                </>
              ) : (
                <>
                  <button
                    key={0}
                    onClick={() => {
                      setCircleBtn(0);
                      setIndexPrice(0);
                      setPkgName(0);
                    }}
                    className={` ${
                      circleBtn === 0
                        ? "pdesign-card-multi-btn-circle-researcher active-circle-btn"
                        : " pdesign-card-multi-btn-circle-researcher"
                    }`}
                  ></button>

                  <button
                    key={1}
                    onClick={() => {
                      setCircleBtn(1);
                      setIndexPrice(1);
                      setPkgName(1);
                    }}
                    className={` ${
                      circleBtn === 1
                        ? "pdesign-card-multi-btn-circle-designer active-circle-btn"
                        : " pdesign-card-multi-btn-circle-designer"
                    }`}
                  ></button>

                  <button
                    key={2}
                    onClick={() => {
                      setCircleBtn(2);
                      setIndexPrice(2);
                      setPkgName(2);
                    }}
                    className={` ${
                      circleBtn === 2
                        ? " pdesign-card-multi-btn-circle-leader active-circle-btn"
                        : " pdesign-card-multi-btn-circle-leader"
                    }`}
                  ></button>
                </>
              )}
            </div>

            {/* {packageName ? (
              <>
                {packageName === 0 && <p>Researcher Packages</p>}

                {packageName === 1 && <p>Designer Packages</p>}

                {packageName === 2 && <p>Leader Packages</p>}
              </>
            ) : (
              <p>Researcher Packages</p>
            )} */}
          </div>

          <div className="row">
            {data?.map((item) => {
              return (
                <>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <ProtienCard
                      item={item}
                      key={item.id}
                      indexPrice={indexPrice}
                      pkgName={pkgName}
                      setCartListed={setCartListed}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProteinDesignBacteria;
