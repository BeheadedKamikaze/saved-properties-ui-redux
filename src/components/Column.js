import React from "react";
import PropTypes from "prop-types";
import Card, { PropertyPropTypes } from "./Card";

const Column = ({ type, heading, properties, buttonText, buttonBackgroundColor, buttonClick }) => (
  <div style={{ float: "left" }}>
    <h2>{heading}</h2>
    {properties.map(property => (
      <Card
        key={property.id}
        type={type}
        property={property}
        buttonText={buttonText}
        buttonBackgroundColor={buttonBackgroundColor}
        onClick={() => buttonClick(property.id)}
      />
    ))}
  </div>
);

Column.propTypes = {
  type: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  properties: PropTypes.arrayOf(PropertyPropTypes).isRequired,
  buttonClick: PropTypes.func.isRequired
};

export default Column;
