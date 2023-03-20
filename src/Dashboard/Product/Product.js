import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Product.css";
import "../Users/Users.css";
import bacteria from "../../Images/bacteria.jpg";
import axios from "axios";

const Product = ({
  all_product,
  updateProductList,
  deleteFromProductList,
  editProducList,
}) => {
  // Modal State
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [product, setProduct] = useState([]);

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => {
    setType("");
    setTitle("");
    setServiceList([{}]);
    setAddShow(true);
  };


  const handleEditClose = () => setEditShow(false);

  const handleEditShow = (id) => {
    setProductId(id);
    axios
      .get(`https://protein.catkinsofttech-bd.xyz/api/product/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setType(res.data.product_type);
        setServiceList(res.data.variants);
        setEditableData(res.data);
        setProduct(res.data)
        setEditShow(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  // Product Input State
  const [serviceList, setServiceList] = useState([]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
    setEditableData((prevState) => ({ ...prevState, variants: list }));
  };

  const handleVPriceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    let variant_type = (index === 0) ? "starter" : (index === 1) ? "researcher" : "designer";
    list[index]["variant_type"] = variant_type;
    setServiceList(list);
    setEditableData((prevState) => ({ ...prevState, variants: list }));
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
    setEditableData((prevState) => ({ ...prevState, variants: list }));
  };

  // Select Input State
  const [type, setType] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [productId, setProductId] = React.useState("");
  const [productPhoto, setProductPhoto] = React.useState();
  const [orderPagePhoto, setOrderPagePhoto] = React.useState();
  const [editableData, setEditableData] = React.useState();
  const [productData, setProductData] = React.useState({'complimentary': false});

  const handleProductData = (event) => {
      setProductData(prevState => ({...prevState, [event.target.name]: event.target.value}))
  }

  const handleProductEdit = (event) => {
      setEditableData(prevState => ({...prevState, [event.target.name]: event.target.value}))
  }

  const handleComplimentary = (event) => {
     setProductData(prevState => ({...prevState, [event.target.name]: event.target.checked}))
  }

  const handleEditComplimentary = (event) => {
     setEditableData(prevState => ({...prevState, [event.target.name]: event.target.checked}))
  }

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, {}]);
    setEditableData({
      ...editableData,
      variants: [...editableData.variants, {}],
    });
  };

  const handleSubdmit = () => {
    let data = {
      ...productData,
      variants: serviceList,
      image_path: null,
      checkout_image_path: null,
    };

    let body = new FormData();
    body.append("protein-img", productPhoto);

    axios
      .post("https://protein.catkinsofttech-bd.xyz/protien-image-upload", body)
      .then((res) => {
        data["image_path"] = res.data;
        setProductPhoto(null);
        let body1 = new FormData();
        body1.append("protein-img", orderPagePhoto);
        axios
          .post(
            "https://protein.catkinsofttech-bd.xyz/protien-image-upload",
            body1
          )
          .then((res) => {
            data["checkout_image_path"] = res.data;
            setOrderPagePhoto(null);

            axios
              .post(
                `https://protein.catkinsofttech-bd.xyz/api/product/create`,
                data
              )
              .then((res) => {
                console.log("saved");
                handleAddClose();
                // let z = res.data;
                // let new_vr = {};
                // z.variants.map((vt) => {
                //   new_vr[vt.variant_type] = vt;
                // })
                // z.variants = new_vr;
                // console.log(z)
                updateProductList(res.data);
                setProductData({'complimentary': false})
              })
              .catch((err) => {
                console.log(err.message);
              });
          })
          .catch((err) => {
            alert("No Image provided");
            console.log("Failed to save image");
          });
      })
      .catch((err) => {
        alert("No Image provided");
        console.log("Failed to save image");
      });
  };

  const callUpdateAPI = (updateImages) => {
    let newData = editableData;
    newData = { ...editableData, ...updateImages };
    axios
      .patch(
        `https://protein.catkinsofttech-bd.xyz/api/product/update`,
        newData
      )
      .then((res) => {
        console.log("updated", res);
        editProducList(newData);
        handleEditClose();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleUpdate = () => {
    let updateImages = {};

    if (productPhoto) {
      let body = new FormData();
      body.append("protein-img", productPhoto);

      axios
        .post(
          "https://protein.catkinsofttech-bd.xyz/protien-image-upload",
          body
        )
        .then((res) => {
          updateImages["image_path"] = res.data;
          if (orderPagePhoto) {
            let body1 = new FormData();
            body1.append("protein-img", orderPagePhoto);

            axios
              .post(
                "https://protein.catkinsofttech-bd.xyz/protien-image-upload",
                body1
              )
              .then((res) => {
                updateImages["checkout_image_path"] = res.data;
                callUpdateAPI(updateImages);
              })
              .catch((err) => {
                console.log("Failed to save image");
              });
          } else callUpdateAPI(updateImages);
        })
        .catch((err) => {
          console.log("Failed to save image");
        });
    } else if (orderPagePhoto) {
      let body1 = new FormData();
      body1.append("protein-img", orderPagePhoto);

      axios
        .post(
          "https://protein.catkinsofttech-bd.xyz/protien-image-upload",
          body1
        )
        .then((res) => {
          updateImages["checkout_image_path"] = res.data;
          if (productPhoto) {
            let body = new FormData();
            body.append("protein-img", productPhoto);

            axios
              .post(
                "https://protein.catkinsofttech-bd.xyz/protien-image-upload",
                body
              )
              .then((res) => {
                updateImages["image_path"] = res.data;
                callUpdateAPI(updateImages);
              })
              .catch((err) => {
                console.log("Failed to save image");
              });
          } else callUpdateAPI(updateImages);
        })
        .catch((err) => {
          console.log("Failed to save image");
        });
    } else callUpdateAPI(updateImages);
  };

  const handleDelete = (id) => {
    const data = {
      id: id,
    };
    axios
      .delete(`https://protein.catkinsofttech-bd.xyz/api/product/delete`, {
        data: data,
      })
      .then((res) => {
        console.log("deleted");
        deleteFromProductList(id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="product-container">
        <div className="user-container-title">
          <p>Product Dashboard</p>
          <button onClick={handleAddShow}>Add</button>
        </div>

        <div className="dashboard-user-table-container">
          <table className="dashboard-user-table">
            <thead>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th colSpan="4">Starter</th>
              <th colspan="4">Researcher</th>
              <th colspan="4">Designer</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </thead>
            <thead>
              <th>Type</th>
              <th>Organism</th>
              <th>Protein</th>
              <th>Amino Acids</th>
              <th>Resigon</th>
              <th>Positions</th>
              <th>Price</th>
              <th>Rate</th>
              <th>Region</th>
              <th>Positions</th>
              <th>Price</th>
              <th>Rate</th>
              <th>Resigon</th>
              <th>Positions</th>
              <th>Price</th>
              <th>Rate</th>
              <th>Complimentary ?</th>
              <th>Product Photo</th>
              <th>Order Photo</th>
              <th></th>
              <th></th>
            </thead>
            <tbody>
              {all_product?.map((item) => {
                return (
                  <tr>
                    <td data-label="Type">{item.type}</td>

                    <td data-label="Organism" className="td-overflow-scroll">
                      {item.organism_name}
                    </td>
                    <td data-label="Protein">{item.protein_name}</td>
                    <td data-label="Amino Acids">{item.amino_acids}</td>

                    {
                      item.variants[0] !== undefined && item.variants[0].variant_type === "starter" ? (<>
                          <td data-label="Region">{item.variants[0].region}</td>
                          <td data-label="Positions">{item.variants[0].position}</td>
                          <td data-label="Price" className="td-overflow-scroll">{item.variants[0].price}</td>
                          <td data-label="Rate">{item.variants[0].rate}</td></>
                      ) : (
                          <>
                        <td data-label="Region">-</td>
                          <td data-label="Positions">-</td>
                          <td data-label="Price" className="td-overflow-scroll">-</td>
                          <td data-label="Rate">-</td>
                      </>
                      )
                    }

                    {
                      item.variants[1] !== undefined && item.variants[1].variant_type === "researcher" ? (<>
                          <td data-label="Region">{item.variants[1].region}</td>
                          <td data-label="Positions">{item.variants[1].position}</td>
                          <td data-label="Price" className="td-overflow-scroll">{item.variants[1].price}</td>
                          <td data-label="Rate">{item.variants[1].rate}</td></>
                      ) : (
                          <>
                        <td data-label="Region">-</td>
                          <td data-label="Positions">-</td>
                          <td data-label="Price" className="td-overflow-scroll">-</td>
                          <td data-label="Rate">-</td>
                      </>
                      )
                    }

                    {
                      item.variants[2] !== undefined && item.variants[2].variant_type === "designer" ? (<>
                          <td data-label="Region">{item.variants[2].region}</td>
                          <td data-label="Positions">{item.variants[2].position}</td>
                          <td data-label="Price" className="td-overflow-scroll">{item.variants[2].price}</td>
                          <td data-label="Rate">{item.variants[2].rate}</td></>
                      ) : (
                          <>
                        <td data-label="Region">-</td>
                          <td data-label="Positions">-</td>
                          <td data-label="Price" className="td-overflow-scroll">-</td>
                          <td data-label="Rate">-</td>
                      </>
                      )
                    }


                    <td data-label="Complimentary">
                      <input type="checkbox" name="complimentary" value="" />
                    </td>

                    <td data-label="Product Photo">
                      <img
                        className="pro-ord-img"
                        src={`https://protein.catkinsofttech-bd.xyz/${item.image_path}`}
                        alt={bacteria}
                      />
                    </td>
                    <td data-label="Order Photo">
                      <img
                        className="pro-ord-img-order"
                        src={`https://protein.catkinsofttech-bd.xyz/${item.checkout_image_path}`}
                        alt={bacteria}
                      />
                    </td>
                    <td>
                      <button
                        className="user-edit-btn"
                        onClick={() => {
                          handleEditShow(item.id);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="user-delete-btn"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* ======================================================================================= */}
        {/* Product Add Form Section */}
        {/* ======================================================================================= */}
        <Modal show={addShow} onHide={handleAddClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Product Add
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form>
                <div className="product-form-container">
                  <div className="product-form-col-6">
                    <div className="variant-title">
                      <p>Input Product</p>
                    </div>

                    <FormControl
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        margin: "10px 0px 20px 0px",
                      }}
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={productData.type}
                        onChange={handleProductData}
                        autoWidth
                        label="Type"
                        name="type"
                      >
                        <MenuItem
                          value={"bacteria"}
                          sx={{ width: 500, maxWidth: "100%" }}
                        >
                          Bacteria
                        </MenuItem>
                        <MenuItem
                          value={"virus"}
                          sx={{ width: 500, maxWidth: "100%" }}
                        >
                          Virus
                        </MenuItem>
                      </Select>
                    </FormControl>

                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        margin: "10px 0px 20px 0px",
                      }}
                    >
                      <TextField
                        value={productData.organism_name}
                        className="variant-input"
                        fullWidth
                        label="Organism Name"
                        name="organism_name"
                        id="fullWidth"
                        type="text"
                        onChange={handleProductData}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        margin: "10px 0px 20px 0px",
                      }}
                    >
                      <TextField
                        value={productData.protein_name}
                        onChange={handleProductData}
                        fullWidth
                        label="Protein Name"
                        name={"protein_name"}
                        id="fullWidth"
                        type="text"
                      />
                    </Box>

                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        margin: "10px 0px 20px 0px",
                      }}
                    >
                      <TextField
                        value={productData.amino_acids}
                        onChange={handleProductData}
                        fullWidth
                        label="Amino Acids"
                        name="amino_acids"
                        id="fullWidth"
                        type="text"
                      />
                    </Box>

                    <div className="label-holder">
                      <p> Complimentary</p>

                      <input type="checkbox" name="complimentary" onChange={handleComplimentary}/>
                    </div>

                    <div className="label-holder">
                      <p> Product Page Photo</p>

                      <input
                        type="file"
                        onChange={(e) => setProductPhoto(e.target.files[0])}
                      />
                    </div>

                    <div className="label-holder">
                      <p> Order Page Photo</p>

                      <input
                        type="file"
                        onChange={(e) => setOrderPagePhoto(e.target.files[0])}
                      />
                    </div>
                  </div>

                  <div className="product-form-col-6">
                    <div className="variant-title">
                      <p>Input Variant Package</p>
                    </div>

                    <div className="form-field">
                      {serviceList.map((singleService, index) => (
                        <div key={index}>
                          <p className="variant-input-package-title">
                            {(index === 0) ? "Starter" : (index === 1) ? "Researcher" : "Designer"} Package
                          </p>
                          <div className="variant-input-container">
                            <div className="variant-division">
                              {/* <TextField
                              className="variant-input"
                              name="title"
                              fullWidth
                              label="Organism Name"
                              id="fullWidth"
                              type="text"
                              value={singleService.title}
                              onChange={(e) => handleServiceChange(e, index)}
                            /> */}

                              <TextField
                                className="variant-input mt-2"
                                name="region"
                                fullWidth
                                label="Region"
                                id="fullWidth"
                                type="number"
                                value={singleService.region}
                                onChange={(e) => handleVPriceChange(e, index)}
                              />

                              <TextField
                                className="variant-input mt-2"
                                name="position"
                                fullWidth
                                label="Positions"
                                id="fullWidth"
                                type="number"
                                value={singleService.position}
                                onChange={(e) => handleVPriceChange(e, index)}
                              />

                              <TextField
                                className="variant-input mt-2"
                                name="price"
                                fullWidth
                                label="Price $"
                                id="fullWidth"
                                type="number"
                                value={singleService.price}
                                onChange={(e) => handleVPriceChange(e, index)}
                              />

                              <TextField
                                className="variant-input mt-2"
                                name="rate"
                                fullWidth
                                label="Rate"
                                id="fullWidth"
                                type="number"
                                value={singleService.rate}
                                onChange={(e) => handleVPriceChange(e, index)}
                              />

                              {serviceList.length - 1 === index &&
                                serviceList.length < 3 && (
                                  <button
                                    type="button"
                                    onClick={handleServiceAdd}
                                    className="add-btn"
                                  >
                                    <span>Add More</span>
                                  </button>
                                )}
                            </div>
                            <div className="variant-second-division">
                              {serviceList.length !== 1 && (
                                <button
                                  type="button"
                                  onClick={() => handleServiceRemove(index)}
                                  className="remove-btn"
                                >
                                  <span>Remove</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <input
                  type="button"
                  onClick={handleSubdmit}
                  value="Submit"
                  className="product-submit-btn"
                />
              </form>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ======================================================================================= */}
        {/* Product Edit Form Section */}
        {/* ======================================================================================= */}
        <Modal show={editShow} onHide={handleEditClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Product Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form>
                <div className="product-form-container">
                  <div className="product-form-col-6">
                    <div className="variant-title">
                      <p>Input Product</p>
                    </div>

                    <FormControl
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        margin: "10px 0px 20px 0px",
                      }}
                    >
                      <InputLabel id="demo-simple-select-autowidth-label">
                        Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={editableData && editableData.type}
                        onChange={handleProductEdit}
                        autoWidth
                        label="Type"
                        name="type"
                      >
                        <MenuItem
                          value={"bacteria"}
                          sx={{ width: 500, maxWidth: "100%" }}
                        >
                          Bacteria
                        </MenuItem>
                        <MenuItem
                          value={"virus"}
                          sx={{ width: 500, maxWidth: "100%" }}
                        >
                          Virus
                        </MenuItem>
                      </Select>
                    </FormControl>

                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        margin: "10px 0px 20px 0px",
                      }}
                    >
                      <TextField
                        value={editableData && editableData.organism_name}
                        fullWidth
                        label="Organism Name"
                        id="fullWidth"
                        type="text"
                        name={"organism_name"}
                        onChange={handleProductEdit}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        margin: "10px 0px 20px 0px",
                      }}
                    >
                      <TextField
                        value={editableData && editableData.protein_name}
                        // onChange={(e) => {
                        //   setTitle(e.target.value);
                        //   setEditableData((prevState) => ({
                        //     ...prevState,
                        //     title: e.target.value,
                        //   }));
                        // }}
                          onChange={handleProductEdit}
                        fullWidth
                        label="Protein Name"
                        id="fullWidth"
                        type="text"
                        name="protein_name"
                      />
                    </Box>

                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                        margin: "10px 0px 20px 0px",
                      }}
                    >
                      <TextField
                        value={editableData && editableData.amino_acids}
                        fullWidth
                        label="Amino Acids"
                        id="fullWidth"
                        name="amino_acids"
                        onChange={handleProductEdit}
                        type="text"
                      />
                    </Box>

                    <div className="label-holder">
                      <p> Complimentary</p>

                      <input type="checkbox" name="complimentary" defaultChecked={editableData && editableData.complimentary}
                        onChange={handleEditComplimentary}/>
                    </div>

                    <div className="label-holder">
                      <p> Product Page Photo</p>

                      <input
                        type="file"
                        id="pp"
                        onChange={(e) => setProductPhoto(e.target.files[0])}
                      />
                    </div>

                    <div className="label-holder">
                      <p> Order Page Photo</p>

                      <input
                        type="file"
                        id="op"
                        onChange={(e) => setOrderPagePhoto(e.target.files[0])}
                      />
                    </div>
                  </div>

                  <div className="product-form-col-6">
                    <div className="variant-title">
                      <p>Input Variant Package</p>
                    </div>

                    <div className="form-field">
                      {editableData &&
                        editableData.variants.map((singleService, index) => (
                          <div key={index}>
                            <p className="variant-input-package-title">
                              {(index === 0) ? "Starter" : (index === 1) ? "Researcher" : "Designer"} Package
                            </p>
                            <div className="variant-input-container">
                              <div className="variant-division">

                                <TextField
                                  className="variant-input mt-2"
                                  name="region"
                                  fullWidth
                                  label="Region"
                                  id="fullWidth"
                                  type="number"
                                  value={singleService.region}
                                  onChange={(e) => handleVPriceChange(e, index)}
                                />

                                <TextField
                                  className="variant-input mt-2"
                                  name="position"
                                  fullWidth
                                  label="Positions"
                                  id="fullWidth"
                                  type="number"
                                  value={singleService.position}
                                  onChange={(e) => handleVPriceChange(e, index)}
                                />

                                <TextField
                                  className="variant-input mt-2"
                                  name="price"
                                  fullWidth
                                  label="Price $"
                                  id="fullWidth"
                                  type="number"
                                  value={singleService.price}
                                  onChange={(e) => handleVPriceChange(e, index)}
                                />

                                <TextField
                                  className="variant-input mt-2"
                                  name="rate"
                                  fullWidth
                                  label="Rate"
                                  id="fullWidth"
                                  type="number"
                                  value={singleService.rate}
                                  onChange={(e) => handleVPriceChange(e, index)}
                                />
                                {serviceList.length - 1 === index &&
                                  serviceList.length < 3 && (
                                    <button
                                      type="button"
                                      onClick={handleServiceAdd}
                                      className="add-btn"
                                    >
                                      <span>Add More</span>
                                    </button>
                                  )}
                              </div>
                              <div className="variant-second-division">
                                {serviceList.length !== 1 && (
                                  <button
                                    type="button"
                                    onClick={() => handleServiceRemove(index)}
                                    className="remove-btn"
                                  >
                                    <span>Remove</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <input
                  type="button"
                  value="Submit"
                  onClick={handleUpdate}
                  className="product-submit-btn"
                />
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Product;
