import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Column = ({ type, properties, buttonClick }) => (
  <div style={{ float: "left" }}>
    {properties.map(property => (
      <Card
        key={property.id}
        type={type}
        property={property}
        onClick={() => buttonClick(property.id)}
      />
    ))}
  </div>
);

Column.propTypes = {
  type: PropTypes.string.isRequired,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      agency: PropTypes.shape({
        brandingColors: PropTypes.shape({
          primary: PropTypes.string.isRequired
        }).isRequired,
        logo: PropTypes.string.isRequired
      }).isRequired,
      id: PropTypes.string.isRequired,
      mainImage: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  buttonClick: PropTypes.func.isRequired
};

export default Column;
