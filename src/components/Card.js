import React from "react";
import PropTypes from "prop-types";

const Card = ({type, property, onClick}) => (
  <div>
    <header>ID: {property.id}</header>
    <div>
      <img src={property.mainImage} alt="" style={{width: "200px"}} />
    </div>
    <div>
      <button
        style={{
          backgroundColor: type === "results" ? "green" : "red",
          color: "white"
        }}
        onClick={onClick}
      >
        {type === "results" ? "Add Property" : "Remove Property"}
      </button>
    </div>
  </div>
);

Card.propTypes = {
  type: PropTypes.string.isRequired,
  property: PropTypes.shape({
    price: PropTypes.string.isRequired,
    agency: PropTypes.shape({
      brandingColors: PropTypes.shape({ primary: PropTypes.string.isRequired })
        .isRequired,
      logo: PropTypes.string.isRequired
    }).isRequired,
    id: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
