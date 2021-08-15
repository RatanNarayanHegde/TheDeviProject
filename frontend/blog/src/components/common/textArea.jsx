import React from "react";

const TextArea = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <textarea
        {...rest}
        name={name}
        id={name}
        className="form-control"
      ></textarea>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
