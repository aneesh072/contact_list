import React, { useState } from 'react';

const EditableRow = ({
  setNewName,
  setNewAddress,
  setNewMobile,
  contact,
  updateContact,
  handleCancleClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          placeholder="Enter name..."
          name="fullName"
          defaultValue={contact.name}
          onChange={(e) => setNewName(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter address..."
          name="address"
          defaultValue={contact.address}
          onChange={(e) => setNewAddress(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required
          placeholder="Enter mobile..."
          defaultValue={contact.mobile}
          name="mobile"
          onChange={(e) => setNewMobile(e.target.value)}
        ></input>
      </td>
      <td>
        <div className="edited-btn">
          <button id="save" onClick={() => updateContact(contact._id)}>
            Save
          </button>
          <button id="cancel" onClick={handleCancleClick}>
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EditableRow;
