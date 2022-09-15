import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { GrUpdate } from 'react-icons/gr';

const ReadOnlyRows = ({ contact, key, deleteContact, handleEditClick }) => {
  return (
    <tr key={key}>
      <td>{contact.name}</td>
      <td>{contact.address}</td>
      <td>{contact.mobile}</td>
      <td>
        <div className="contact-btn">
          <button
            id="update"
            onClick={(event) => handleEditClick(event, contact)}
          >
            <GrUpdate />
          </button>
          <button id="delete" onClick={() => deleteContact(contact._id)}>
            <MdDeleteForever />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRows;
