import React, { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';
import '../App.css';
import ReadOnlyRows from './ReadOnlyRows';
import EditableRow from './EditableRow';

const Form = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState(0);
  const [contactList, setContactList] = useState([]);
  const [editContactId, setEditContactId] = useState(null);

  const [newName, setNewName] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newMobile, setNewMobile] = useState(0);

  const addContact = () => {
    Axios.post('http://localhost:3003/addContact', {
      name: name,
      address: address,
      mobile: mobile,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact._id);
  };

  const deleteContact = (id) => {
    Axios.delete(`http://localhost:3003/delete/${id}`).then(() => {
      setContactList(
        contactList.filter((val) => {
          return val._id !== id;
        })
      );
    });
  };
  const updateContact = (id) => {
    Axios.put('http://localhost:3003/update', {
      newName: newName,
      newAddress: newAddress,
      newMobile: newMobile,
      id: id,
    }).then(() => {
      setContactList(
        contactList.map((val) => {
          return val._id === id
            ? { _id: id, name: newName, address: newAddress, mobile: newMobile }
            : val;
        })
      );
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

  const handleCancleClick = () => {
    setEditContactId(null);
  };

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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Add to contact
          </button>
        </form>
      </div>
      <div className="contactList">
        <form>
          <table className="contacts">
            <tbody>
              <tr className="table-head">
                <th>Name</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
              {contactList.map((contact, key) => {
                return (
                  <Fragment>
                    {editContactId === contact._id ? (
                      <EditableRow
                        setNewName={setNewName}
                        setNewAddress={setNewAddress}
                        setNewMobile={setNewMobile}
                        updateContact={updateContact}
                        contact={contact}
                        handleCancleClick={handleCancleClick}
                      />
                    ) : (
                      <ReadOnlyRows
                        contact={contact}
                        deleteContact={deleteContact}
                        handleEditClick={handleEditClick}
                      />
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Form;
