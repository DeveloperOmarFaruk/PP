import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Users.css"


const Users = () => {

  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const handleAddClose = () => setAddShow(false);
  const handleAddShow = () => setAddShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);


  return (
    <>
      <div className="user-container">
        <div className="user-container-title">
          <p>User Dashboard</p>
          <button onClick={handleAddShow}>Add</button>
        </div>



        <div className="dashboard-user-table-container">
        <table className="dashboard-user-table">
  <thead>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Product Purchased</th>
            <th>Product Price</th>
            <th></th>
            <th></th>
  </thead>
  <tbody>
    <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn" onClick={handleEditShow}>Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
    </tr>

    <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
              
              <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
              

              <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
              

              <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
              
              <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
              

              <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
              
              <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
    </tr>

    <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
    </tr>


    <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
    </tr>


    <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
    </tr>

 <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
              </tr>
              <tr>
      <td data-label="Name">Emet30</td>
      <td data-label="Email">emet30@gmail.com</td>
      <td data-label="Password">34454656</td>
      <td data-label="Product Purchased">5</td>
              <td data-label="Product Price">$500</td>
              <td>
                <button className="user-edit-btn">Edit</button>
              </td>
              <td >
              <button className="user-delete-btn">Delete</button>
              </td>
    </tr>  
  </tbody>
</table>
        </div>
        


        <Modal show={addShow} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Add</Modal.Title>
        </Modal.Header>
          <Modal.Body>

          <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Name" id="fullWidth" type="text"/>
            </Box>

            <Box
      sx={{
        width: 500,
                maxWidth: '100%',
        margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="Email" id="fullWidth"  type="email" />
            </Box>


            <Box
      sx={{
        width: 500,
                maxWidth: '100%',
        margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="Password" id="fullWidth"  type="password"/>
            </Box>



            <Box
      sx={{
        width: 500,
                maxWidth: '100%',
        margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="Product Purchased" id="fullWidth"  type="number"/>
            </Box>


            <Box
      sx={{
        width: 500,
                maxWidth: '100%',
        margin: "20px 0px"
      }}
    >
      <TextField fullWidth label="Product Price $" id="fullWidth"  type="number"/>
            </Box>
            

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddClose}>
            Save
          </Button>
        </Modal.Footer>
        </Modal>
        
        
        <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<Box
sx={{
width: 500,
maxWidth: '100%',
}}
>
<TextField fullWidth label="Name" id="fullWidth" type="text"/>
  </Box>

  <Box
sx={{
width: 500,
      maxWidth: '100%',
margin: "20px 0px"
}}
>
<TextField fullWidth label="Email" id="fullWidth"  type="email" />
  </Box>


  <Box
sx={{
width: 500,
      maxWidth: '100%',
margin: "20px 0px"
}}
>
<TextField fullWidth label="Password" id="fullWidth"  type="password"/>
  </Box>



  <Box
sx={{
width: 500,
      maxWidth: '100%',
margin: "20px 0px"
}}
>
<TextField fullWidth label="Product Purchased" id="fullWidth"  type="number"/>
  </Box>


  <Box
sx={{
width: 500,
      maxWidth: '100%',
margin: "20px 0px"
}}
>
<TextField fullWidth label="Product Price $" id="fullWidth"  type="number" placeholder='1234'/>
  </Box>
  

</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
        
    </div>
    </>
  )
}

export default Users