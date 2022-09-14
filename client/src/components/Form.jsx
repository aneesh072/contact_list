import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import '../App.css';

const Form = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState(0);
  const [photo, setPhoto] = useState('');
  const [contactList, setContactList] = useState([]);

  const addContact = () => {
    Axios.post('http://localhost:3003/addContact', {
      name: name,
      address: address,
      mobile: mobile,
      photo: photo,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Axios.get('http://localhost:3003/read')
      .then((response) => {
        setContactList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="form">
        <form onSubmit={addContact}>
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
          </div>
          <button type="submit" className="btn btn-primary">
            Add to contact
          </button>
        </form>
      </div>
      <div className="contactList">
        <table className="contacts">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Mobile</th>
            </tr>
            {contactList.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.address}</td>
                  <td>{val.mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
