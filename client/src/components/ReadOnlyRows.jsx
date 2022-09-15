import React from 'react';

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
            UPDATE
          </button>
          <button id="delete" onClick={() => deleteContact(contact._id)}>
            DELETE
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ReadOnlyRows;
