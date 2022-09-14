import React, { useState } from 'react';
import '../App.css';

const Form = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState(0);
  const [photo, setPhoto] = useState([]);

  const addContact = () =>{
    
  }

  return (
    <div className="form">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address..."
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Mobile</label>
            <input
              type="number"
              className="form-control"
              placeholder="Mobile..."
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label>Upload Profile</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Add to contact
        </button>
      </form>
    </div>
  );
};

export default Form;
