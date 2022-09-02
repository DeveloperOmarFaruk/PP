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
import axios from 'axios'

const Product = ({products, updateProductList, deleteFromProductList, editProducList}) => {
// Modal State
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  const handleEditClose = () => setEditShow(false);

  const handleEditShow = (id) => {
    setProductId(id)
    setEditShow(true);
    axios.get(`https://protein.catkinsofttech-bd.xyz/api/product/${id}`).then(res=>{
      setTitle(res.data.title)
      setType(res.data.product_type)
      setServiceList(res.data.variants)
    }).catch(err=>{
      console.log(err.message)
    })
  }

// Product Input State
  const [serviceList, setServiceList] = useState([{ title: "", price: ""}]);
  
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleVPriceChange = (e, index) =>{
    const {name, value} = e.target
    const list = [...serviceList]
    list[index][name] = value
    setServiceList(list)
  }


  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };


  const handleServiceAdd = () => {
    setServiceList([...serviceList, { title: "", price: "" }]);
  };

  // Select Input State
  const [type, setType] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [productId, setProductId] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleSubdmit =() =>{
    const data = {
      "title": title,
      "product_type": type,
      "variants": serviceList
    }
    axios.post(`https://protein.catkinsofttech-bd.xyz/api/product/create`, data).then(res=>{
      console.log('saved')
      handleAddClose()
      updateProductList(res.data)
    }).catch(err=>{
      console.log(err.message)
    })

  }

  const handleUpdate =()=>{
    const data = {
      "id": productId,
      "title": title,
      "product_type": type,
      "variants": serviceList
    }

    axios.patch(`https://protein.catkinsofttech-bd.xyz/api/product/update`, data).then(res=>{
      console.log('updated')
      editProducList(data)
      console.log(data)
      handleEditClose()
    }).catch(err=>{
      console.log(err.message)
    })

  }

  const handleDelete=(id)=>{
    const data = {
      "id": id
    }
    axios.delete(`https://protein.catkinsofttech-bd.xyz/api/product/delete`, {'data': data}).then(res=>{
      console.log('deleted')
      deleteFromProductList(id)
    }).catch(err=>{
      console.log(err.message)
    })
  }


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
    {products?.map(item=>{
      return(
        <tr>
      <td data-label="Protein Name">{item.title}</td>
                <td data-label="Organism Name" className="td-overflow-scroll">
                  {item.variants?.map(res=>{
                    return(
                      <p>{res.title}</p>
                    )
                  })}
                </td>
                <td data-label="Price" className="td-overflow-scroll">
                  {item.variants?.map(res=>{
                    return(
                      <p>${res.price}</p>
                    )
                  })}
                </td>
                <td data-label="Type">{item.product_type}</td>
                <td data-label="Product Photo">
                  <img className="pro-ord-img" src={bacteria} alt={bacteria} />
      </td>
                <td data-label="Order Photo">
                <img className="pro-ord-img-order" src={bacteria} alt={bacteria} />
              </td>
              <td>
                <button className="user-edit-btn" onClick={()=>{handleEditShow(item.id)}}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn" onClick={()=>{handleDelete(item.id)}}>Delete</button>
              </td>
    </tr>  
      )
    })}
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
          value={type}
          onChange={handleChange}
          autoWidth label="Type"
        >
          <MenuItem value={'bacteria'}   sx={{  width: 500,
                          maxWidth: '100%',}}>Bacteria</MenuItem>
          <MenuItem value={'virus'}   sx={{  width: 500,
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
      <TextField value={title} onChange={(e)=>{setTitle(e.target.value)}} fullWidth label="Protein Name" id="fullWidth" type="text" />
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

              <TextField className="variant-input" name="title" fullWidth label="Organism Name" id="fullWidth" type="text" value={singleService.title}
                onChange={(e) => handleServiceChange(e, index)} />

                <TextField className="variant-input mt-2" name="price" fullWidth label="Variant Price $" id="fullWidth" type="number" value={singleService.price}
                onChange={(e) => handleVPriceChange(e, index)}/>
              
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
      </div>
    

            </div>
           </div>


            <input type="button" onClick={handleSubdmit} value="Submit" className="product-submit-btn"/>
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
          value={type}
          onChange={handleChange}
          autoWidth
                        label="Type"
        >
          <MenuItem value={'bacteria'}   sx={{  width: 500,
                          maxWidth: '100%',}}>Bacteria</MenuItem>
          <MenuItem value={'virus'}   sx={{  width: 500,
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
      <TextField value={title} onChange={(e)=>setTitle(e.target.value)} fullWidth label="Protein Name" id="fullWidth" type="text" />
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

              <TextField className="variant-input" name="title" fullWidth label="Organism Name" id="fullWidth" type="text" value={singleService.title}
                onChange={(e) => handleServiceChange(e, index)} />
              <TextField className="variant-input mt-2" name="price" fullWidth label="Variant Price $" id="fullWidth" type="number" value={singleService.price}
                onChange={(e) => handleVPriceChange(e, index)}/>
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
      </div>
    

            </div>
           </div>


            <input type="button" value="Submit" onClick={handleUpdate} className="product-submit-btn"/>
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