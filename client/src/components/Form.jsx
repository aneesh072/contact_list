import React from 'react';
import '../App.css';

const Form = () => {
  return (
    <div className="form">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Name..." />
          </div>
          <div className="form-group col-md-6">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address..."
            />
          </div>
          <div className="form-group col-md-6">
            <label>Mobile</label>
            <input
              type="number"
              className="form-control"
              placeholder="Mobile..."
              id='mobile'
            />
          </div>
          <div className="form-group col-md-6">
            <label>Upload Profile</label>
            <input type="file" className="form-control" />
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
