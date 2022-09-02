import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Product.css"
import "../Users/Users.css"
import bacteria from '../../Images/bacteria.jpg'

const Product = () => {
// Modal State
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

// Product Input State
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const [variantPrice, setVariantPrice] = useState([{ vprice: "" }]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };



  const handleVPriceChange = (e, index) => {
    const { name, value } = e.target;
    const vlist = [...variantPrice];
    vlist[index][name] = value;
    setVariantPrice(vlist);
  };


  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };


  const handleVPriceRemove = (index) => {

    const vlist = [...variantPrice];
    vlist.splice(index, 1);
    setVariantPrice(vlist);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };


  const handleVPriceAdd = () => {
    setVariantPrice([...variantPrice, { vprice: "" }]);
  };


  // Select Input State
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
    <th>Protein Name</th>
    <th>Organism Name</th>
              <th>Price</th>
              <th>Type</th>        
    <th>Product Photo</th>
            <th>Order Photo</th>
            <th></th>
            <th></th>
  </thead>
  <tbody>
    <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
              

              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>   
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>




              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>




              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>




              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>



              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>



              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>


              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>



              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>



              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>



              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>



              <tr>
      <td data-label="Protein Name">Ebola</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  <p>matrix</p>
                  <p>spike</p>
                  <p>glycoprotein</p>
                  <p>spike</p>
      </td>
                <td data-label="Price" className="td-overflow-scroll">
                  <p>$19.95</p>
                  <p>$49.95</p>
                  <p>$79.95</p>
                  <p>$99.95</p>
                </td>
                <td data-label="Type">Bacteria</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
  
  </tbody>
</table>
        </div>


        <Modal
        show={addShow}
        onHide={handleAddClose}
        size = "xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          Product Add
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <form >
            <div className="product-form-container">

            <div className="product-form-col-6">
            <div className="variant-title">
                <p>Input Product</p>
                    </div>
                    
                    <FormControl sx={{  width: 500,
                  maxWidth: '100%',
        margin: "10px 0px 20px 0px"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
                        label="Type"
        >
          <MenuItem value={10}   sx={{  width: 500,
                          maxWidth: '100%',}}>Bacteria</MenuItem>
          <MenuItem value={21}   sx={{  width: 500,
                          maxWidth: '100%',}}>Virus</MenuItem>
        </Select>
      </FormControl>




            <Box
      sx={{
        width: 500,
                  maxWidth: '100%',
        margin: "10px 0px 20px 0px"
      }}
    >
      <TextField fullWidth label="Protein Name" id="fullWidth" type="text" />
              </Box>
              

          
                <div className="label-holder">
                  <p> Product Page Photo</p>
     
                   <input type="file"/>
        </div>
   
     
                <div className="label-holder">
                  <p> Order Page Photo</p>
         
                   <input type="file"/>
        </div>
      
      
              
             
            </div>

            <div className="product-form-col-6">
              <div className="variant-title">
                <p>Input Variant Package</p>
              </div>
              
          



          
      <div className="form-field">
        {serviceList.map((singleService, index) => (
          <div key={index} className="variant-input-container">
            <div className="variant-division">

              <TextField className="variant-input" name="service" fullWidth label="Organism Name" id="fullWidth" type="text" value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)} />
              
              {serviceList.length - 1 === index && serviceList.length < 4 && (
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
        ))}
                  



                  {variantPrice.map((vpriceService, index) => (
          <div key={index} className="variant-input-container">
            <div className="variant-division">

             
              
              <TextField className="variant-input" name="vprice" fullWidth label="Variant Price $" id="fullWidth" type="number" value={vpriceService.vprice}
                onChange={(e) => handleVPriceChange(e, index)}/>
              {variantPrice.length - 1 === index && variantPrice.length < 4 && (
                <button
                  type="button"
                  onClick={handleVPriceAdd}
                  className="add-btn"
                >
                  <span>Add More</span>
                </button>
              )}
            </div>
            <div className="variant-second-division">
              {variantPrice.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleVPriceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    

            </div>
           </div>


            <input type="submit" className="product-submit-btn"/>
          </form>
        </div>
          </Modal.Body>
          
         
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Close
          </Button>
         
        </Modal.Footer>
        </Modal>
        

        


        
        
        <Modal show={editShow} onHide={handleEditClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Product Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <form >
            <div className="product-form-container">

            <div className="product-form-col-6">
            <div className="variant-title">
                <p>Input Product</p>
                    </div>
                    
                    <FormControl sx={{  width: 500,
                  maxWidth: '100%',
        margin: "10px 0px 20px 0px"}}>
        <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
                        label="Type"
        >
          <MenuItem value={10}   sx={{  width: 500,
                          maxWidth: '100%',}}>Bacteria</MenuItem>
          <MenuItem value={21}   sx={{  width: 500,
                          maxWidth: '100%',}}>Virus</MenuItem>
        </Select>
      </FormControl>
            <Box
      sx={{
        width: 500,
                  maxWidth: '100%',
        margin: "10px 0px 20px 0px"
      }}
    >
      <TextField fullWidth label="Protein Name" id="fullWidth" type="text" />
              </Box>
              

          
                <div className="label-holder">
                  <p> Product Page Photo</p>
     
                   <input type="file"/>
        </div>
   
     
                <div className="label-holder">
                  <p> Order Page Photo</p>
         
                   <input type="file"/>
        </div>
      
      
              
             
            </div>

            <div className="product-form-col-6">
              <div className="variant-title">
                <p>Input Variant Package</p>
              </div>
              
          



          
      <div className="form-field">
        {serviceList.map((singleService, index) => (
          <div key={index} className="variant-input-container">
            <div className="variant-division">

              <TextField className="variant-input" name="service" fullWidth label="Organism Name" id="fullWidth" type="text" value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)} />
              
              {serviceList.length - 1 === index && serviceList.length < 4 && (
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
        ))}
                  



                  {variantPrice.map((vpriceService, index) => (
          <div key={index} className="variant-input-container">
            <div className="variant-division">

             
              
              <TextField className="variant-input" name="vprice" fullWidth label="Variant Price $" id="fullWidth" type="number" value={vpriceService.vprice}
                onChange={(e) => handleVPriceChange(e, index)}/>
              {variantPrice.length - 1 === index && variantPrice.length < 4 && (
                <button
                  type="button"
                  onClick={handleVPriceAdd}
                  className="add-btn"
                >
                  <span>Add More</span>
                </button>
              )}
            </div>
            <div className="variant-second-division">
              {variantPrice.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleVPriceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    

            </div>
           </div>


            <input type="submit" className="product-submit-btn"/>
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
  )
}

export default Product