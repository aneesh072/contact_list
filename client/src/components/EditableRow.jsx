import React from 'react';

const EditableRow = ({
  setNewName,
  setNewAddress,
  setNewMobile,
  contact,
  updateContact,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          placeholder="Enter name..."
          name="fullName"
          onChange={(e) => setNewName(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter address..."
          name="address"
          onChange={(e) => setNewAddress(e.target.value)}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required
          placeholder="Enter mobile..."
          name="mobile"
          onChange={(e) => setNewMobile(e.target.value)}
        ></input>
      </td>
      <td>
        {' '}
        <button onClick={() => updateContact(contact._id)}>Save</button>
      </td>
    </tr>
  );
};

export default EditableRow;
