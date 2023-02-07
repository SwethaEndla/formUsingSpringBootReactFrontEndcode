import React, { useState } from 'react';
import Axios
 from 'axios';


const Form = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    address: " ",
    dateOfBirth: "",
    gender: "",
  });

  const handleChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        firstName: inputData.firstName,
        lastName: inputData.lastName,
        mobileNumber: inputData.mobileNumber,
        email: inputData.email,
        address: inputData.address,
        dateOfBirth: inputData.dateOfBirth,
        gender: inputData.gender
        
    };

    Axios.post('http://localhost:8081/form/registration', {
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',

      },
      body: JSON.stringify(data)
    }) .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  return ( 
    <form onSubmit={handleSubmit}>
      <table>
       <tr>
       <th>
        First Name :
       </th>
       <td>
       <input
        type="text"
        name="firstName"
        value={inputData.firstName}
        onChange={handleChange}
        placeholder="Enter First Name"
      />
       </td>
       </tr>
      <tr>
      <th>Last Name :</th>
      <td>
      <input
        type="text"
        name="lastName"
        value={inputData.lastName}
        onChange={handleChange}
        placeholder="Enter Last Name"
      />
      </td>
    </tr>
    <tr>
    <th>Mobile Number :</th>
    <td>
      <input
        type="text"
        name="mobileNumber"
        value={inputData.mobileNumber}
        onChange={handleChange}
        placeholder="Enter Mobile Number"
      />
    </td>
    </tr>
    <tr>
    <th>Email :</th>
    <td>
      <input
        type="email"
        name="email"
        value={inputData.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
    </td>
    </tr>  
    
    <tr>
    <th>Address :</th>
    <td>
      <input
        type="text"
        name="address"
        value={inputData.address}
        onChange={handleChange}
        placeholder="Enter Address"
      />
    </td>
    </tr>  
    <tr>
    <th>Date Of Birth :</th>
    <td>
      <input
        type="text"
        name="dateOfBirth"
        value={inputData.dateOfBirth}
        onChange={handleChange}
        placeholder="Enter DOB"
      />
    </td>  
    </tr>
    <tr>
    <th>Gender : </th>
    <td>
      <input
        type="text"
        name="gender"
        value={inputData.gender}
        onChange={handleChange}
        placeholder="Enter Gender"
      />
      </td>
    </tr>  
      </table>
    <button type="submit" onClick={() =>alert("Thank You For Registration")}>Add Data</button>
    </form>
  );
};

export default Form;

