import React from "react";
import PropTypes from "prop-types";

const Card = ({buttonText, buttonBackgroundColor, property, onClick}) => (
  <div>
    <header>ID: {property.id}</header>
    <div>
      <img src={property.mainImage} alt="" style={{width: "200px"}} />
    </div>
    <div>
      <button
        style={{
          backgroundColor: buttonBackgroundColor,
          color: "white"
        }}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

export const PropertyPropTypes = PropTypes.shape({
  price: PropTypes.string.isRequired,
  agency: PropTypes.shape({
    brandingColors: PropTypes.shape({ primary: PropTypes.string.isRequired })
      .isRequired,
    logo: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.string.isRequired,
  mainImage: PropTypes.string.isRequired
});

Card.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonBackgroundColor: PropTypes.string.isRequired,
  property: PropertyPropTypes.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
